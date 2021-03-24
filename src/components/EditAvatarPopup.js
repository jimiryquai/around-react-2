import React from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup(props) {
	return (
		<PopupWithForm name="avatar" title="Edit avatar" isOpen={props.isOpen} onClose={props.onClose}>
			<label className="form__label" htmlFor="avatar-input">
				<input
					type="url"
					className="form__input form__input_avatar"
					id="avatar-input"
					name="avatar-input"
					placeholder="Avatar URL"
					aria-describedby="avatar-input-error"
					required
				/>
				<span className="form__input-error" id="avatar-input-error"></span>
			</label>
		</PopupWithForm>
	);
}

export default EditAvatarPopup;
