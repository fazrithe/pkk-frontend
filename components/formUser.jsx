import { useState, useEffect, use } from "react";

function FormUser({ props }) {
    return (
        <>
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

export default FormUser;