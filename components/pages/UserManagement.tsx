
import React from 'react';
import Card from '../ui/Card';

// Mock data for users. In a real application, this would come from an API.
const users = [
    { id: 1, name: 'Admin User', email: 'admin@sar-ops.com', role: 'Admin', lastLogin: '2024-07-30 10:00 AM' },
    { id: 2, name: 'John Operator', email: 'john.o@sar-ops.com', role: 'Operator', lastLogin: '2024-07-30 02:15 PM' },
    { id: 3, name: 'Jane Viewer', email: 'jane.v@sar-ops.com', role: 'Viewer', lastLogin: '2024-07-29 08:30 PM' },
];

/**
 * The User Management page for administering users, roles, and API keys.
 */
const UserManagement: React.FC = () => {
    return (
        <div className="space-y-8">
            {/* Team Members List */}
            <Card title="Team Members">
                <div className="flex justify-end mb-4">
                    <button className="bg-highlight text-primary font-bold py-2 px-4 rounded-lg hover:bg-sky-300 transition-colors">
                        Add New User
                    </button>
                </div>
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-tertiary">
                        <thead className="bg-secondary">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-accent uppercase tracking-wider">Name</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-accent uppercase tracking-wider">Role</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-accent uppercase tracking-wider">Last Login</th>
                            <th scope="col" className="relative px-6 py-3"><span className="sr-only">Edit</span></th>
                        </tr>
                        </thead>
                        <tbody className="divide-y divide-tertiary">
                        {users.map(user => (
                            <tr key={user.id} className="bg-secondary hover:bg-tertiary/50">
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm font-medium text-light">{user.name}</div>
                                    <div className="text-sm text-accent">{user.email}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-light">{user.role}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-accent">{user.lastLogin}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                    <a href="#" className="text-highlight hover:text-sky-300">Edit</a>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </Card>

            {/* API Key Management Section */}
            <Card title="API Key Control">
                <div className="space-y-4">
                    <p className="text-sm text-accent">Manage API keys for external integrations.</p>
                    <div className="bg-tertiary/50 p-4 rounded-lg flex justify-between items-center">
                        <div>
                            <p className="font-mono text-light">Primary API Key: <span className="text-accent">SAR_OPS_...a1b2</span></p>
                            <p className="text-xs text-accent">Created: 2024-01-01</p>
                        </div>
                        <button className="text-sm bg-danger hover:bg-red-600 text-light font-semibold py-2 px-4 rounded-lg transition-colors">Revoke</button>
                    </div>
                     <button className="bg-tertiary hover:bg-highlight hover:text-primary transition-colors font-semibold py-2 px-4 rounded-lg">
                        Generate New Key
                    </button>
                </div>
            </Card>
        </div>
    );
};

export default UserManagement;