import React from 'react';

export const Success = ({ count, onClickSendInvites }) => {
  return (
    <div className="success-block">
      <img src="/assets/success.svg" alt="Success" />
      <h3>Successful!</h3>
      <p>An invitation has been sent to all {count} users.</p>
      <button onClick={onClickSendInvites} className="send-invite-btn">Back</button>
    </div>
  );
};