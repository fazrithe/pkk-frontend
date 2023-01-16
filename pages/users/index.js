import Navbar from "../componens/header/headerUser";
import { userService } from "../../services/user.service";
import { useState, useEffect, use } from "react";
import Pagination from "../../components/pagination";
import Cookies from "js-cookie";

export default function index(){
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        setLoading(true);
        userService.getAll().then(x => setUsers(x));
        setLoading(false);
    }, []);
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = users.slice(indexOfFirstPost, indexOfLastPost);

    // Change page
    const paginateFront = () => setCurrentPage(currentPage + 1);
    const paginateBack = () => setCurrentPage(currentPage - 1);
    return (
        <>
        <Navbar/>
        <div className="container mt-6">
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <div className="flex items-center justify-between pb-4">    
                    <div className="mt-8 ml-8 mb-4">
                    <button  onClick={() => setShowModal(true)} data-modal-target="authentication-modal" data-modal-show="authentication-modal" data-modal-toggle="authentication-modal" class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
                        Add
                    </button>
                    </div>
                    <label for="table-search" className="sr-only">Search</label>
                    <div className="relative mt-1 mr-8">
                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                        </div>
                        <input type="text" id="table-search" className="block p-2 ml-8 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for items"/>
                    </div>
                </div>
                <div className="flex items-center justify-between pb-4">   
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th className="px-6 py-3">No</th>
                            <th className="px-6 py-3">Name</th>
                            <th className="px-6 py-3">Username</th>
                            <th className="px-6 py-3">Email</th>
                            <th className="px-6 py-3">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {users && users.map((user, index) =>
                        <tr>
                            <td className="px-6 py-3">{index + 1}</td>
                            <td className="px-6 py-3">{user.name}</td>
                            <td className="px-6 py-3">{user.username}</td>
                            <td className="px-6 py-3">{user.email}</td>
                            <td className="px-6 py-3">
                                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline ml-4">Delete</a>
                            </td>
                        </tr>
                    )}
                    </tbody>
                </table>
                </div>
                <nav class="flex items-center justify-between pt-4" aria-label="Table navigation">
                <Pagination
                    postsPerPage={postsPerPage}
                    totalPosts={users.length}
                    paginateBack={paginateBack}
                    paginateFront={paginateFront}
                    currentPage={currentPage}
                />

                </nav>
            </div>
        </div>
        {showModal ? (
                   <>
                     <div
                       className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                     >
                       <div className="relative w-auto my-2 mx-auto max-w-2xl">
                         {/*content*/}
                         <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                           {/*header*/}
                           <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                             <h3 className="text-3xl font-semibold">
                               Add User
                             </h3>
                             <button
                               className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                               onClick={() => setShowModal(false)}
                             >
                               <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                 ×
                               </span>
                             </button>
                           </div>
                           {/*body*/}
                           <div className="relative p-6 flex-auto">
                           <form class="space-y-6" action="#">
                                <div>
                                    <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
                                    <input type="text" name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Name" required />
                                </div>
                                <div>
                                    <label for="username" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Username</label>
                                    <input type="text" name="username" id="username" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Username" required />
                                </div>
                                <div>
                                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                    <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
                                </div>
                           </form>
                            </div>
                           {/*footer*/}
                           <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                             <button
                               className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                               type="button"
                               onClick={() => setShowModal(false)}
                             >
                               Close
                             </button>
                             <button
                               className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                               type="button"
                               onClick={() => setShowModal(false)}
                             >
                               Save Changes
                             </button>
                           </div>
                         </div>
                       </div>
                     </div>
                     <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                   </>
        ) : null}
        </>
    );
}