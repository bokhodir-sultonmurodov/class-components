import React, { Component } from 'react';

export default class Todos extends Component {
    constructor() {
        super();
        this.state = {
            fname: "",
            lname: "",
            email: "",
            password: "",
            data: [],
            showPopup: false,
            editId: null
        };
    }

 handleSubmit = (e) => {
    e.preventDefault()
    if(!this.state.fname.trim()) return null
    if(!this.state.lname.trim()) return null
    if(!this.state.email.trim()) return null
    if(!this.state.password.trim()) return null
    const newUser = {
        id: Date.now(),
        fname:this.state.fname,
        lname:this.state.lname,
        email:this.state.email,
        password:this.state.password
    }
    this.setState({
        data: [...this.state.data, newUser],
        fname: "",
        lname: "",
        email: "",
        password: "",
        showPopup: false,
        editId:null
    })
}

  handleDelete = (id) => {
    this.setState({data: this.state.data.filter((item=> item.id !== id))})    
  }

    handleEdit = (item) => {
        this.setState({
            fname: item.fname,
            lname: item.lname,
            email: item.email,
            password: item.password,
            editId: item.id,
            showPopup: true
        })
    }
    render() {
        return (
            <div className="p-10 bg-gray-100 min-h-screen">
                {
                    this.state.showPopup ?
                        <div className="max-w-md w-full mx-auto bg-white p-8 rounded shadow-md space-y-4">
                            <h2 className="text-3xl font-bold text-center text-gray-800">Sign Up</h2>
                            <p className="text-center text-gray-500 text-sm">
                                Please fill in this form to create an account!
                            </p>

                            <form onSubmit={this.handleSubmit} className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <input
                                        required
                                        className="border border-gray-300 p-3 rounded w-full bg-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                        value={this.state.fname}
                                        onChange={(e) => this.setState({ fname: e.target.value })}
                                        type="text"
                                        placeholder="First Name"
                                    />
                                    <input
                                        required
                                        className="border border-gray-300 p-3 rounded w-full bg-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                        value={this.state.lname}
                                        onChange={(e) => this.setState({ lname: e.target.value })}
                                        type="text"
                                        placeholder="Last Name"
                                    />
                                </div>
                                <input
                                    required
                                    className="border border-gray-300 p-3 rounded w-full bg-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    value={this.state.email}
                                    onChange={(e) => this.setState({ email: e.target.value })}
                                    type="text"
                                    placeholder="Email"
                                />
                                <input
                                    required
                                    className="border border-gray-300 p-3 rounded w-full bg-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    value={this.state.password}
                                    onChange={(e) => this.setState({ password: e.target.value })}
                                    type="password"
                                    placeholder="Password"
                                />

                                <div className="flex justify-between">
                                    <button
                                        type="submit"
                                        className="bg-blue-500 text-white w-full py-2 rounded hover:bg-blue-600 font-semibold"
                                    >
                                        Sign Up
                                    </button>
                                </div>
                                <div className="text-center">
                                    <button
                                        type="button"
                                        onClick={() => this.setState({ showPopup: false })}
                                        className="text-gray-500 text-sm hover:text-red-500"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </form>
                        </div>
                        : null
                }

                <div className="mt-10 max-w-4xl mx-auto">

                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-xl font-semibold">User List</h2>
                        <button
                            onClick={() => this.setState({ showPopup: true })}
                            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                        >
                            Create
                        </button>
                    </div>

                    <table className="min-w-full border-collapse border border-gray-300 shadow-md">
                        <thead>
                            <tr className="bg-cyan-600 text-white">
                                <th className="p-3 border border-gray-300 text-left">First Name</th>
                                <th className="p-3 border border-gray-300 text-left">Last Name</th>
                                <th className="p-3 border border-gray-300 text-left">Email</th>
                                <th className="p-3 border border-gray-300 text-left">Action</th>
                                <th className="p-3 border border-gray-300 text-left">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.data.map((item) => (
                                <tr key={item.id} className="odd:bg-white even:bg-gray-100">
                                    <td className="p-3 border border-gray-300">{item.fname}</td>
                                    <td className="p-3 border border-gray-300">{item.lname}</td>
                                    <td className="p-3 border border-gray-300">{item.email}</td>
                                    <td className="p-3 border border-gray-300">
                                        <button
                                            onClick={() => this.handleDelete(item.id)}
                                            className="text-gray-600 cursor-pointer hover:underline text-sm"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                    <td className="p-3 border border-gray-300">
                                        <button
                                              onClick={() => this.handleEdit(item)}
                                            className="text-gray-600 cursor-pointer hover:underline text-sm"
                                        >
                                            Edit
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

            </div>
        )
    }
}