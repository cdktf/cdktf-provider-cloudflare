/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/magic_wan_ipsec_tunnel
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCloudflareMagicWanIpsecTunnelConfig extends cdktf.TerraformMetaArguments {
  /**
  * Identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/magic_wan_ipsec_tunnel#account_id DataCloudflareMagicWanIpsecTunnel#account_id}
  */
  readonly accountId: string;
  /**
  * Identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/magic_wan_ipsec_tunnel#ipsec_tunnel_id DataCloudflareMagicWanIpsecTunnel#ipsec_tunnel_id}
  */
  readonly ipsecTunnelId: string;
}
export interface DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTarget {
}

export function dataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTargetToTerraform(struct?: DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTargetToHclTerraform(struct?: DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // effective - computed: true, optional: false, required: false
  public get effective() {
    return this.getStringAttribute('effective');
  }

  // saved - computed: true, optional: false, required: false
  public get saved() {
    return this.getStringAttribute('saved');
  }
}
export interface DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheck {
}

export function dataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckToTerraform(struct?: DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckToHclTerraform(struct?: DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheck | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheck | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // direction - computed: true, optional: false, required: false
  public get direction() {
    return this.getStringAttribute('direction');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // rate - computed: true, optional: false, required: false
  public get rate() {
    return this.getStringAttribute('rate');
  }

  // target - computed: true, optional: false, required: false
  private _target = new DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadata {
}

export function dataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadataToTerraform(struct?: DataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadataToHclTerraform(struct?: DataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // last_generated_on - computed: true, optional: false, required: false
  public get lastGeneratedOn() {
    return this.getStringAttribute('last_generated_on');
  }
}
export interface DataCloudflareMagicWanIpsecTunnelIpsecTunnel {
}

export function dataCloudflareMagicWanIpsecTunnelIpsecTunnelToTerraform(struct?: DataCloudflareMagicWanIpsecTunnelIpsecTunnel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareMagicWanIpsecTunnelIpsecTunnelToHclTerraform(struct?: DataCloudflareMagicWanIpsecTunnelIpsecTunnel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareMagicWanIpsecTunnelIpsecTunnel | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareMagicWanIpsecTunnelIpsecTunnel | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allow_null_cipher - computed: true, optional: false, required: false
  public get allowNullCipher() {
    return this.getBooleanAttribute('allow_null_cipher');
  }

  // cloudflare_endpoint - computed: true, optional: false, required: false
  public get cloudflareEndpoint() {
    return this.getStringAttribute('cloudflare_endpoint');
  }

  // created_on - computed: true, optional: false, required: false
  public get createdOn() {
    return this.getStringAttribute('created_on');
  }

  // customer_endpoint - computed: true, optional: false, required: false
  public get customerEndpoint() {
    return this.getStringAttribute('customer_endpoint');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // health_check - computed: true, optional: false, required: false
  private _healthCheck = new DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference(this, "health_check");
  public get healthCheck() {
    return this._healthCheck;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // interface_address - computed: true, optional: false, required: false
  public get interfaceAddress() {
    return this.getStringAttribute('interface_address');
  }

  // interface_address6 - computed: true, optional: false, required: false
  public get interfaceAddress6() {
    return this.getStringAttribute('interface_address6');
  }

  // modified_on - computed: true, optional: false, required: false
  public get modifiedOn() {
    return this.getStringAttribute('modified_on');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // psk_metadata - computed: true, optional: false, required: false
  private _pskMetadata = new DataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference(this, "psk_metadata");
  public get pskMetadata() {
    return this._pskMetadata;
  }

  // replay_protection - computed: true, optional: false, required: false
  public get replayProtection() {
    return this.getBooleanAttribute('replay_protection');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/magic_wan_ipsec_tunnel cloudflare_magic_wan_ipsec_tunnel}
*/
export class DataCloudflareMagicWanIpsecTunnel extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_magic_wan_ipsec_tunnel";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCloudflareMagicWanIpsecTunnel resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCloudflareMagicWanIpsecTunnel to import
  * @param importFromId The id of the existing DataCloudflareMagicWanIpsecTunnel that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/magic_wan_ipsec_tunnel#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCloudflareMagicWanIpsecTunnel to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_magic_wan_ipsec_tunnel", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/magic_wan_ipsec_tunnel cloudflare_magic_wan_ipsec_tunnel} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCloudflareMagicWanIpsecTunnelConfig
  */
  public constructor(scope: Construct, id: string, config: DataCloudflareMagicWanIpsecTunnelConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_magic_wan_ipsec_tunnel',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '5.8.2',
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
    this._ipsecTunnelId = config.ipsecTunnelId;
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

  // ipsec_tunnel - computed: true, optional: false, required: false
  private _ipsecTunnel = new DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference(this, "ipsec_tunnel");
  public get ipsecTunnel() {
    return this._ipsecTunnel;
  }

  // ipsec_tunnel_id - computed: false, optional: false, required: true
  private _ipsecTunnelId?: string; 
  public get ipsecTunnelId() {
    return this.getStringAttribute('ipsec_tunnel_id');
  }
  public set ipsecTunnelId(value: string) {
    this._ipsecTunnelId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecTunnelIdInput() {
    return this._ipsecTunnelId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      ipsec_tunnel_id: cdktf.stringToTerraform(this._ipsecTunnelId),
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
      ipsec_tunnel_id: {
        value: cdktf.stringToHclTerraform(this._ipsecTunnelId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
