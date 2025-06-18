/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/data-sources/magic_wan_gre_tunnel
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCloudflareMagicWanGreTunnelConfig extends cdktf.TerraformMetaArguments {
  /**
  * Identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/data-sources/magic_wan_gre_tunnel#account_id DataCloudflareMagicWanGreTunnel#account_id}
  */
  readonly accountId: string;
  /**
  * Identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/data-sources/magic_wan_gre_tunnel#gre_tunnel_id DataCloudflareMagicWanGreTunnel#gre_tunnel_id}
  */
  readonly greTunnelId: string;
}
export interface DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckTarget {
}

export function dataCloudflareMagicWanGreTunnelGreTunnelHealthCheckTargetToTerraform(struct?: DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareMagicWanGreTunnelGreTunnelHealthCheckTargetToHclTerraform(struct?: DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckTarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckTarget | undefined) {
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
export interface DataCloudflareMagicWanGreTunnelGreTunnelHealthCheck {
}

export function dataCloudflareMagicWanGreTunnelGreTunnelHealthCheckToTerraform(struct?: DataCloudflareMagicWanGreTunnelGreTunnelHealthCheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareMagicWanGreTunnelGreTunnelHealthCheckToHclTerraform(struct?: DataCloudflareMagicWanGreTunnelGreTunnelHealthCheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareMagicWanGreTunnelGreTunnelHealthCheck | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareMagicWanGreTunnelGreTunnelHealthCheck | undefined) {
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
  private _target = new DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataCloudflareMagicWanGreTunnelGreTunnel {
}

export function dataCloudflareMagicWanGreTunnelGreTunnelToTerraform(struct?: DataCloudflareMagicWanGreTunnelGreTunnel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareMagicWanGreTunnelGreTunnelToHclTerraform(struct?: DataCloudflareMagicWanGreTunnelGreTunnel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareMagicWanGreTunnelGreTunnelOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareMagicWanGreTunnelGreTunnel | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareMagicWanGreTunnelGreTunnel | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cloudflare_gre_endpoint - computed: true, optional: false, required: false
  public get cloudflareGreEndpoint() {
    return this.getStringAttribute('cloudflare_gre_endpoint');
  }

  // created_on - computed: true, optional: false, required: false
  public get createdOn() {
    return this.getStringAttribute('created_on');
  }

  // customer_gre_endpoint - computed: true, optional: false, required: false
  public get customerGreEndpoint() {
    return this.getStringAttribute('customer_gre_endpoint');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // health_check - computed: true, optional: false, required: false
  private _healthCheck = new DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckOutputReference(this, "health_check");
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

  // modified_on - computed: true, optional: false, required: false
  public get modifiedOn() {
    return this.getStringAttribute('modified_on');
  }

  // mtu - computed: true, optional: false, required: false
  public get mtu() {
    return this.getNumberAttribute('mtu');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // ttl - computed: true, optional: false, required: false
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/data-sources/magic_wan_gre_tunnel cloudflare_magic_wan_gre_tunnel}
*/
export class DataCloudflareMagicWanGreTunnel extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_magic_wan_gre_tunnel";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCloudflareMagicWanGreTunnel resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCloudflareMagicWanGreTunnel to import
  * @param importFromId The id of the existing DataCloudflareMagicWanGreTunnel that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/data-sources/magic_wan_gre_tunnel#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCloudflareMagicWanGreTunnel to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_magic_wan_gre_tunnel", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/data-sources/magic_wan_gre_tunnel cloudflare_magic_wan_gre_tunnel} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCloudflareMagicWanGreTunnelConfig
  */
  public constructor(scope: Construct, id: string, config: DataCloudflareMagicWanGreTunnelConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_magic_wan_gre_tunnel',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '5.6.0',
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
    this._greTunnelId = config.greTunnelId;
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

  // gre_tunnel - computed: true, optional: false, required: false
  private _greTunnel = new DataCloudflareMagicWanGreTunnelGreTunnelOutputReference(this, "gre_tunnel");
  public get greTunnel() {
    return this._greTunnel;
  }

  // gre_tunnel_id - computed: false, optional: false, required: true
  private _greTunnelId?: string; 
  public get greTunnelId() {
    return this.getStringAttribute('gre_tunnel_id');
  }
  public set greTunnelId(value: string) {
    this._greTunnelId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get greTunnelIdInput() {
    return this._greTunnelId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      gre_tunnel_id: cdktf.stringToTerraform(this._greTunnelId),
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
      gre_tunnel_id: {
        value: cdktf.stringToHclTerraform(this._greTunnelId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
