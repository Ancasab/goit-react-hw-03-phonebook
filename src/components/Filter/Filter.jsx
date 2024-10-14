
import { Input, Text } from './Filter.styled'

const ContactFilter = ({ filter, setFilter }) => {
    const handleFilterChange = (event) => {
        setFilter(event.target.value);
    };

    return (
        <>    
            <Text>
                Find contacts by name
            </Text>
            <Input
                type="text"
                name='filter'
                value={filter}
                onChange={handleFilterChange}

            />
        </>
            );
}

export default ContactFilter