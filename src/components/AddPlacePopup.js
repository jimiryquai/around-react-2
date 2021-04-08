import React, { useState } from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup(props) {
	const [name, setName] = useState();
	const [link, setLink] = useState();

	function handleNameChange(e) {
		setName(e.target.value);
	}

	function handleLinkChange(e) {
		setLink(e.target.value);
	}

	function handleSubmit(e) {
		// Prevent the browser from navigating to the form address
		e.preventDefault();

		// Pass the values of the managed components to the external handler
		props.onAddPlace({
			name: name,
			link: link,
		});
	}

	return (
		<PopupWithForm
			name="new-place"
			title="New place"
			isOpen={props.isOpen}
			onClose={props.onClose}
			onSubmit={handleSubmit}
		>
			<fieldset className="form__set">
				<label className="form__label" htmlFor="title-input">
					<input
						type="text"
						value={name}
						onChange={handleNameChange}
						className="form__input form__input_title"
						id="title-input"
						name="title-input"
						placeholder="Title"
						required
						minLength="1"
						maxLength="30"
						aria-describedby="title-input-error"
					/>
					<span className="form__input-error" id="title-input-error"></span>
				</label>
				<label className="form__label" htmlFor="url-input">
					<input
						type="url"
						value={link}
						onChange={handleLinkChange}
						className="form__input form__input_url"
						id="url-input"
						name="url-input"
						placeholder="Image URL"
						required
						aria-describedby="url-input-error"
					/>
					<span className="form__input-error" id="url-input-error"></span>
				</label>
			</fieldset>
		</PopupWithForm>
	);
}

export default AddPlacePopup;
