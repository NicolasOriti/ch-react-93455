import FetchCategories from './FetchCategories'

function Categories () {
  return (
    <div className="drawer">
          <input id="my-drawer-1" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            {/* Page content here */}
            <label htmlFor="my-drawer-1" className="btn drawer-button">Categories</label>
          </div>
          <div className="drawer-side">
            <label htmlFor="my-drawer-1" aria-label="close sidebar" className="drawer-overlay"></label>
            <ul className="menu bg-base-200 min-h-full w-80 p-4">
              {/* Sidebar content here */}
              <FetchCategories
                render={(categories) => (
                  <>
                    {categories.map(category => (
                      <li key={category}><a>{category}</a></li>
                    ))}
                  </>
                )}
              />
            </ul>
          </div>
        </div>
  )
}

export default Categories
