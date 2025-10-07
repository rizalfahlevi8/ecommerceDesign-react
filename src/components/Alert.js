import React from "react";
import "./Alert.css";

const Alert = ({
  show,
  title = "Konfirmasi",
  message = "Apakah Anda yakin?",
  confirmText = "Ya",
  cancelText = "Batal",
  onConfirm,
  onCancel,
  hideClose = false,
  children,
}) => {
  if (!show) return null;

  return (
    <div className="custom-alert-overlay">
      <div className="custom-alert-modal">
        {!hideClose && (
          <button
            className="custom-alert-close"
            onClick={onCancel}
            aria-label="Tutup"
          >
            ×
          </button>
        )}
        <h2>{title}</h2>
        <div className="custom-alert-message">
          {children ? children : <p>{message}</p>}
        </div>
        <div className="custom-alert-actions">
          <button className="btn-confirm" onClick={onConfirm}>
            {confirmText}
          </button>
          <button className="btn-cancel" onClick={onCancel}>
            {cancelText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Alert;