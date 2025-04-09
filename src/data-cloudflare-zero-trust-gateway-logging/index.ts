// https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/data-sources/zero_trust_gateway_logging
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCloudflareZeroTrustGatewayLoggingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/data-sources/zero_trust_gateway_logging#account_id DataCloudflareZeroTrustGatewayLogging#account_id}
  */
  readonly accountId: string;
}
export interface DataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeDns {
}

export function dataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeDnsToTerraform(struct?: DataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeDns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeDnsToHclTerraform(struct?: DataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeDns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeDnsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeDns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeDns | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // log_all - computed: true, optional: false, required: false
  public get logAll() {
    return this.getBooleanAttribute('log_all');
  }

  // log_blocks - computed: true, optional: false, required: false
  public get logBlocks() {
    return this.getBooleanAttribute('log_blocks');
  }
}
export interface DataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeHttp {
}

export function dataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeHttpToTerraform(struct?: DataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeHttp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeHttpToHclTerraform(struct?: DataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeHttp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeHttpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeHttp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeHttp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // log_all - computed: true, optional: false, required: false
  public get logAll() {
    return this.getBooleanAttribute('log_all');
  }

  // log_blocks - computed: true, optional: false, required: false
  public get logBlocks() {
    return this.getBooleanAttribute('log_blocks');
  }
}
export interface DataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeL4 {
}

export function dataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeL4ToTerraform(struct?: DataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeL4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeL4ToHclTerraform(struct?: DataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeL4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeL4OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeL4 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeL4 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // log_all - computed: true, optional: false, required: false
  public get logAll() {
    return this.getBooleanAttribute('log_all');
  }

  // log_blocks - computed: true, optional: false, required: false
  public get logBlocks() {
    return this.getBooleanAttribute('log_blocks');
  }
}
export interface DataCloudflareZeroTrustGatewayLoggingSettingsByRuleType {
}

export function dataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeToTerraform(struct?: DataCloudflareZeroTrustGatewayLoggingSettingsByRuleType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeToHclTerraform(struct?: DataCloudflareZeroTrustGatewayLoggingSettingsByRuleType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareZeroTrustGatewayLoggingSettingsByRuleType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustGatewayLoggingSettingsByRuleType | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dns - computed: true, optional: false, required: false
  private _dns = new DataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeDnsOutputReference(this, "dns");
  public get dns() {
    return this._dns;
  }

  // http - computed: true, optional: false, required: false
  private _http = new DataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeHttpOutputReference(this, "http");
  public get http() {
    return this._http;
  }

  // l4 - computed: true, optional: false, required: false
  private _l4 = new DataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeL4OutputReference(this, "l4");
  public get l4() {
    return this._l4;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/data-sources/zero_trust_gateway_logging cloudflare_zero_trust_gateway_logging}
*/
export class DataCloudflareZeroTrustGatewayLogging extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_zero_trust_gateway_logging";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCloudflareZeroTrustGatewayLogging resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCloudflareZeroTrustGatewayLogging to import
  * @param importFromId The id of the existing DataCloudflareZeroTrustGatewayLogging that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/data-sources/zero_trust_gateway_logging#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCloudflareZeroTrustGatewayLogging to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_gateway_logging", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/data-sources/zero_trust_gateway_logging cloudflare_zero_trust_gateway_logging} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCloudflareZeroTrustGatewayLoggingConfig
  */
  public constructor(scope: Construct, id: string, config: DataCloudflareZeroTrustGatewayLoggingConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_zero_trust_gateway_logging',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '5.3.0',
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

  // redact_pii - computed: true, optional: false, required: false
  public get redactPii() {
    return this.getBooleanAttribute('redact_pii');
  }

  // settings_by_rule_type - computed: true, optional: false, required: false
  private _settingsByRuleType = new DataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference(this, "settings_by_rule_type");
  public get settingsByRuleType() {
    return this._settingsByRuleType;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
