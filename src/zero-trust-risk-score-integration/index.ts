// https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_risk_score_integration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ZeroTrustRiskScoreIntegrationConfig extends cdktf.TerraformMetaArguments {
  /**
  * The account identifier to target for the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_risk_score_integration#account_id ZeroTrustRiskScoreIntegration#account_id}
  */
  readonly accountId: string;
  /**
  * Whether this integration is enabled. If disabled, no risk changes will be exported to the third-party.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_risk_score_integration#active ZeroTrustRiskScoreIntegration#active}
  */
  readonly active?: boolean | cdktf.IResolvable;
  /**
  * The type of integration, e.g. 'Okta'. Full list of allowed values can be found here: https://developers.cloudflare.com/api/operations/dlp-zt-risk-score-integration-create#request-body
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_risk_score_integration#integration_type ZeroTrustRiskScoreIntegration#integration_type}
  */
  readonly integrationType: string;
  /**
  * A reference id that can be supplied by the client. Currently this should be set to the Access-Okta IDP ID (a UUIDv4). If omitted, a random UUIDv4 is used. https://developers.cloudflare.com/api/operations/access-identity-providers-get-an-access-identity-provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_risk_score_integration#reference_id ZeroTrustRiskScoreIntegration#reference_id}
  */
  readonly referenceId?: string;
  /**
  * The base url of the tenant, e.g. 'https://tenant.okta.com'. Must be your Okta Tenant URL and not your custom domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_risk_score_integration#tenant_url ZeroTrustRiskScoreIntegration#tenant_url}
  */
  readonly tenantUrl: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_risk_score_integration cloudflare_zero_trust_risk_score_integration}
*/
export class ZeroTrustRiskScoreIntegration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_zero_trust_risk_score_integration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ZeroTrustRiskScoreIntegration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ZeroTrustRiskScoreIntegration to import
  * @param importFromId The id of the existing ZeroTrustRiskScoreIntegration that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_risk_score_integration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ZeroTrustRiskScoreIntegration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_risk_score_integration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_risk_score_integration cloudflare_zero_trust_risk_score_integration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ZeroTrustRiskScoreIntegrationConfig
  */
  public constructor(scope: Construct, id: string, config: ZeroTrustRiskScoreIntegrationConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_zero_trust_risk_score_integration',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '4.44.0',
        providerVersionConstraint: '~> 4.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountId = config.accountId;
    this._active = config.active;
    this._integrationType = config.integrationType;
    this._referenceId = config.referenceId;
    this._tenantUrl = config.tenantUrl;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: false, optional: false, required: true
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // active - computed: true, optional: true, required: false
  private _active?: boolean | cdktf.IResolvable; 
  public get active() {
    return this.getBooleanAttribute('active');
  }
  public set active(value: boolean | cdktf.IResolvable) {
    this._active = value;
  }
  public resetActive() {
    this._active = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // integration_type - computed: false, optional: false, required: true
  private _integrationType?: string; 
  public get integrationType() {
    return this.getStringAttribute('integration_type');
  }
  public set integrationType(value: string) {
    this._integrationType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationTypeInput() {
    return this._integrationType;
  }

  // reference_id - computed: true, optional: true, required: false
  private _referenceId?: string; 
  public get referenceId() {
    return this.getStringAttribute('reference_id');
  }
  public set referenceId(value: string) {
    this._referenceId = value;
  }
  public resetReferenceId() {
    this._referenceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referenceIdInput() {
    return this._referenceId;
  }

  // tenant_url - computed: false, optional: false, required: true
  private _tenantUrl?: string; 
  public get tenantUrl() {
    return this.getStringAttribute('tenant_url');
  }
  public set tenantUrl(value: string) {
    this._tenantUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantUrlInput() {
    return this._tenantUrl;
  }

  // well_known_url - computed: true, optional: false, required: false
  public get wellKnownUrl() {
    return this.getStringAttribute('well_known_url');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      active: cdktf.booleanToTerraform(this._active),
      integration_type: cdktf.stringToTerraform(this._integrationType),
      reference_id: cdktf.stringToTerraform(this._referenceId),
      tenant_url: cdktf.stringToTerraform(this._tenantUrl),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_id: {
        value: cdktf.stringToHclTerraform(this._accountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      active: {
        value: cdktf.booleanToHclTerraform(this._active),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      integration_type: {
        value: cdktf.stringToHclTerraform(this._integrationType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reference_id: {
        value: cdktf.stringToHclTerraform(this._referenceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenant_url: {
        value: cdktf.stringToHclTerraform(this._tenantUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
