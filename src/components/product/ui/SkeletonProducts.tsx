

export const ProductSkeleton = () => {
  // Creates an array of 5 empty items to represent rows during a load state
  const skeletonRows = Array(5).fill(null);

  return (
    <div className="table-container skeleton-loading">
      {/* Header Structure */}
      <div className="table-row table-header">
        <div className="cell-img">Image</div>
        <div className="cell-title">Title</div>
        <div className="cell-price">Price</div>
        <div className="cell-category">Category</div>
        <div className="cell-actions">Actions</div>
      </div>

      {/* Body Skeleton Rows */}
      <div className="table-body">
        {skeletonRows.map((_, index) => (
          <div className="table-row" key={index}>
            {/* Image Box Placeholder */}
            <div className="cell-img">
              <div className="skeleton-element skeleton-avatar"></div>
            </div>

            {/* Title Line Placeholders */}
            <div className="cell-title">
              <div className="skeleton-element skeleton-text title-line-1"></div>
              <div className="skeleton-element skeleton-text title-line-2"></div>
            </div>

            {/* Price Line Placeholder */}
            <div className="cell-price">
              <div className="skeleton-element skeleton-text price-line"></div>
            </div>

            {/* Badge Placeholder */}
            <div className="cell-category">
              <div className="skeleton-element skeleton-badge"></div>
            </div>

            {/* Action Buttons Placeholders */}
            <div className="cell-actions">
              <div className="skeleton-element skeleton-btn"></div>
              <div className="skeleton-element skeleton-btn"></div>
              <div className="skeleton-element skeleton-btn"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
