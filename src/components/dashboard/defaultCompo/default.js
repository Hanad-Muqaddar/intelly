import React, { Fragment, useEffect, useState } from 'react';
import Breadcrumb from '../../common/breadcrumb';
import {Button, TabPane, TabContext, TabContent, CardBody, Nav, NavItem, NavLink  } from 'reactstrap';


const Default = () => {
const [BasicTab, setBasicTab] = useState('1');
    return (
        <Fragment>
            <Breadcrumb parent="Inbox" title="All Channels" />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="card">
                            <div className="card-header">
                                <h5>Conversations</h5><span>Here you can see all of the customer interactions</span>
                                <Button color="primary">Primary</Button>
                                
                                   <CardBody>
                                    <Nav tabs>
                                    <NavItem>
                                    <NavLink href="#javascript"  className={BasicTab === '1' ? 'active' : 'true'} onClick={() => setBasicTab('1')}>Open</NavLink>
                                    </NavItem>
                                    
                                    <NavItem>
                                    <NavLink href="#javascript"  className={BasicTab === '2' ? 'active' : ''} onClick={() => setBasicTab('2')}>Closed</NavLink>
                                    </NavItem>
                                     
                                    </Nav>
                                    

                                <TabContent activeTab={BasicTab}>
                                    <TabPane   className="fade show" tabId="1">
                                    <p className="mb-0 m-t-30">Open Conversations</p>
                                    </TabPane>


                                    <TabPane  tabId="2">
                                    <p className="mb-0 m-t-30">Closed Conversations</p>
                                    </TabPane>

                                     
                               </TabContent> 
                               </CardBody> 

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Default;


