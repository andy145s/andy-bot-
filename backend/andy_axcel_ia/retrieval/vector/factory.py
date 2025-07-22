from andy_axcel_ia.retrieval.vector.main import VectorDBBase
from andy_axcel_ia.retrieval.vector.type import VectorType
from andy_axcel_ia.config import VECTOR_DB, ENABLE_QDRANT_MULTITENANCY_MODE


class Vector:

    @staticmethod
    def get_vector(vector_type: str) -> VectorDBBase:
        """
        get vector db instance by vector type
        """
        match vector_type:
            case VectorType.MILVUS:
                from andy_axcel_ia.retrieval.vector.dbs.milvus import MilvusClient

                return MilvusClient()
            case VectorType.QDRANT:
                if ENABLE_QDRANT_MULTITENANCY_MODE:
                    from andy_axcel_ia.retrieval.vector.dbs.qdrant_multitenancy import (
                        QdrantClient,
                    )

                    return QdrantClient()
                else:
                    from andy_axcel_ia.retrieval.vector.dbs.qdrant import QdrantClient

                    return QdrantClient()
            case VectorType.PINECONE:
                from andy_axcel_ia.retrieval.vector.dbs.pinecone import PineconeClient

                return PineconeClient()
            case VectorType.OPENSEARCH:
                from andy_axcel_ia.retrieval.vector.dbs.opensearch import OpenSearchClient

                return OpenSearchClient()
            case VectorType.PGVECTOR:
                from andy_axcel_ia.retrieval.vector.dbs.pgvector import PgvectorClient

                return PgvectorClient()
            case VectorType.ELASTICSEARCH:
                from andy_axcel_ia.retrieval.vector.dbs.elasticsearch import (
                    ElasticsearchClient,
                )

                return ElasticsearchClient()
            case VectorType.CHROMA:
                from andy_axcel_ia.retrieval.vector.dbs.chroma import ChromaClient

                return ChromaClient()
            case _:
                raise ValueError(f"Unsupported vector type: {vector_type}")


VECTOR_DB_CLIENT = Vector.get_vector(VECTOR_DB)
