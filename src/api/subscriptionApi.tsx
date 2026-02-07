import axios from 'axios'

export const fetchSubscriptionList = async () => {
    const response = await axios.get('/api/subscriptions')
    return response.data;
}