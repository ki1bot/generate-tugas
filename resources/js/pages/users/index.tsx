import { Head } from '@inertiajs/react';

type User = {
    id: number;
    name: string;
    email: string;
};

type UserIndexProps = {
    users: User[];
};

export default function UserIndex({ users }: UserIndexProps) {
    return (
        <>
            <Head title="Daftar Pengguna" />

            <main className="min-h-screen p-6">
                <div className="mx-auto max-w-5xl">
                    <h1 className="mb-6 text-2xl font-bold">Daftar Pengguna</h1>

                    <div className="overflow-hidden rounded-lg border">
                        <table className="w-full">
                            <thead className="bg-muted">
                                <tr>
                                    <th className="px-4 py-3 text-left">
                                        Nama
                                    </th>
                                    <th className="px-4 py-3 text-left">
                                        Email
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                {users.map((user) => (
                                    <tr key={user.id} className="border-t">
                                        <td className="px-4 py-3">
                                            {user.name}
                                        </td>
                                        <td className="px-4 py-3">
                                            {user.email}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
        </>
    );
}
