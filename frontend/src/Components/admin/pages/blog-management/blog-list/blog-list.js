import React from "react";
import Headers from "../../../components/header/header";
import LeftSideMenu from "../../../components/left-side-menu/left-side-menu";

const AdminBlogList = () => {
  return (
    <main>
      <Headers />
      <LeftSideMenu />
      <div class="heading">
        <h1 className="text-center">Blog Management</h1>
        <div className="d-flex flex-row-reverse">
        <button className="btn btn-outline-secondary btn-sm">Add Notice</button>
    </div>
      </div>
      <div className=""></div>
      <div className="table-responsive d-flex justify-content-center">
        <table className="table table-hover table-border table-bordered table-sm w-50 mt-5">
          <thead>
            <tr>
              <th width="150" className="text-center">
                Date
              </th>
              <th width="350" className="text-center">
                Blogs
              </th>
              <th width="350" className="text-center">
                Author
              </th>
              <th width="200" className="text-center">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>11.02.2021</td>
              <td>Blog Title</td>
              <td>Trishnangshu</td>
              <td className='text-center'>
                <button type='button' className='btn btn-warning btn-rounded btn-sm mr-2'>Edit</button>
                </td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default AdminBlogList;
