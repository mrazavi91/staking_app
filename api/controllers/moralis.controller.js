import Moralis from "moralis"

export const getWalletBalance = async (req, res, next) => {
    try {
        const { address } = req.query
        const response = await Moralis.EvmApi.balance.getNativeBalance({
            chain: '0xaa36a7',
            address
        })

        res.status(200).json(response)
    } catch (error) {
        console.log(error.message)
        res.status(400).json({message : error.message})
    }
}