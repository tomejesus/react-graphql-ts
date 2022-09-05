import * as React from 'react';
import { AllNotesQuery } from '../../generated/graphql';

interface Props {
    data: AllNotesQuery;
}

const className = 'AllNotes';

const AllNotes: React.FC<Props> = ({ data }) => (
    <div className={className}>
        <h3>All Notes</h3>
        <ol className={`${className}__list`}>
            {!!data.notes &&
                data.notes.map(
                    (note, i) =>
                        <li key={i} className={`${className}__item`}>
                            Note #{note.id}: {note.text}
                        </li>
                )}
        </ol>
    </div>
);

export default AllNotes;