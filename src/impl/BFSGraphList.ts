function _bfs(graph: WeightedAdjacencyList, source: number, needle: number): number[] | null {
    const visited: boolean[] = new Array(graph.length).fill(false);
    let q: { node: number, path: number[] }[] = [];
    q.push({node: source, path: [source]});
    while (q.length > 0) {
        let item = q.shift()!;
        if (item.node === needle) {
            return item.path;
        }
        let adj = graph[item.node];
        if (adj) {
            for (const neighbor of adj) {
                if (!visited[neighbor.to]) {
                    visited[neighbor.to] = true;
                    q.push({node: neighbor.to, path: item.path.concat(neighbor.to)});
                }
            }
        }
    }
    return null
}

export default function bfs(graph: WeightedAdjacencyList, source: number, needle: number): number[] | null {
    return _bfs(graph, source, needle);
}