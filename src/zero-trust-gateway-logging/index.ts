// https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/zero_trust_gateway_logging
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ZeroTrustGatewayLoggingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/zero_trust_gateway_logging#account_id ZeroTrustGatewayLogging#account_id}
  */
  readonly accountId: string;
  /**
  * Redact personally identifiable information from activity logging (PII fields are: source IP, user email, user ID, device ID, URL, referrer, user agent).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/zero_trust_gateway_logging#redact_pii ZeroTrustGatewayLogging#redact_pii}
  */
  readonly redactPii?: boolean | cdktf.IResolvable;
  /**
  * Logging settings by rule type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/zero_trust_gateway_logging#settings_by_rule_type ZeroTrustGatewayLogging#settings_by_rule_type}
  */
  readonly settingsByRuleType?: ZeroTrustGatewayLoggingSettingsByRuleType;
}
export interface ZeroTrustGatewayLoggingSettingsByRuleType {
  /**
  * Logging settings for DNS firewall.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/zero_trust_gateway_logging#dns ZeroTrustGatewayLogging#dns}
  */
  readonly dns?: string;
  /**
  * Logging settings for HTTP/HTTPS firewall.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/zero_trust_gateway_logging#http ZeroTrustGatewayLogging#http}
  */
  readonly http?: string;
  /**
  * Logging settings for Network firewall.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/zero_trust_gateway_logging#l4 ZeroTrustGatewayLogging#l4}
  */
  readonly l4?: string;
}

export function zeroTrustGatewayLoggingSettingsByRuleTypeToTerraform(struct?: ZeroTrustGatewayLoggingSettingsByRuleType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns: cdktf.stringToTerraform(struct!.dns),
    http: cdktf.stringToTerraform(struct!.http),
    l4: cdktf.stringToTerraform(struct!.l4),
  }
}


export function zeroTrustGatewayLoggingSettingsByRuleTypeToHclTerraform(struct?: ZeroTrustGatewayLoggingSettingsByRuleType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns: {
      value: cdktf.stringToHclTerraform(struct!.dns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http: {
      value: cdktf.stringToHclTerraform(struct!.http),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    l4: {
      value: cdktf.stringToHclTerraform(struct!.l4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustGatewayLoggingSettingsByRuleType | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dns !== undefined) {
      hasAnyValues = true;
      internalValueResult.dns = this._dns;
    }
    if (this._http !== undefined) {
      hasAnyValues = true;
      internalValueResult.http = this._http;
    }
    if (this._l4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.l4 = this._l4;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustGatewayLoggingSettingsByRuleType | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dns = undefined;
      this._http = undefined;
      this._l4 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dns = value.dns;
      this._http = value.http;
      this._l4 = value.l4;
    }
  }

  // dns - computed: true, optional: true, required: false
  private _dns?: string; 
  public get dns() {
    return this.getStringAttribute('dns');
  }
  public set dns(value: string) {
    this._dns = value;
  }
  public resetDns() {
    this._dns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsInput() {
    return this._dns;
  }

  // http - computed: true, optional: true, required: false
  private _http?: string; 
  public get http() {
    return this.getStringAttribute('http');
  }
  public set http(value: string) {
    this._http = value;
  }
  public resetHttp() {
    this._http = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpInput() {
    return this._http;
  }

  // l4 - computed: true, optional: true, required: false
  private _l4?: string; 
  public get l4() {
    return this.getStringAttribute('l4');
  }
  public set l4(value: string) {
    this._l4 = value;
  }
  public resetL4() {
    this._l4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l4Input() {
    return this._l4;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/zero_trust_gateway_logging cloudflare_zero_trust_gateway_logging}
*/
export class ZeroTrustGatewayLogging extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_zero_trust_gateway_logging";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ZeroTrustGatewayLogging resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ZeroTrustGatewayLogging to import
  * @param importFromId The id of the existing ZeroTrustGatewayLogging that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/zero_trust_gateway_logging#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ZeroTrustGatewayLogging to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_gateway_logging", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/zero_trust_gateway_logging cloudflare_zero_trust_gateway_logging} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ZeroTrustGatewayLoggingConfig
  */
  public constructor(scope: Construct, id: string, config: ZeroTrustGatewayLoggingConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_zero_trust_gateway_logging',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '5.1.0',
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
    this._redactPii = config.redactPii;
    this._settingsByRuleType.internalValue = config.settingsByRuleType;
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

  // redact_pii - computed: false, optional: true, required: false
  private _redactPii?: boolean | cdktf.IResolvable; 
  public get redactPii() {
    return this.getBooleanAttribute('redact_pii');
  }
  public set redactPii(value: boolean | cdktf.IResolvable) {
    this._redactPii = value;
  }
  public resetRedactPii() {
    this._redactPii = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redactPiiInput() {
    return this._redactPii;
  }

  // settings_by_rule_type - computed: true, optional: true, required: false
  private _settingsByRuleType = new ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference(this, "settings_by_rule_type");
  public get settingsByRuleType() {
    return this._settingsByRuleType;
  }
  public putSettingsByRuleType(value: ZeroTrustGatewayLoggingSettingsByRuleType) {
    this._settingsByRuleType.internalValue = value;
  }
  public resetSettingsByRuleType() {
    this._settingsByRuleType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsByRuleTypeInput() {
    return this._settingsByRuleType.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      redact_pii: cdktf.booleanToTerraform(this._redactPii),
      settings_by_rule_type: zeroTrustGatewayLoggingSettingsByRuleTypeToTerraform(this._settingsByRuleType.internalValue),
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
      redact_pii: {
        value: cdktf.booleanToHclTerraform(this._redactPii),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      settings_by_rule_type: {
        value: zeroTrustGatewayLoggingSettingsByRuleTypeToHclTerraform(this._settingsByRuleType.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ZeroTrustGatewayLoggingSettingsByRuleType",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
