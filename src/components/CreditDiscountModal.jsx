import React, { Component } from 'react';
import './CreditDiscountModal.css';
import { GetMyHeaders } from '../pages/functions/getAPIToken';
import { GetDepartmentList, MyServerHostJava } from '../pages/functions/MyFunctions';
import LoadingSpinner from './LoadingSpinner';
import { Button } from 'bootstrap';
import { GridDeleteIcon } from '@mui/x-data-grid';
import LogoSpinner from './LogoSpinner';

let dbServerHostJava = MyServerHostJava();

class CreateDiscountModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            records: [],
            currentPage: 1,
            recordsPerPage: 7,
            totalRecords: 0,
            selectedBranch: 'J19',
            optBranch: GetDepartmentList(),
            selectedTerm: '0',
            isLoading: false,
            errorMessage: '',
            isNestedModalOpen: false
        };
        this.handleBranchChange = this.handleBranchChange.bind(this);
        this.handleTermChange = this.handleTermChange.bind(this); // Binding handleTermChange
    }

    // Define the handleTermChange method
    handleTermChange(event) {
        this.setState({ selectedTerm: event.target.value });
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData = async () => {
        const { selectedBranch, selectedTerm } = this.state;
        const gAccessToken = sessionStorage.getItem("accessToken");

        this.setState({ isLoading: true });

        try {
            const response = await fetch(dbServerHostJava + "/api/j/profile/discount/credit/" + selectedBranch, {
                method: 'GET',
                headers: GetMyHeaders(gAccessToken),
            });

            if (!response.ok) {
                throw new Error(`Failed to fetch data: ${response.status} ${response.statusText}`);
            }

            const json = await response.json();
            if (Number(json.status) === 200) {
                this.setState({
                    records: json.data,
                    isLoading: false,
                });
            } else {
                throw new Error("API Error in sales: " + json.status + ", " + (json.error));
            }
        } catch (err) {
            alert("Failed to fetch data: " + err.message + "\nThere might be a problem");
            this.setState({ isLoading: false });
        }
    };

    handleBranchChange = (event) => {
        this.setState({ selectedBranch: event.target.value }, () => {
            this.fetchData();
        });
    };

    handleAddNew = () => {
        this.setState({ isNestedModalOpen: true });
    };

    handleCloseNestedModal = () => {
        this.setState({ isNestedModalOpen: false });
    };

    render() {
        const { records, currentPage, recordsPerPage, totalRecords, optBranch, selectedBranch, isLoading, isNestedModalOpen } = this.state;
        const { onClose } = this.props;
        const totalPages = Math.ceil(totalRecords / recordsPerPage);

        return (
            <div className='dismodal-container'>
                <div className='dismodal-content'>
                    <div className='dismodal-header'>
                        <h2>Karat List - J16</h2>
                        <button className='disclose-button' onClick={onClose}>×</button>
                    </div>
                    <div className='dismodal-controls'>
                        <label>Branch: </label>
                        <select
                            className='dismodal-custom-select'
                            value={selectedBranch}
                            onChange={this.handleBranchChange}
                        >
                            {optBranch.map(option => (
                                <option key={option.value} value={option.value}>
                                    {option.text}
                                </option>
                            ))}
                        </select>
                        <div className='dismodal-actions'>
                            <button className='disprimaryref-button' onClick={() => this.fetchData()}>Refresh</button>
                            <button className='disprimaryradd-button' onClick={this.handleAddNew}>Add New Item</button>
                            
                        </div>
                    </div>
                    {isLoading ? (
                        <LogoSpinner />
                    ) : (
                        <div className='dismodal-body'>
                            <table className='discount-table'>
                                <thead>
                                    <tr>
                                        <th>No.</th>
                                        <th>Karat</th>
                                        <th>Value</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {records.map((record, index) => (
                                        <tr key={record.id}>
                                            <td>{(currentPage - 1) * recordsPerPage + index + 1}</td>
                                            <td>{record.karat}</td>
                                            <td>{record.value}</td>
                                            <td>
                                                <button onClick={() => this.handleUpdate(record.id, record)}>Edit</button>
                                                <button onClick={() => this.handleDelete(record.id)}>Delete</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                    <div className='dismodal-footer'>
                        <button disabled={currentPage === 1} onClick={() => this.fetchData(currentPage - 1)}>Prev</button>
                        <button disabled={currentPage === totalPages} onClick={() => this.fetchData(currentPage + 1)}>Next</button>
                        <div>Total Records: {totalRecords}</div>
                    </div>
                </div>
                {isNestedModalOpen && (
                    <div className="nestedmodal-container">
                        <div className="nestedmodal-content">
                            <div className="nestedmodal-header">
                                <h2>Add New Item</h2>
                                <button className="nestedclose-button" onClick={this.handleCloseNestedModal}>&times;</button>
                            </div>
                            <div className="nestedmodal-body">
                                {/* <form> */}
                                    <div className="form-group">
                                        <label> Karat:</label>
                                        <input type='text' name='karat' className='input-field' />
                                    </div>
                                    <div className='form-group'>
                                        <label>Karat value</label>
                                        <input type='text' name='value' className='input-field' />
                                    </div>
                                    <div className="form-actions">
                                        <button type='save' className='primary-button'>Save</button>
                                        <button type='cancel' className='secondary-button' onClick={this.handleCloseNestedModal}>Cancel</button>
                                    </div>
                                {/* </form> */}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}


export default CreateDiscountModal;
