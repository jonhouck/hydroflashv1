export interface Node {
    id: string;
    type: 'Source' | 'Tank' | 'Junction';
    elevation: number;
    demand?: number;
    head?: number;
}

export interface Link {
    id: string;
    source: string;
    target: string;
    length: number;
    diameter: number;
    roughness: number;
    flow?: number;
    status: 'Open' | 'Closed';
}

export interface WaterNetwork {
    nodes: Node[];
    links: Link[];
}
