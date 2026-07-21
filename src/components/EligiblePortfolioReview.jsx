function EligiblePortfolioReview({
    reviewData,
    isOpen,
    onClose
}) {

    if (!isOpen) {
        return null;
    }

    return (
        <dialog open>
            <h2>Eligible Portfolio Review</h2>

            <table>
                <thead>
                    <tr>
                        <th>Product Type</th>
                        <th>Portfolios Added</th>
                        <th>Total Elected Amount</th>
                    </tr>
                </thead>

                <tbody>
                    {reviewData.map(row => (
                        <tr key={row.productType}>
                            <td>{row.productType}</td>
                            <td>{row.portfoliosAdded}</td>
                            <td>{row.totalElectedAmount}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <button onClick={onClose}>
                Close
            </button>
        </dialog>
    );
}

export default EligiblePortfolioReview;