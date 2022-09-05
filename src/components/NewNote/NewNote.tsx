import React, {useCallback, useState} from 'react';
import {useMutation} from "@apollo/client";
import {NEW_NOTE} from "./query";
import {ALL_NOTES} from "../AllNotes/query";
import {Button, TextField} from "@mui/material";

export const NewNote = () => {
    const [value, setValue] = useState('')

    const [addNote, { data, loading, error }] = useMutation(NEW_NOTE, {
        refetchQueries: [
            { query: ALL_NOTES }, // DocumentNode object parsed with gql
            'AllNotes' // Query name
        ]
    })

    const handleSubmit = useCallback(() => {
        addNote({ variables: { note: { text: value } } })
    }, [addNote, value])

    if (loading) return <div>Submitting...</div>
    if (error) return <div>{`Submission error! ${error.message}`}</div>

    return (
        <>
            <input
                maxLength={180}
                value={value}
                onChange={e => setValue(e.target.value)}
            />
            <Button variant="text" onClick={handleSubmit}>
                Save note
            </Button>
        </>
    )
}

export default NewNote;