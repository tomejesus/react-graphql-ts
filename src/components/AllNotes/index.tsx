import * as React from 'react';
import { useAllNotesQuery } from '../../generated/graphql';
import AllNotes from './AllNotes';

const AllNotesContainer = () => {
    const { data, error, loading } = useAllNotesQuery();

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error || !data) {
        return <div>ERROR</div>;
    }

    return <AllNotes data={data} />;
};

export default AllNotesContainer;
