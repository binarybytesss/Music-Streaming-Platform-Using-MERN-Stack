const PasswordInput = ({ label, placeholder, value, setValue }) => {
	return (
		<div className="textInputDiv flex flex-col space-y-2 w-full">
			<label for={label} className="font-semibold text-sm">
				{label}
			</label>
			<input
				type="password"
				placeholder={placeholder}
				className="p-2.5 border border-solid-2 border-gray-500 rounded placeholder-gray-600 "
				id={label}
				value={value}
				onChange={(e) => {
					setValue(e.target.value);
				}}
			/>
		</div>
	);
};
export default PasswordInput;
