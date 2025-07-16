/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/zero_trust_gateway_logging
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ZeroTrustGatewayLoggingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/zero_trust_gateway_logging#account_id ZeroTrustGatewayLogging#account_id}
  */
  readonly accountId: string;
  /**
  * Redact personally identifiable information from activity logging (PII fields are: source IP, user email, user ID, device ID, URL, referrer, user agent).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/zero_trust_gateway_logging#redact_pii ZeroTrustGatewayLogging#redact_pii}
  */
  readonly redactPii?: boolean | cdktf.IResolvable;
  /**
  * Logging settings by rule type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/zero_trust_gateway_logging#settings_by_rule_type ZeroTrustGatewayLogging#settings_by_rule_type}
  */
  readonly settingsByRuleType?: ZeroTrustGatewayLoggingSettingsByRuleType;
}
export interface ZeroTrustGatewayLoggingSettingsByRuleTypeDns {
  /**
  * Log all requests to this service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/zero_trust_gateway_logging#log_all ZeroTrustGatewayLogging#log_all}
  */
  readonly logAll?: boolean | cdktf.IResolvable;
  /**
  * Log only blocking requests to this service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/zero_trust_gateway_logging#log_blocks ZeroTrustGatewayLogging#log_blocks}
  */
  readonly logBlocks?: boolean | cdktf.IResolvable;
}

export function zeroTrustGatewayLoggingSettingsByRuleTypeDnsToTerraform(struct?: ZeroTrustGatewayLoggingSettingsByRuleTypeDns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    log_all: cdktf.booleanToTerraform(struct!.logAll),
    log_blocks: cdktf.booleanToTerraform(struct!.logBlocks),
  }
}


export function zeroTrustGatewayLoggingSettingsByRuleTypeDnsToHclTerraform(struct?: ZeroTrustGatewayLoggingSettingsByRuleTypeDns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    log_all: {
      value: cdktf.booleanToHclTerraform(struct!.logAll),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    log_blocks: {
      value: cdktf.booleanToHclTerraform(struct!.logBlocks),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustGatewayLoggingSettingsByRuleTypeDnsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustGatewayLoggingSettingsByRuleTypeDns | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logAll !== undefined) {
      hasAnyValues = true;
      internalValueResult.logAll = this._logAll;
    }
    if (this._logBlocks !== undefined) {
      hasAnyValues = true;
      internalValueResult.logBlocks = this._logBlocks;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustGatewayLoggingSettingsByRuleTypeDns | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._logAll = undefined;
      this._logBlocks = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._logAll = value.logAll;
      this._logBlocks = value.logBlocks;
    }
  }

  // log_all - computed: true, optional: true, required: false
  private _logAll?: boolean | cdktf.IResolvable; 
  public get logAll() {
    return this.getBooleanAttribute('log_all');
  }
  public set logAll(value: boolean | cdktf.IResolvable) {
    this._logAll = value;
  }
  public resetLogAll() {
    this._logAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logAllInput() {
    return this._logAll;
  }

  // log_blocks - computed: true, optional: true, required: false
  private _logBlocks?: boolean | cdktf.IResolvable; 
  public get logBlocks() {
    return this.getBooleanAttribute('log_blocks');
  }
  public set logBlocks(value: boolean | cdktf.IResolvable) {
    this._logBlocks = value;
  }
  public resetLogBlocks() {
    this._logBlocks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logBlocksInput() {
    return this._logBlocks;
  }
}
export interface ZeroTrustGatewayLoggingSettingsByRuleTypeHttp {
  /**
  * Log all requests to this service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/zero_trust_gateway_logging#log_all ZeroTrustGatewayLogging#log_all}
  */
  readonly logAll?: boolean | cdktf.IResolvable;
  /**
  * Log only blocking requests to this service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/zero_trust_gateway_logging#log_blocks ZeroTrustGatewayLogging#log_blocks}
  */
  readonly logBlocks?: boolean | cdktf.IResolvable;
}

export function zeroTrustGatewayLoggingSettingsByRuleTypeHttpToTerraform(struct?: ZeroTrustGatewayLoggingSettingsByRuleTypeHttp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    log_all: cdktf.booleanToTerraform(struct!.logAll),
    log_blocks: cdktf.booleanToTerraform(struct!.logBlocks),
  }
}


export function zeroTrustGatewayLoggingSettingsByRuleTypeHttpToHclTerraform(struct?: ZeroTrustGatewayLoggingSettingsByRuleTypeHttp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    log_all: {
      value: cdktf.booleanToHclTerraform(struct!.logAll),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    log_blocks: {
      value: cdktf.booleanToHclTerraform(struct!.logBlocks),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustGatewayLoggingSettingsByRuleTypeHttpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustGatewayLoggingSettingsByRuleTypeHttp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logAll !== undefined) {
      hasAnyValues = true;
      internalValueResult.logAll = this._logAll;
    }
    if (this._logBlocks !== undefined) {
      hasAnyValues = true;
      internalValueResult.logBlocks = this._logBlocks;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustGatewayLoggingSettingsByRuleTypeHttp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._logAll = undefined;
      this._logBlocks = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._logAll = value.logAll;
      this._logBlocks = value.logBlocks;
    }
  }

  // log_all - computed: true, optional: true, required: false
  private _logAll?: boolean | cdktf.IResolvable; 
  public get logAll() {
    return this.getBooleanAttribute('log_all');
  }
  public set logAll(value: boolean | cdktf.IResolvable) {
    this._logAll = value;
  }
  public resetLogAll() {
    this._logAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logAllInput() {
    return this._logAll;
  }

  // log_blocks - computed: true, optional: true, required: false
  private _logBlocks?: boolean | cdktf.IResolvable; 
  public get logBlocks() {
    return this.getBooleanAttribute('log_blocks');
  }
  public set logBlocks(value: boolean | cdktf.IResolvable) {
    this._logBlocks = value;
  }
  public resetLogBlocks() {
    this._logBlocks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logBlocksInput() {
    return this._logBlocks;
  }
}
export interface ZeroTrustGatewayLoggingSettingsByRuleTypeL4 {
  /**
  * Log all requests to this service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/zero_trust_gateway_logging#log_all ZeroTrustGatewayLogging#log_all}
  */
  readonly logAll?: boolean | cdktf.IResolvable;
  /**
  * Log only blocking requests to this service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/zero_trust_gateway_logging#log_blocks ZeroTrustGatewayLogging#log_blocks}
  */
  readonly logBlocks?: boolean | cdktf.IResolvable;
}

export function zeroTrustGatewayLoggingSettingsByRuleTypeL4ToTerraform(struct?: ZeroTrustGatewayLoggingSettingsByRuleTypeL4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    log_all: cdktf.booleanToTerraform(struct!.logAll),
    log_blocks: cdktf.booleanToTerraform(struct!.logBlocks),
  }
}


export function zeroTrustGatewayLoggingSettingsByRuleTypeL4ToHclTerraform(struct?: ZeroTrustGatewayLoggingSettingsByRuleTypeL4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    log_all: {
      value: cdktf.booleanToHclTerraform(struct!.logAll),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    log_blocks: {
      value: cdktf.booleanToHclTerraform(struct!.logBlocks),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustGatewayLoggingSettingsByRuleTypeL4OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustGatewayLoggingSettingsByRuleTypeL4 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logAll !== undefined) {
      hasAnyValues = true;
      internalValueResult.logAll = this._logAll;
    }
    if (this._logBlocks !== undefined) {
      hasAnyValues = true;
      internalValueResult.logBlocks = this._logBlocks;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustGatewayLoggingSettingsByRuleTypeL4 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._logAll = undefined;
      this._logBlocks = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._logAll = value.logAll;
      this._logBlocks = value.logBlocks;
    }
  }

  // log_all - computed: true, optional: true, required: false
  private _logAll?: boolean | cdktf.IResolvable; 
  public get logAll() {
    return this.getBooleanAttribute('log_all');
  }
  public set logAll(value: boolean | cdktf.IResolvable) {
    this._logAll = value;
  }
  public resetLogAll() {
    this._logAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logAllInput() {
    return this._logAll;
  }

  // log_blocks - computed: true, optional: true, required: false
  private _logBlocks?: boolean | cdktf.IResolvable; 
  public get logBlocks() {
    return this.getBooleanAttribute('log_blocks');
  }
  public set logBlocks(value: boolean | cdktf.IResolvable) {
    this._logBlocks = value;
  }
  public resetLogBlocks() {
    this._logBlocks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logBlocksInput() {
    return this._logBlocks;
  }
}
export interface ZeroTrustGatewayLoggingSettingsByRuleType {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/zero_trust_gateway_logging#dns ZeroTrustGatewayLogging#dns}
  */
  readonly dns?: ZeroTrustGatewayLoggingSettingsByRuleTypeDns;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/zero_trust_gateway_logging#http ZeroTrustGatewayLogging#http}
  */
  readonly http?: ZeroTrustGatewayLoggingSettingsByRuleTypeHttp;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/zero_trust_gateway_logging#l4 ZeroTrustGatewayLogging#l4}
  */
  readonly l4?: ZeroTrustGatewayLoggingSettingsByRuleTypeL4;
}

export function zeroTrustGatewayLoggingSettingsByRuleTypeToTerraform(struct?: ZeroTrustGatewayLoggingSettingsByRuleType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns: zeroTrustGatewayLoggingSettingsByRuleTypeDnsToTerraform(struct!.dns),
    http: zeroTrustGatewayLoggingSettingsByRuleTypeHttpToTerraform(struct!.http),
    l4: zeroTrustGatewayLoggingSettingsByRuleTypeL4ToTerraform(struct!.l4),
  }
}


export function zeroTrustGatewayLoggingSettingsByRuleTypeToHclTerraform(struct?: ZeroTrustGatewayLoggingSettingsByRuleType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns: {
      value: zeroTrustGatewayLoggingSettingsByRuleTypeDnsToHclTerraform(struct!.dns),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustGatewayLoggingSettingsByRuleTypeDns",
    },
    http: {
      value: zeroTrustGatewayLoggingSettingsByRuleTypeHttpToHclTerraform(struct!.http),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustGatewayLoggingSettingsByRuleTypeHttp",
    },
    l4: {
      value: zeroTrustGatewayLoggingSettingsByRuleTypeL4ToHclTerraform(struct!.l4),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustGatewayLoggingSettingsByRuleTypeL4",
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
    if (this._dns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dns = this._dns?.internalValue;
    }
    if (this._http?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.http = this._http?.internalValue;
    }
    if (this._l4?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.l4 = this._l4?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustGatewayLoggingSettingsByRuleType | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dns.internalValue = undefined;
      this._http.internalValue = undefined;
      this._l4.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dns.internalValue = value.dns;
      this._http.internalValue = value.http;
      this._l4.internalValue = value.l4;
    }
  }

  // dns - computed: true, optional: true, required: false
  private _dns = new ZeroTrustGatewayLoggingSettingsByRuleTypeDnsOutputReference(this, "dns");
  public get dns() {
    return this._dns;
  }
  public putDns(value: ZeroTrustGatewayLoggingSettingsByRuleTypeDns) {
    this._dns.internalValue = value;
  }
  public resetDns() {
    this._dns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsInput() {
    return this._dns.internalValue;
  }

  // http - computed: true, optional: true, required: false
  private _http = new ZeroTrustGatewayLoggingSettingsByRuleTypeHttpOutputReference(this, "http");
  public get http() {
    return this._http;
  }
  public putHttp(value: ZeroTrustGatewayLoggingSettingsByRuleTypeHttp) {
    this._http.internalValue = value;
  }
  public resetHttp() {
    this._http.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpInput() {
    return this._http.internalValue;
  }

  // l4 - computed: true, optional: true, required: false
  private _l4 = new ZeroTrustGatewayLoggingSettingsByRuleTypeL4OutputReference(this, "l4");
  public get l4() {
    return this._l4;
  }
  public putL4(value: ZeroTrustGatewayLoggingSettingsByRuleTypeL4) {
    this._l4.internalValue = value;
  }
  public resetL4() {
    this._l4.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l4Input() {
    return this._l4.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/zero_trust_gateway_logging cloudflare_zero_trust_gateway_logging}
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
  * @param importFromId The id of the existing ZeroTrustGatewayLogging that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/zero_trust_gateway_logging#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ZeroTrustGatewayLogging to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_gateway_logging", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/zero_trust_gateway_logging cloudflare_zero_trust_gateway_logging} Resource
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
        providerVersion: '5.7.1',
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

  // redact_pii - computed: true, optional: true, required: false
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
