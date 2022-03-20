import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import BoardHeader from './BoardHeader'

const player = 'CPU';

test('Board header render', async () => {
    const {findByRole} = render(<BoardHeader player={player}/>);

    const header = await findByRole('heading');

    expect(header).toHaveTextContent(player);
})