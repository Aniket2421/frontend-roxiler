import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from "../Table/Table";
import BarChart from "../BarChart/BarChart";
import Statistics from "../Statics/Statics";
import Piechart from "../PieChart/PieChart";
import "./TransactionTable.css";

const TransactionTable = () => {
    const [selectedOption, setSelectedOption] = useState(3);
    const [searchText, setSearchText] = useState("");
    const [page, setPage] = useState(1);
    const [fetcheddata, setFetcheddata] = useState(null);
    const [loading, setLoading] = useState(true);

    let response = async () => {
        setLoading(true);
        let result = await axios.get(
            "https://roxiler-backend-4ghg.onrender.com/Getcombineddata",
            {
                params: {
                    month: selectedOption,
                    search: searchText,
                    page: page,
                },
            }
        );
        // console.log(result.data);
        setFetcheddata(result.data);
        setLoading(false);
    };

    useEffect(() => {
        response();
    }, [selectedOption, searchText, page]);

    const monthnames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    return (
        <div className="parent">
            <h2 className="titel">Transaction Dashboard</h2>
            <div className="filter-div">
                <input
                    type="text"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    className="select-data searchText"
                    placeholder="Search transactions table..."
                />
                <select
                    value={selectedOption}
                    onChange={(e) => setSelectedOption(e.target.value)}
                    className="select-data"
                >
                    <option value="1">January</option>
                    <option value="2">February</option>
                    <option value="3">March</option>
                    <option value="4">April</option>
                    <option value="5">May</option>
                    <option value="6">June</option>
                    <option value="7">July</option>
                    <option value="8">August</option>
                    <option value="9">September</option>
                    <option value="10">October</option>
                    <option value="11">November</option>
                    <option value="12">Decmeber</option>
                </select>
            </div>
            {loading ? (
                <div className="d-flex flex-column justify-content-center">
                    <h2 className="titel">Loading...</h2>
                </div>
            ) : (
                <>
                    <div className="chart-div">
                        <BarChart
                            data={fetcheddata?.barChart}
                            selectedOption={monthnames[selectedOption - 1]}
                        />
                        <Statistics
                            data={fetcheddata?.statistics}
                            selectedOption={monthnames[selectedOption - 1]}
                        />
                        <br />

                        <Piechart
                            data={fetcheddata?.pieChart}
                            selectedOption={monthnames[selectedOption - 1]}
                        />
                    </div>
                </>
            )}
            <Table
                fetcheddata={fetcheddata?.transactions?.transactions}
                total={fetcheddata?.transactions?.total}
                perpage={fetcheddata?.transactions?.perPage}
                page={fetcheddata?.transactions?.page}
                setPage={setPage}
                loading={loading}
            />
        </div>
    );
};

export default TransactionTable;
