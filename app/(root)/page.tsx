import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";

export default async function Home({ searchParams }: {
    searchParams: Promise<{ query?: string }>
}) {
    const query = (await searchParams).query;

    const posts = [
        {
            _createdAt: new Date(),
            views: 55,
            author: { _id: 1, name: "Daniel Siqueira de Oliveira" }, 
            _id: 1,
            description: "The startup wich will change the world",
            image: "https://www.ideianoar.com.br/wp-content/uploads/2022/08/startup.jpg",
            category: "Robots",
            title: "We Robots",
        },
    ]

    return (
        <>
            <section className="pink_container">
                <h1 className="heading">
                    Pitch Your Startup, <br />Connect With Entrepreneurs
                </h1>

                <p className="sub-heading !max-w-3xl">
                    Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competition.
                </p>

                <SearchForm query={query} />

            </section>

            <section className="section_container">
                <p className="text-30-semibold">
                    {query ? `Search results "${query}"` : 'All Startups'}
                </p>

                <ul className="mt-7 card-grid">
                    {posts?.length > 0 ? (
                        posts.map((post: StartupCardType, index: number) => (
                            <StartupCard key={post._id} post={post}/>
                        ))
                    ) : (
                        <p className="no-results">No startups found</p>
                    )}
                </ul>
            </section>

        </>
    );
}
