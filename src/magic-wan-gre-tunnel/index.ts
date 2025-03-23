// https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/magic_wan_gre_tunnel
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MagicWanGreTunnelConfig extends cdktf.TerraformMetaArguments {
  /**
  * Identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/magic_wan_gre_tunnel#account_id MagicWanGreTunnel#account_id}
  */
  readonly accountId: string;
  /**
  * The IP address assigned to the Cloudflare side of the GRE tunnel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/magic_wan_gre_tunnel#cloudflare_gre_endpoint MagicWanGreTunnel#cloudflare_gre_endpoint}
  */
  readonly cloudflareGreEndpoint?: string;
  /**
  * The IP address assigned to the customer side of the GRE tunnel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/magic_wan_gre_tunnel#customer_gre_endpoint MagicWanGreTunnel#customer_gre_endpoint}
  */
  readonly customerGreEndpoint?: string;
  /**
  * An optional description of the GRE tunnel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/magic_wan_gre_tunnel#description MagicWanGreTunnel#description}
  */
  readonly description?: string;
  /**
  * Identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/magic_wan_gre_tunnel#gre_tunnel_id MagicWanGreTunnel#gre_tunnel_id}
  */
  readonly greTunnelId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/magic_wan_gre_tunnel#health_check MagicWanGreTunnel#health_check}
  */
  readonly healthCheck?: MagicWanGreTunnelHealthCheck;
  /**
  * A 31-bit prefix (/31 in CIDR notation) supporting two hosts, one for each side of the tunnel. Select the subnet from the following private IP space: 10.0.0.0–10.255.255.255, 172.16.0.0–172.31.255.255, 192.168.0.0–192.168.255.255.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/magic_wan_gre_tunnel#interface_address MagicWanGreTunnel#interface_address}
  */
  readonly interfaceAddress?: string;
  /**
  * Maximum Transmission Unit (MTU) in bytes for the GRE tunnel. The minimum value is 576.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/magic_wan_gre_tunnel#mtu MagicWanGreTunnel#mtu}
  */
  readonly mtu?: number;
  /**
  * The name of the tunnel. The name cannot contain spaces or special characters, must be 15 characters or less, and cannot share a name with another GRE tunnel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/magic_wan_gre_tunnel#name MagicWanGreTunnel#name}
  */
  readonly name?: string;
  /**
  * Time To Live (TTL) in number of hops of the GRE tunnel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/magic_wan_gre_tunnel#ttl MagicWanGreTunnel#ttl}
  */
  readonly ttl?: number;
}
export interface MagicWanGreTunnelGreTunnelHealthCheckTarget {
}

export function magicWanGreTunnelGreTunnelHealthCheckTargetToTerraform(struct?: MagicWanGreTunnelGreTunnelHealthCheckTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function magicWanGreTunnelGreTunnelHealthCheckTargetToHclTerraform(struct?: MagicWanGreTunnelGreTunnelHealthCheckTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class MagicWanGreTunnelGreTunnelHealthCheckTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MagicWanGreTunnelGreTunnelHealthCheckTarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MagicWanGreTunnelGreTunnelHealthCheckTarget | undefined) {
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
export interface MagicWanGreTunnelGreTunnelHealthCheck {
}

export function magicWanGreTunnelGreTunnelHealthCheckToTerraform(struct?: MagicWanGreTunnelGreTunnelHealthCheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function magicWanGreTunnelGreTunnelHealthCheckToHclTerraform(struct?: MagicWanGreTunnelGreTunnelHealthCheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class MagicWanGreTunnelGreTunnelHealthCheckOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MagicWanGreTunnelGreTunnelHealthCheck | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MagicWanGreTunnelGreTunnelHealthCheck | undefined) {
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
  private _target = new MagicWanGreTunnelGreTunnelHealthCheckTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface MagicWanGreTunnelGreTunnel {
}

export function magicWanGreTunnelGreTunnelToTerraform(struct?: MagicWanGreTunnelGreTunnel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function magicWanGreTunnelGreTunnelToHclTerraform(struct?: MagicWanGreTunnelGreTunnel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class MagicWanGreTunnelGreTunnelOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MagicWanGreTunnelGreTunnel | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MagicWanGreTunnelGreTunnel | undefined) {
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
  private _healthCheck = new MagicWanGreTunnelGreTunnelHealthCheckOutputReference(this, "health_check");
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
export interface MagicWanGreTunnelGreTunnelsHealthCheckTarget {
}

export function magicWanGreTunnelGreTunnelsHealthCheckTargetToTerraform(struct?: MagicWanGreTunnelGreTunnelsHealthCheckTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function magicWanGreTunnelGreTunnelsHealthCheckTargetToHclTerraform(struct?: MagicWanGreTunnelGreTunnelsHealthCheckTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class MagicWanGreTunnelGreTunnelsHealthCheckTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MagicWanGreTunnelGreTunnelsHealthCheckTarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MagicWanGreTunnelGreTunnelsHealthCheckTarget | undefined) {
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
export interface MagicWanGreTunnelGreTunnelsHealthCheck {
}

export function magicWanGreTunnelGreTunnelsHealthCheckToTerraform(struct?: MagicWanGreTunnelGreTunnelsHealthCheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function magicWanGreTunnelGreTunnelsHealthCheckToHclTerraform(struct?: MagicWanGreTunnelGreTunnelsHealthCheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class MagicWanGreTunnelGreTunnelsHealthCheckOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MagicWanGreTunnelGreTunnelsHealthCheck | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MagicWanGreTunnelGreTunnelsHealthCheck | undefined) {
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
  private _target = new MagicWanGreTunnelGreTunnelsHealthCheckTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface MagicWanGreTunnelGreTunnels {
}

export function magicWanGreTunnelGreTunnelsToTerraform(struct?: MagicWanGreTunnelGreTunnels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function magicWanGreTunnelGreTunnelsToHclTerraform(struct?: MagicWanGreTunnelGreTunnels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class MagicWanGreTunnelGreTunnelsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): MagicWanGreTunnelGreTunnels | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MagicWanGreTunnelGreTunnels | undefined) {
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
  private _healthCheck = new MagicWanGreTunnelGreTunnelsHealthCheckOutputReference(this, "health_check");
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

export class MagicWanGreTunnelGreTunnelsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): MagicWanGreTunnelGreTunnelsOutputReference {
    return new MagicWanGreTunnelGreTunnelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MagicWanGreTunnelHealthCheckTarget {
  /**
  * The saved health check target. Setting the value to the empty string indicates that the calculated default value will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/magic_wan_gre_tunnel#saved MagicWanGreTunnel#saved}
  */
  readonly saved?: string;
}

export function magicWanGreTunnelHealthCheckTargetToTerraform(struct?: MagicWanGreTunnelHealthCheckTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    saved: cdktf.stringToTerraform(struct!.saved),
  }
}


export function magicWanGreTunnelHealthCheckTargetToHclTerraform(struct?: MagicWanGreTunnelHealthCheckTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    saved: {
      value: cdktf.stringToHclTerraform(struct!.saved),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MagicWanGreTunnelHealthCheckTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MagicWanGreTunnelHealthCheckTarget | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._saved !== undefined) {
      hasAnyValues = true;
      internalValueResult.saved = this._saved;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MagicWanGreTunnelHealthCheckTarget | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._saved = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._saved = value.saved;
    }
  }

  // effective - computed: true, optional: false, required: false
  public get effective() {
    return this.getStringAttribute('effective');
  }

  // saved - computed: true, optional: true, required: false
  private _saved?: string; 
  public get saved() {
    return this.getStringAttribute('saved');
  }
  public set saved(value: string) {
    this._saved = value;
  }
  public resetSaved() {
    this._saved = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get savedInput() {
    return this._saved;
  }
}
export interface MagicWanGreTunnelHealthCheck {
  /**
  * The direction of the flow of the healthcheck. Either unidirectional, where the probe comes to you via the tunnel and the result comes back to Cloudflare via the open Internet, or bidirectional where both the probe and result come and go via the tunnel.
  * Available values: "unidirectional", "bidirectional".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/magic_wan_gre_tunnel#direction MagicWanGreTunnel#direction}
  */
  readonly direction?: string;
  /**
  * Determines whether to run healthchecks for a tunnel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/magic_wan_gre_tunnel#enabled MagicWanGreTunnel#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * How frequent the health check is run. The default value is `mid`.
  * Available values: "low", "mid", "high".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/magic_wan_gre_tunnel#rate MagicWanGreTunnel#rate}
  */
  readonly rate?: string;
  /**
  * The destination address in a request type health check. After the healthcheck is decapsulated at the customer end of the tunnel, the ICMP echo will be forwarded to this address. This field defaults to `customer_gre_endpoint address`. This field is ignored for bidirectional healthchecks as the interface_address (not assigned to the Cloudflare side of the tunnel) is used as the target. Must be in object form if the x-magic-new-hc-target header is set to true and string form if x-magic-new-hc-target is absent or set to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/magic_wan_gre_tunnel#target MagicWanGreTunnel#target}
  */
  readonly target?: MagicWanGreTunnelHealthCheckTarget;
  /**
  * The type of healthcheck to run, reply or request. The default value is `reply`.
  * Available values: "reply", "request".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/magic_wan_gre_tunnel#type MagicWanGreTunnel#type}
  */
  readonly type?: string;
}

export function magicWanGreTunnelHealthCheckToTerraform(struct?: MagicWanGreTunnelHealthCheck | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    direction: cdktf.stringToTerraform(struct!.direction),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    rate: cdktf.stringToTerraform(struct!.rate),
    target: magicWanGreTunnelHealthCheckTargetToTerraform(struct!.target),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function magicWanGreTunnelHealthCheckToHclTerraform(struct?: MagicWanGreTunnelHealthCheck | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    direction: {
      value: cdktf.stringToHclTerraform(struct!.direction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    rate: {
      value: cdktf.stringToHclTerraform(struct!.rate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target: {
      value: magicWanGreTunnelHealthCheckTargetToHclTerraform(struct!.target),
      isBlock: true,
      type: "struct",
      storageClassType: "MagicWanGreTunnelHealthCheckTarget",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MagicWanGreTunnelHealthCheckOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MagicWanGreTunnelHealthCheck | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._direction !== undefined) {
      hasAnyValues = true;
      internalValueResult.direction = this._direction;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._rate !== undefined) {
      hasAnyValues = true;
      internalValueResult.rate = this._rate;
    }
    if (this._target?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MagicWanGreTunnelHealthCheck | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._direction = undefined;
      this._enabled = undefined;
      this._rate = undefined;
      this._target.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._direction = value.direction;
      this._enabled = value.enabled;
      this._rate = value.rate;
      this._target.internalValue = value.target;
      this._type = value.type;
    }
  }

  // direction - computed: true, optional: true, required: false
  private _direction?: string; 
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string) {
    this._direction = value;
  }
  public resetDirection() {
    this._direction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction;
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // rate - computed: true, optional: true, required: false
  private _rate?: string; 
  public get rate() {
    return this.getStringAttribute('rate');
  }
  public set rate(value: string) {
    this._rate = value;
  }
  public resetRate() {
    this._rate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateInput() {
    return this._rate;
  }

  // target - computed: true, optional: true, required: false
  private _target = new MagicWanGreTunnelHealthCheckTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: MagicWanGreTunnelHealthCheckTarget) {
    this._target.internalValue = value;
  }
  public resetTarget() {
    this._target.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface MagicWanGreTunnelModifiedGreTunnelHealthCheckTarget {
}

export function magicWanGreTunnelModifiedGreTunnelHealthCheckTargetToTerraform(struct?: MagicWanGreTunnelModifiedGreTunnelHealthCheckTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function magicWanGreTunnelModifiedGreTunnelHealthCheckTargetToHclTerraform(struct?: MagicWanGreTunnelModifiedGreTunnelHealthCheckTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class MagicWanGreTunnelModifiedGreTunnelHealthCheckTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MagicWanGreTunnelModifiedGreTunnelHealthCheckTarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MagicWanGreTunnelModifiedGreTunnelHealthCheckTarget | undefined) {
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
export interface MagicWanGreTunnelModifiedGreTunnelHealthCheck {
}

export function magicWanGreTunnelModifiedGreTunnelHealthCheckToTerraform(struct?: MagicWanGreTunnelModifiedGreTunnelHealthCheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function magicWanGreTunnelModifiedGreTunnelHealthCheckToHclTerraform(struct?: MagicWanGreTunnelModifiedGreTunnelHealthCheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class MagicWanGreTunnelModifiedGreTunnelHealthCheckOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MagicWanGreTunnelModifiedGreTunnelHealthCheck | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MagicWanGreTunnelModifiedGreTunnelHealthCheck | undefined) {
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
  private _target = new MagicWanGreTunnelModifiedGreTunnelHealthCheckTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface MagicWanGreTunnelModifiedGreTunnel {
}

export function magicWanGreTunnelModifiedGreTunnelToTerraform(struct?: MagicWanGreTunnelModifiedGreTunnel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function magicWanGreTunnelModifiedGreTunnelToHclTerraform(struct?: MagicWanGreTunnelModifiedGreTunnel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class MagicWanGreTunnelModifiedGreTunnelOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MagicWanGreTunnelModifiedGreTunnel | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MagicWanGreTunnelModifiedGreTunnel | undefined) {
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
  private _healthCheck = new MagicWanGreTunnelModifiedGreTunnelHealthCheckOutputReference(this, "health_check");
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
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/magic_wan_gre_tunnel cloudflare_magic_wan_gre_tunnel}
*/
export class MagicWanGreTunnel extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_magic_wan_gre_tunnel";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MagicWanGreTunnel resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MagicWanGreTunnel to import
  * @param importFromId The id of the existing MagicWanGreTunnel that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/magic_wan_gre_tunnel#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MagicWanGreTunnel to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_magic_wan_gre_tunnel", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/magic_wan_gre_tunnel cloudflare_magic_wan_gre_tunnel} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MagicWanGreTunnelConfig
  */
  public constructor(scope: Construct, id: string, config: MagicWanGreTunnelConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_magic_wan_gre_tunnel',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '5.2.0',
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
    this._cloudflareGreEndpoint = config.cloudflareGreEndpoint;
    this._customerGreEndpoint = config.customerGreEndpoint;
    this._description = config.description;
    this._greTunnelId = config.greTunnelId;
    this._healthCheck.internalValue = config.healthCheck;
    this._interfaceAddress = config.interfaceAddress;
    this._mtu = config.mtu;
    this._name = config.name;
    this._ttl = config.ttl;
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

  // cloudflare_gre_endpoint - computed: false, optional: true, required: false
  private _cloudflareGreEndpoint?: string; 
  public get cloudflareGreEndpoint() {
    return this.getStringAttribute('cloudflare_gre_endpoint');
  }
  public set cloudflareGreEndpoint(value: string) {
    this._cloudflareGreEndpoint = value;
  }
  public resetCloudflareGreEndpoint() {
    this._cloudflareGreEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudflareGreEndpointInput() {
    return this._cloudflareGreEndpoint;
  }

  // customer_gre_endpoint - computed: false, optional: true, required: false
  private _customerGreEndpoint?: string; 
  public get customerGreEndpoint() {
    return this.getStringAttribute('customer_gre_endpoint');
  }
  public set customerGreEndpoint(value: string) {
    this._customerGreEndpoint = value;
  }
  public resetCustomerGreEndpoint() {
    this._customerGreEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerGreEndpointInput() {
    return this._customerGreEndpoint;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // gre_tunnel - computed: true, optional: false, required: false
  private _greTunnel = new MagicWanGreTunnelGreTunnelOutputReference(this, "gre_tunnel");
  public get greTunnel() {
    return this._greTunnel;
  }

  // gre_tunnel_id - computed: false, optional: true, required: false
  private _greTunnelId?: string; 
  public get greTunnelId() {
    return this.getStringAttribute('gre_tunnel_id');
  }
  public set greTunnelId(value: string) {
    this._greTunnelId = value;
  }
  public resetGreTunnelId() {
    this._greTunnelId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get greTunnelIdInput() {
    return this._greTunnelId;
  }

  // gre_tunnels - computed: true, optional: false, required: false
  private _greTunnels = new MagicWanGreTunnelGreTunnelsList(this, "gre_tunnels", false);
  public get greTunnels() {
    return this._greTunnels;
  }

  // health_check - computed: true, optional: true, required: false
  private _healthCheck = new MagicWanGreTunnelHealthCheckOutputReference(this, "health_check");
  public get healthCheck() {
    return this._healthCheck;
  }
  public putHealthCheck(value: MagicWanGreTunnelHealthCheck) {
    this._healthCheck.internalValue = value;
  }
  public resetHealthCheck() {
    this._healthCheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckInput() {
    return this._healthCheck.internalValue;
  }

  // interface_address - computed: false, optional: true, required: false
  private _interfaceAddress?: string; 
  public get interfaceAddress() {
    return this.getStringAttribute('interface_address');
  }
  public set interfaceAddress(value: string) {
    this._interfaceAddress = value;
  }
  public resetInterfaceAddress() {
    this._interfaceAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceAddressInput() {
    return this._interfaceAddress;
  }

  // modified - computed: true, optional: false, required: false
  public get modified() {
    return this.getBooleanAttribute('modified');
  }

  // modified_gre_tunnel - computed: true, optional: false, required: false
  private _modifiedGreTunnel = new MagicWanGreTunnelModifiedGreTunnelOutputReference(this, "modified_gre_tunnel");
  public get modifiedGreTunnel() {
    return this._modifiedGreTunnel;
  }

  // mtu - computed: true, optional: true, required: false
  private _mtu?: number; 
  public get mtu() {
    return this.getNumberAttribute('mtu');
  }
  public set mtu(value: number) {
    this._mtu = value;
  }
  public resetMtu() {
    this._mtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuInput() {
    return this._mtu;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // ttl - computed: true, optional: true, required: false
  private _ttl?: number; 
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      cloudflare_gre_endpoint: cdktf.stringToTerraform(this._cloudflareGreEndpoint),
      customer_gre_endpoint: cdktf.stringToTerraform(this._customerGreEndpoint),
      description: cdktf.stringToTerraform(this._description),
      gre_tunnel_id: cdktf.stringToTerraform(this._greTunnelId),
      health_check: magicWanGreTunnelHealthCheckToTerraform(this._healthCheck.internalValue),
      interface_address: cdktf.stringToTerraform(this._interfaceAddress),
      mtu: cdktf.numberToTerraform(this._mtu),
      name: cdktf.stringToTerraform(this._name),
      ttl: cdktf.numberToTerraform(this._ttl),
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
      cloudflare_gre_endpoint: {
        value: cdktf.stringToHclTerraform(this._cloudflareGreEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      customer_gre_endpoint: {
        value: cdktf.stringToHclTerraform(this._customerGreEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      health_check: {
        value: magicWanGreTunnelHealthCheckToHclTerraform(this._healthCheck.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MagicWanGreTunnelHealthCheck",
      },
      interface_address: {
        value: cdktf.stringToHclTerraform(this._interfaceAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mtu: {
        value: cdktf.numberToHclTerraform(this._mtu),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ttl: {
        value: cdktf.numberToHclTerraform(this._ttl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
