import { useMemo, useState } from "react";
import { useLoaderData } from "react-router";
import ToyListCard from "./ToyListCard";

const ToyList = () => {
    const toys = useLoaderData();
    const [sortBy, setSortBy] = useState('default');
    const [priceRange, setPriceRange] = useState([0, 100]);
    const [showFilters, setShowFilters] = useState(false);

    const priceExtent = useMemo(() => {
        const prices = toys.map(toy => toy.price);
        return [Math.floor(Math.min(...prices)), Math.ceil(Math.max(...prices))];
    }, [toys]);

    const filteredAndSortedToys = useMemo(() => {
        let result = toys.filter(toy => 
            toy.price >= priceRange[0] && 
            toy.price <= priceRange[1]
        );

        switch(sortBy) {
            case 'price-asc':
                result.sort((a, b) => a.price - b.price);
                break;
            case 'price-desc':
                result.sort((a, b) => b.price - a.price);
                break;
            case 'rating-asc':
                result.sort((a, b) => a.rating - b.rating);
                break;
            case 'rating-desc':
                result.sort((a, b) => b.rating - a.rating);
                break;
            case 'name-asc':
                result.sort((a, b) => a.toyName.localeCompare(b.toyName));
                break;
            case 'name-desc':
                result.sort((a, b) => b.toyName.localeCompare(a.toyName));
                break;
            default:
                break;
        }

        return result;
    }, [toys, sortBy, priceRange]);


    return (
        <section className="popular-toys popular-toys-sec all-toys-sec">
            <div className="container">
                <h2 className="section-title">All Toys</h2>
                
                <div className="filter-sort-container">
                    <div className="filter-header">
                        <div className="results-count">
                            <span className="count-number">{filteredAndSortedToys.length}</span>
                            <span className="count-text">toys found</span>
                        </div>
                        <button 
                            className="toggle-filters-btn"
                            onClick={() => setShowFilters(!showFilters)}
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <line x1="4" y1="21" x2="4" y2="14"></line>
                                <line x1="4" y1="10" x2="4" y2="3"></line>
                                <line x1="12" y1="21" x2="12" y2="12"></line>
                                <line x1="12" y1="8" x2="12" y2="3"></line>
                                <line x1="20" y1="21" x2="20" y2="16"></line>
                                <line x1="20" y1="12" x2="20" y2="3"></line>
                                <line x1="1" y1="14" x2="7" y2="14"></line>
                                <line x1="9" y1="8" x2="15" y2="8"></line>
                                <line x1="17" y1="16" x2="23" y2="16"></line>
                            </svg>
                            {showFilters ? 'Hide Filters' : 'Show Filters'}
                        </button>
                    </div>

                    <div className={`filter-controls ${showFilters ? 'show' : ''}`}>

                        <div className="filter-group">
                            <label className="filter-label">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M3 6h18M7 12h10M11 18h2"/>
                                </svg>
                                Sort By
                            </label>
                            <select 
                                className="filter-select"
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                            >
                                <option value="default">Default</option>
                                <option value="price-asc">Price: Low to High</option>
                                <option value="price-desc">Price: High to Low</option>
                                <option value="rating-asc">Rating: Low to High</option>
                                <option value="rating-desc">Rating: High to Low</option>
                                <option value="name-asc">Name: A to Z</option>
                                <option value="name-desc">Name: Z to A</option>
                            </select>
                        </div>

                        <div className="filter-group">
                            <label className="filter-label">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <line x1="12" y1="1" x2="12" y2="23"></line>
                                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                                </svg>
                                Price Range
                            </label>
                            <div className="range-inputs">
                                <input
                                    type="number"
                                    className="price-input"
                                    placeholder="Min"
                                    value={priceRange[0]}
                                    onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                                    min={priceExtent[0]}
                                    max={priceRange[1]}
                                />
                                <span className="range-separator">—</span>
                                <input
                                    type="number"
                                    className="price-input"
                                    placeholder="Max"
                                    value={priceRange[1]}
                                    onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                                    min={priceRange[0]}
                                    max={priceExtent[1]}
                                />
                            </div>
                            <input
                                type="range"
                                className="price-slider"
                                min={priceExtent[0]}
                                max={priceExtent[1]}
                                value={priceRange[1]}
                                onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                            />
                        </div>
                    </div>
                </div>

                <div className="toys-grid">
                    {filteredAndSortedToys.length > 0 ? (
                        filteredAndSortedToys.map(toy => (
                            <ToyListCard 
                                path={toy.toyId} 
                                key={toy.toyId} 
                                name={toy.toyName} 
                                price={toy.price} 
                                rating={toy.rating} 
                                stock={toy.availableQuantity} 
                                img={toy.pictureURL} 
                                desc={toy.description}
                            />
                        ))
                    ) : (
                        <div className="no-results">
                            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.35-4.35"></path>
                            </svg>
                            <h3>No toys found</h3>
                            <p>Try adjusting your filters</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default ToyList;