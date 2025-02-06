// https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/zero_trust_gateway_certificate
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ZeroTrustGatewayCertificateConfig extends cdktf.TerraformMetaArguments {
  /**
  * The account identifier to target for the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/zero_trust_gateway_certificate#account_id ZeroTrustGatewayCertificate#account_id}
  */
  readonly accountId: string;
  /**
  * Whether or not to activate a certificate. A certificate must be activated to use in Gateway certificate settings. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/zero_trust_gateway_certificate#activate ZeroTrustGatewayCertificate#activate}
  */
  readonly activate?: boolean | cdktf.IResolvable;
  /**
  * The type of certificate (custom or Gateway-managed). Must provide only one of `custom`, `gateway_managed`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/zero_trust_gateway_certificate#custom ZeroTrustGatewayCertificate#custom}
  */
  readonly custom?: boolean | cdktf.IResolvable;
  /**
  * The type of certificate (custom or Gateway-managed). Must provide only one of `custom`, `gateway_managed`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/zero_trust_gateway_certificate#gateway_managed ZeroTrustGatewayCertificate#gateway_managed}
  */
  readonly gatewayManaged?: boolean | cdktf.IResolvable;
  /**
  * Certificate UUID. Computed for Gateway-managed certificates. Required when using `custom`. Conflicts with `gateway_managed`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/zero_trust_gateway_certificate#id ZeroTrustGatewayCertificate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Number of days the generated certificate will be valid, minimum 1 day and maximum 30 years. Defaults to 5 years. Defaults to `1826`. Required when using `gateway_managed`. Conflicts with `custom`. **Modifying this attribute will force creation of a new resource.**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/zero_trust_gateway_certificate#validity_period_days ZeroTrustGatewayCertificate#validity_period_days}
  */
  readonly validityPeriodDays?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/zero_trust_gateway_certificate cloudflare_zero_trust_gateway_certificate}
*/
export class ZeroTrustGatewayCertificate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_zero_trust_gateway_certificate";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ZeroTrustGatewayCertificate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ZeroTrustGatewayCertificate to import
  * @param importFromId The id of the existing ZeroTrustGatewayCertificate that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/zero_trust_gateway_certificate#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ZeroTrustGatewayCertificate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_gateway_certificate", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/zero_trust_gateway_certificate cloudflare_zero_trust_gateway_certificate} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ZeroTrustGatewayCertificateConfig
  */
  public constructor(scope: Construct, id: string, config: ZeroTrustGatewayCertificateConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_zero_trust_gateway_certificate',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '4.52.0',
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
    this._activate = config.activate;
    this._custom = config.custom;
    this._gatewayManaged = config.gatewayManaged;
    this._id = config.id;
    this._validityPeriodDays = config.validityPeriodDays;
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

  // activate - computed: false, optional: true, required: false
  private _activate?: boolean | cdktf.IResolvable; 
  public get activate() {
    return this.getBooleanAttribute('activate');
  }
  public set activate(value: boolean | cdktf.IResolvable) {
    this._activate = value;
  }
  public resetActivate() {
    this._activate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activateInput() {
    return this._activate;
  }

  // binding_status - computed: true, optional: false, required: false
  public get bindingStatus() {
    return this.getStringAttribute('binding_status');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // custom - computed: false, optional: true, required: false
  private _custom?: boolean | cdktf.IResolvable; 
  public get custom() {
    return this.getBooleanAttribute('custom');
  }
  public set custom(value: boolean | cdktf.IResolvable) {
    this._custom = value;
  }
  public resetCustom() {
    this._custom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customInput() {
    return this._custom;
  }

  // expires_on - computed: true, optional: false, required: false
  public get expiresOn() {
    return this.getStringAttribute('expires_on');
  }

  // gateway_managed - computed: false, optional: true, required: false
  private _gatewayManaged?: boolean | cdktf.IResolvable; 
  public get gatewayManaged() {
    return this.getBooleanAttribute('gateway_managed');
  }
  public set gatewayManaged(value: boolean | cdktf.IResolvable) {
    this._gatewayManaged = value;
  }
  public resetGatewayManaged() {
    this._gatewayManaged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayManagedInput() {
    return this._gatewayManaged;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // in_use - computed: true, optional: false, required: false
  public get inUse() {
    return this.getBooleanAttribute('in_use');
  }

  // qs_pack_id - computed: true, optional: false, required: false
  public get qsPackId() {
    return this.getStringAttribute('qs_pack_id');
  }

  // uploaded_on - computed: true, optional: false, required: false
  public get uploadedOn() {
    return this.getStringAttribute('uploaded_on');
  }

  // validity_period_days - computed: false, optional: true, required: false
  private _validityPeriodDays?: number; 
  public get validityPeriodDays() {
    return this.getNumberAttribute('validity_period_days');
  }
  public set validityPeriodDays(value: number) {
    this._validityPeriodDays = value;
  }
  public resetValidityPeriodDays() {
    this._validityPeriodDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validityPeriodDaysInput() {
    return this._validityPeriodDays;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      activate: cdktf.booleanToTerraform(this._activate),
      custom: cdktf.booleanToTerraform(this._custom),
      gateway_managed: cdktf.booleanToTerraform(this._gatewayManaged),
      id: cdktf.stringToTerraform(this._id),
      validity_period_days: cdktf.numberToTerraform(this._validityPeriodDays),
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
      activate: {
        value: cdktf.booleanToHclTerraform(this._activate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      custom: {
        value: cdktf.booleanToHclTerraform(this._custom),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      gateway_managed: {
        value: cdktf.booleanToHclTerraform(this._gatewayManaged),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      validity_period_days: {
        value: cdktf.numberToHclTerraform(this._validityPeriodDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
