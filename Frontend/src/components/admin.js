import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from '../components/Navbar1.js';
import '../components/admin.css';
import { Link } from 'react-router-dom';

const AdminPage = () => {
    const [adminData, setAdminData] = useState({ products: [], users: [] });

    useEffect(() => {
        const fetchAdminData = async () => {
            try {
                const response = await axios.get('http://localhost:3001/adminData');
                setAdminData(response.data);
            } catch (error) {
                console.error('Error fetching admin data:', error);
            }
        };

        fetchAdminData();
    }, []);

    const handleAddProduct = () => {
        // Redirect to the page where you can add a new product
    };

    const handleDeleteProduct = async (productId) => {
        try {
            console.log('Deleting product with ID:', productId);
            await axios.delete(`http://localhost:3001/products/${productId}`);
            
            console.log('Product deleted successfully.');
    
            // Update state after successful deletion
            setAdminData(prevState => {
                const updatedProducts = prevState.products.filter(product => product._id !== productId);
                console.log('Updated products:', updatedProducts);
                return { ...prevState, products: updatedProducts };
            });
        } catch (error) {
            console.error('Error deleting product:', error);
        }
    };
    

    return (
        <div>
            <NavBar />
            <div className="admin-content">
                <h1>Admin Page</h1>

                <h2>Products</h2>

                <table className="admin-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Category</th>
                            <th>Action</th> {/* Added table header for action */}
                        </tr>
                    </thead>
                    <tbody>
                        {adminData.products.map(product => (
                            <tr key={product._id}>
                                <td>{product.name}</td>
                                <td>{product.description}</td>
                                <td>${product.price}</td>
                                <td>{product.category}</td>
                                <td>
                                    <button onClick={() => handleDeleteProduct(product._id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <button onClick={handleAddProduct}>
                    <Link to='/farmer'>ADD Products</Link>
                </button>
                <h2>Users</h2>
                <table className="admin-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        {adminData.users.map(user => (
                            <tr key={user._id}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.role}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminPage;
