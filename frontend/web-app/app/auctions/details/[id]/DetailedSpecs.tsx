'use client';

import { numberWithCommas } from "@/lib/numberWithCommas";
import { Auction } from "@/types";
import { Table } from "flowbite-react";

type Props = {
    auction: Auction
}
export default function DetailedSpecs({ auction }: Props) {

    const data = [
        ['Seller', auction.seller],
        ['Make', auction.make],
        ['Model', auction.model],
        ['Year manufactured', auction.year.toString()],
        ['Mileage', auction.mileage.toString()],
        ['Has reserve price?', auction.reservePrice > 0 ? 'Yes ($' + numberWithCommas(auction.reservePrice) + ')' : 'No'],
    ];

    return (
        <>
            <div className="mt-1"> &nbsp; </div>
            <Table striped={true}>
                <Table.Body className="divide-y">

                    {data.map((v, i) => (
                        <Table.Row key={i} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                {v[0]}
                            </Table.Cell>
                            <Table.Cell>
                                {v[1]}
                            </Table.Cell>
                        </Table.Row>
                    ))}

                </Table.Body>
            </Table>
            <div className="mt-3 mb-3"> &nbsp; </div>
        </>
    );
}