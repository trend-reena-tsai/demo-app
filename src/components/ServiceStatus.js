import React, { useState, useEffect } from 'react';

// TODO: Implement service health check component
// This component should:
// 1. Check if the API endpoint is reachable
// 2. Display connection status (online/offline)
// 3. Auto-refresh status every 30 seconds

function ServiceStatus({ endpoint }) {
  const [status, setStatus] = useState('unknown');

  useEffect(() => {
    // TODO: Implement health check logic
    // Should fetch from endpoint and update status
  }, []);

  return (
    <div className="service-status">
      <span>Service Status: </span>
      <span className={`status-${status}`}>
        {/* TODO: Show appropriate status indicator */}
      </span>
    </div>
  );
}

export default ServiceStatus;
