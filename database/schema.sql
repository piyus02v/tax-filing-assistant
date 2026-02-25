CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    full_name VARCHAR(255) NOT NULL,
    business_type VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE form_submissions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES users(id),
    form_type VARCHAR(20) NOT NULL,
    assessment_year VARCHAR(10),
    form_data JSONB DEFAULT '{}',
    status VARCHAR(20) DEFAULT 'draft',
    metadata JSONB,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE field_suggestions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    submission_id UUID REFERENCES form_submissions(id),
    field_code VARCHAR(100) NOT NULL,
    suggested_value TEXT,
    explanation TEXT,
    confidence_score DECIMAL(3,2),
    citations JSONB,
    user_action VARCHAR(20),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE documents_metadata (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    document_name VARCHAR(255) NOT NULL,
    document_type VARCHAR(50),
    tax_type VARCHAR(20),
    form_code VARCHAR(20),
    page_count INTEGER,
    chunk_count INTEGER,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE audit_logs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES users(id),
    action_type VARCHAR(50),
    entity_type VARCHAR(50),
    action_details JSONB,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_submissions_user ON form_submissions(user_id);
CREATE INDEX idx_suggestions_submission ON field_suggestions(submission_id);
