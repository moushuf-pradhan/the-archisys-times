import { useNavigate } from 'react-router';

export default function useLogic() {
	// Hooks
	const navigate = useNavigate();

	// Function
	function handleBack() {
		navigate(-1);
	}
	return {
		handleBack,
	};
}
