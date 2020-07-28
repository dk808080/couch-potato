import React from 'react';
function Deactivate() {
    return (
        <div
            style={{
                marginTop: '100px',
                float: 'none',
            }} >
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-6 col-md-8">
                        <div class="card shadow">
                            <div class="card-body" style={{
                                backgroundColor: '#0ab68b',
                            }}>
                                <h1 class="card-title">Delete Your Account</h1>
                                <small>We're sorry to see you go.</small>
                                <h4>
                                    Before you go, know this:
                                </h4>
                                <p class="card-text">
                                    <ul>
                                        <li>
                                            If you want to change your account details, you can change it on the account page.
                                        </li>
                                        <li>
                                            When your account is deactivated, you will be logged out of Couch Potato, and this account will no longer be usable.
                                        </li>
                                        <li>
                                            You will not be able to create another account with your same email address.To change your email address, go to the Settings page.
                                        </li>
                                        <li>
                                            Account deletion is final. There will be no way to restore your account.
                                        </li>
                                    </ul>
                                    <button type="button" class="btn btn-light"
                                        style={{
                                            marginRight: '25px'
                                        }}>Never mind, keep my account</button>
                                    <button type="button" class="btn btn-danger"
                                        style={{
                                            width: '220px'
                                            marginTop: '10px'
                                        }}>Delete my account</button>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}
export default Deactivate;