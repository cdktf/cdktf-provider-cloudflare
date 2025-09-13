/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/zero_trust_risk_scoring_integration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ZeroTrustRiskScoringIntegrationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/zero_trust_risk_scoring_integration#account_id ZeroTrustRiskScoringIntegration#account_id}
  */
  readonly accountId: string;
  /**
  * Whether this integration is enabled. If disabled, no risk changes will be exported to the third-party.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/zero_trust_risk_scoring_integration#active ZeroTrustRiskScoringIntegration#active}
  */
  readonly active?: boolean | cdktf.IResolvable;
  /**
  * Available values: "Okta".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/zero_trust_risk_scoring_integration#integration_type ZeroTrustRiskScoringIntegration#integration_type}
  */
  readonly integrationType: string;
  /**
  * A reference id that can be supplied by the client. Currently this should be set to the Access-Okta IDP ID (a UUIDv4).
  * https://developers.cloudflare.com/api/operations/access-identity-providers-get-an-access-identity-provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/zero_trust_risk_scoring_integration#reference_id ZeroTrustRiskScoringIntegration#reference_id}
  */
  readonly referenceId?: string;
  /**
  * The base url of the tenant, e.g. "https://tenant.okta.com".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/zero_trust_risk_scoring_integration#tenant_url ZeroTrustRiskScoringIntegration#tenant_url}
  */
  readonly tenantUrl: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/zero_trust_risk_scoring_integration cloudflare_zero_trust_risk_scoring_integration}
*/
export class ZeroTrustRiskScoringIntegration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_zero_trust_risk_scoring_integration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ZeroTrustRiskScoringIntegration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ZeroTrustRiskScoringIntegration to import
  * @param importFromId The id of the existing ZeroTrustRiskScoringIntegration that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/zero_trust_risk_scoring_integration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ZeroTrustRiskScoringIntegration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_risk_scoring_integration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/zero_trust_risk_scoring_integration cloudflare_zero_trust_risk_scoring_integration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ZeroTrustRiskScoringIntegrationConfig
  */
  public constructor(scope: Construct, id: string, config: ZeroTrustRiskScoringIntegrationConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_zero_trust_risk_scoring_integration',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '5.10.0',
        providerVersionConstraint: '~> 5.0'
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

  // account_tag - computed: true, optional: false, required: false
  public get accountTag() {
    return this.getStringAttribute('account_tag');
  }

  // active - computed: false, optional: true, required: false
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

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
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

  // reference_id - computed: false, optional: true, required: false
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
