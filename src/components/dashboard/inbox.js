import React, { Fragment } from 'react';
import Breadcrumb from '../common/breadcrumb';

const InboxM = () => {
  return (
    <Fragment>
      <Breadcrumb title="Dashboard" parent="Dashboard" />
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <div className="card">
              <div className="card-header">
                <h5>Sample Card</h5><span>lorem ipsum dolor sit amet, consectetur adipisicing elit</span>
              </div>
              <div className="card-body">
                <p>"Inbox component"</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default InboxM;