# `dataCloudflareZeroTrustTunnelCloudflaredRoutes` Submodule <a name="`dataCloudflareZeroTrustTunnelCloudflaredRoutes` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareZeroTrustTunnelCloudflaredRoutes <a name="DataCloudflareZeroTrustTunnelCloudflaredRoutes" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/zero_trust_tunnel_cloudflared_routes cloudflare_zero_trust_tunnel_cloudflared_routes}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_tunnel_cloudflared_routes

dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  account_id: str,
  comment: str = None,
  existed_at: str = None,
  is_deleted: typing.Union[bool, IResolvable] = None,
  max_items: typing.Union[int, float] = None,
  network_subset: str = None,
  network_superset: str = None,
  route_id: str = None,
  tunnel_id: str = None,
  tun_types: typing.List[str] = None,
  virtual_network_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | Cloudflare account ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.Initializer.parameter.comment">comment</a></code> | <code>str</code> | Optional remark describing the route. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.Initializer.parameter.existedAt">existed_at</a></code> | <code>str</code> | If provided, include only resources that were created (and not deleted) before this time. URL encoded. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.Initializer.parameter.isDeleted">is_deleted</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If `true`, only include deleted routes. If `false`, exclude deleted routes. If empty, all routes will be included. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.Initializer.parameter.maxItems">max_items</a></code> | <code>typing.Union[int, float]</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.Initializer.parameter.networkSubset">network_subset</a></code> | <code>str</code> | If set, only list routes that are contained within this IP range. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.Initializer.parameter.networkSuperset">network_superset</a></code> | <code>str</code> | If set, only list routes that contain this IP range. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.Initializer.parameter.routeId">route_id</a></code> | <code>str</code> | UUID of the route. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.Initializer.parameter.tunnelId">tunnel_id</a></code> | <code>str</code> | UUID of the tunnel. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.Initializer.parameter.tunTypes">tun_types</a></code> | <code>typing.List[str]</code> | The types of tunnels to filter by, separated by commas. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.Initializer.parameter.virtualNetworkId">virtual_network_id</a></code> | <code>str</code> | UUID of the virtual network. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.Initializer.parameter.accountId"></a>

- *Type:* str

Cloudflare account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/zero_trust_tunnel_cloudflared_routes#account_id DataCloudflareZeroTrustTunnelCloudflaredRoutes#account_id}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.Initializer.parameter.comment"></a>

- *Type:* str

Optional remark describing the route.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/zero_trust_tunnel_cloudflared_routes#comment DataCloudflareZeroTrustTunnelCloudflaredRoutes#comment}

---

##### `existed_at`<sup>Optional</sup> <a name="existed_at" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.Initializer.parameter.existedAt"></a>

- *Type:* str

If provided, include only resources that were created (and not deleted) before this time. URL encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/zero_trust_tunnel_cloudflared_routes#existed_at DataCloudflareZeroTrustTunnelCloudflaredRoutes#existed_at}

---

##### `is_deleted`<sup>Optional</sup> <a name="is_deleted" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.Initializer.parameter.isDeleted"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If `true`, only include deleted routes. If `false`, exclude deleted routes. If empty, all routes will be included.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/zero_trust_tunnel_cloudflared_routes#is_deleted DataCloudflareZeroTrustTunnelCloudflaredRoutes#is_deleted}

---

##### `max_items`<sup>Optional</sup> <a name="max_items" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.Initializer.parameter.maxItems"></a>

- *Type:* typing.Union[int, float]

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/zero_trust_tunnel_cloudflared_routes#max_items DataCloudflareZeroTrustTunnelCloudflaredRoutes#max_items}

---

##### `network_subset`<sup>Optional</sup> <a name="network_subset" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.Initializer.parameter.networkSubset"></a>

- *Type:* str

If set, only list routes that are contained within this IP range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/zero_trust_tunnel_cloudflared_routes#network_subset DataCloudflareZeroTrustTunnelCloudflaredRoutes#network_subset}

---

##### `network_superset`<sup>Optional</sup> <a name="network_superset" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.Initializer.parameter.networkSuperset"></a>

- *Type:* str

If set, only list routes that contain this IP range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/zero_trust_tunnel_cloudflared_routes#network_superset DataCloudflareZeroTrustTunnelCloudflaredRoutes#network_superset}

---

##### `route_id`<sup>Optional</sup> <a name="route_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.Initializer.parameter.routeId"></a>

- *Type:* str

UUID of the route.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/zero_trust_tunnel_cloudflared_routes#route_id DataCloudflareZeroTrustTunnelCloudflaredRoutes#route_id}

---

##### `tunnel_id`<sup>Optional</sup> <a name="tunnel_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.Initializer.parameter.tunnelId"></a>

- *Type:* str

UUID of the tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/zero_trust_tunnel_cloudflared_routes#tunnel_id DataCloudflareZeroTrustTunnelCloudflaredRoutes#tunnel_id}

---

##### `tun_types`<sup>Optional</sup> <a name="tun_types" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.Initializer.parameter.tunTypes"></a>

- *Type:* typing.List[str]

The types of tunnels to filter by, separated by commas.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/zero_trust_tunnel_cloudflared_routes#tun_types DataCloudflareZeroTrustTunnelCloudflaredRoutes#tun_types}

---

##### `virtual_network_id`<sup>Optional</sup> <a name="virtual_network_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.Initializer.parameter.virtualNetworkId"></a>

- *Type:* str

UUID of the virtual network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/zero_trust_tunnel_cloudflared_routes#virtual_network_id DataCloudflareZeroTrustTunnelCloudflaredRoutes#virtual_network_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.resetComment">reset_comment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.resetExistedAt">reset_existed_at</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.resetIsDeleted">reset_is_deleted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.resetMaxItems">reset_max_items</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.resetNetworkSubset">reset_network_subset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.resetNetworkSuperset">reset_network_superset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.resetRouteId">reset_route_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.resetTunnelId">reset_tunnel_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.resetTunTypes">reset_tun_types</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.resetVirtualNetworkId">reset_virtual_network_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_comment` <a name="reset_comment" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.resetComment"></a>

```python
def reset_comment() -> None
```

##### `reset_existed_at` <a name="reset_existed_at" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.resetExistedAt"></a>

```python
def reset_existed_at() -> None
```

##### `reset_is_deleted` <a name="reset_is_deleted" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.resetIsDeleted"></a>

```python
def reset_is_deleted() -> None
```

##### `reset_max_items` <a name="reset_max_items" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.resetMaxItems"></a>

```python
def reset_max_items() -> None
```

##### `reset_network_subset` <a name="reset_network_subset" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.resetNetworkSubset"></a>

```python
def reset_network_subset() -> None
```

##### `reset_network_superset` <a name="reset_network_superset" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.resetNetworkSuperset"></a>

```python
def reset_network_superset() -> None
```

##### `reset_route_id` <a name="reset_route_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.resetRouteId"></a>

```python
def reset_route_id() -> None
```

##### `reset_tunnel_id` <a name="reset_tunnel_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.resetTunnelId"></a>

```python
def reset_tunnel_id() -> None
```

##### `reset_tun_types` <a name="reset_tun_types" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.resetTunTypes"></a>

```python
def reset_tun_types() -> None
```

##### `reset_virtual_network_id` <a name="reset_virtual_network_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.resetVirtualNetworkId"></a>

```python
def reset_virtual_network_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataCloudflareZeroTrustTunnelCloudflaredRoutes resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.isConstruct"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_tunnel_cloudflared_routes

dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_tunnel_cloudflared_routes

dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_tunnel_cloudflared_routes

dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_tunnel_cloudflared_routes

dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataCloudflareZeroTrustTunnelCloudflaredRoutes resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataCloudflareZeroTrustTunnelCloudflaredRoutes to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataCloudflareZeroTrustTunnelCloudflaredRoutes that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/zero_trust_tunnel_cloudflared_routes#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareZeroTrustTunnelCloudflaredRoutes to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.property.result">result</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultList">DataCloudflareZeroTrustTunnelCloudflaredRoutesResultList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.property.commentInput">comment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.property.existedAtInput">existed_at_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.property.isDeletedInput">is_deleted_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.property.maxItemsInput">max_items_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.property.networkSubsetInput">network_subset_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.property.networkSupersetInput">network_superset_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.property.routeIdInput">route_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.property.tunnelIdInput">tunnel_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.property.tunTypesInput">tun_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.property.virtualNetworkIdInput">virtual_network_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.property.existedAt">existed_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.property.isDeleted">is_deleted</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.property.maxItems">max_items</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.property.networkSubset">network_subset</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.property.networkSuperset">network_superset</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.property.routeId">route_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.property.tunnelId">tunnel_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.property.tunTypes">tun_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.property.virtualNetworkId">virtual_network_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.property.result"></a>

```python
result: DataCloudflareZeroTrustTunnelCloudflaredRoutesResultList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultList">DataCloudflareZeroTrustTunnelCloudflaredRoutesResultList</a>

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `comment_input`<sup>Optional</sup> <a name="comment_input" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.property.commentInput"></a>

```python
comment_input: str
```

- *Type:* str

---

##### `existed_at_input`<sup>Optional</sup> <a name="existed_at_input" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.property.existedAtInput"></a>

```python
existed_at_input: str
```

- *Type:* str

---

##### `is_deleted_input`<sup>Optional</sup> <a name="is_deleted_input" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.property.isDeletedInput"></a>

```python
is_deleted_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `max_items_input`<sup>Optional</sup> <a name="max_items_input" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.property.maxItemsInput"></a>

```python
max_items_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `network_subset_input`<sup>Optional</sup> <a name="network_subset_input" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.property.networkSubsetInput"></a>

```python
network_subset_input: str
```

- *Type:* str

---

##### `network_superset_input`<sup>Optional</sup> <a name="network_superset_input" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.property.networkSupersetInput"></a>

```python
network_superset_input: str
```

- *Type:* str

---

##### `route_id_input`<sup>Optional</sup> <a name="route_id_input" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.property.routeIdInput"></a>

```python
route_id_input: str
```

- *Type:* str

---

##### `tunnel_id_input`<sup>Optional</sup> <a name="tunnel_id_input" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.property.tunnelIdInput"></a>

```python
tunnel_id_input: str
```

- *Type:* str

---

##### `tun_types_input`<sup>Optional</sup> <a name="tun_types_input" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.property.tunTypesInput"></a>

```python
tun_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `virtual_network_id_input`<sup>Optional</sup> <a name="virtual_network_id_input" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.property.virtualNetworkIdInput"></a>

```python
virtual_network_id_input: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `existed_at`<sup>Required</sup> <a name="existed_at" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.property.existedAt"></a>

```python
existed_at: str
```

- *Type:* str

---

##### `is_deleted`<sup>Required</sup> <a name="is_deleted" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.property.isDeleted"></a>

```python
is_deleted: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `max_items`<sup>Required</sup> <a name="max_items" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.property.maxItems"></a>

```python
max_items: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `network_subset`<sup>Required</sup> <a name="network_subset" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.property.networkSubset"></a>

```python
network_subset: str
```

- *Type:* str

---

##### `network_superset`<sup>Required</sup> <a name="network_superset" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.property.networkSuperset"></a>

```python
network_superset: str
```

- *Type:* str

---

##### `route_id`<sup>Required</sup> <a name="route_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.property.routeId"></a>

```python
route_id: str
```

- *Type:* str

---

##### `tunnel_id`<sup>Required</sup> <a name="tunnel_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.property.tunnelId"></a>

```python
tunnel_id: str
```

- *Type:* str

---

##### `tun_types`<sup>Required</sup> <a name="tun_types" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.property.tunTypes"></a>

```python
tun_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `virtual_network_id`<sup>Required</sup> <a name="virtual_network_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.property.virtualNetworkId"></a>

```python
virtual_network_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareZeroTrustTunnelCloudflaredRoutesConfig <a name="DataCloudflareZeroTrustTunnelCloudflaredRoutesConfig" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_tunnel_cloudflared_routes

dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  account_id: str,
  comment: str = None,
  existed_at: str = None,
  is_deleted: typing.Union[bool, IResolvable] = None,
  max_items: typing.Union[int, float] = None,
  network_subset: str = None,
  network_superset: str = None,
  route_id: str = None,
  tunnel_id: str = None,
  tun_types: typing.List[str] = None,
  virtual_network_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesConfig.property.accountId">account_id</a></code> | <code>str</code> | Cloudflare account ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesConfig.property.comment">comment</a></code> | <code>str</code> | Optional remark describing the route. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesConfig.property.existedAt">existed_at</a></code> | <code>str</code> | If provided, include only resources that were created (and not deleted) before this time. URL encoded. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesConfig.property.isDeleted">is_deleted</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If `true`, only include deleted routes. If `false`, exclude deleted routes. If empty, all routes will be included. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesConfig.property.maxItems">max_items</a></code> | <code>typing.Union[int, float]</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesConfig.property.networkSubset">network_subset</a></code> | <code>str</code> | If set, only list routes that are contained within this IP range. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesConfig.property.networkSuperset">network_superset</a></code> | <code>str</code> | If set, only list routes that contain this IP range. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesConfig.property.routeId">route_id</a></code> | <code>str</code> | UUID of the route. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesConfig.property.tunnelId">tunnel_id</a></code> | <code>str</code> | UUID of the tunnel. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesConfig.property.tunTypes">tun_types</a></code> | <code>typing.List[str]</code> | The types of tunnels to filter by, separated by commas. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesConfig.property.virtualNetworkId">virtual_network_id</a></code> | <code>str</code> | UUID of the virtual network. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Cloudflare account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/zero_trust_tunnel_cloudflared_routes#account_id DataCloudflareZeroTrustTunnelCloudflaredRoutes#account_id}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesConfig.property.comment"></a>

```python
comment: str
```

- *Type:* str

Optional remark describing the route.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/zero_trust_tunnel_cloudflared_routes#comment DataCloudflareZeroTrustTunnelCloudflaredRoutes#comment}

---

##### `existed_at`<sup>Optional</sup> <a name="existed_at" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesConfig.property.existedAt"></a>

```python
existed_at: str
```

- *Type:* str

If provided, include only resources that were created (and not deleted) before this time. URL encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/zero_trust_tunnel_cloudflared_routes#existed_at DataCloudflareZeroTrustTunnelCloudflaredRoutes#existed_at}

---

##### `is_deleted`<sup>Optional</sup> <a name="is_deleted" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesConfig.property.isDeleted"></a>

```python
is_deleted: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If `true`, only include deleted routes. If `false`, exclude deleted routes. If empty, all routes will be included.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/zero_trust_tunnel_cloudflared_routes#is_deleted DataCloudflareZeroTrustTunnelCloudflaredRoutes#is_deleted}

---

##### `max_items`<sup>Optional</sup> <a name="max_items" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesConfig.property.maxItems"></a>

```python
max_items: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/zero_trust_tunnel_cloudflared_routes#max_items DataCloudflareZeroTrustTunnelCloudflaredRoutes#max_items}

---

##### `network_subset`<sup>Optional</sup> <a name="network_subset" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesConfig.property.networkSubset"></a>

```python
network_subset: str
```

- *Type:* str

If set, only list routes that are contained within this IP range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/zero_trust_tunnel_cloudflared_routes#network_subset DataCloudflareZeroTrustTunnelCloudflaredRoutes#network_subset}

---

##### `network_superset`<sup>Optional</sup> <a name="network_superset" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesConfig.property.networkSuperset"></a>

```python
network_superset: str
```

- *Type:* str

If set, only list routes that contain this IP range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/zero_trust_tunnel_cloudflared_routes#network_superset DataCloudflareZeroTrustTunnelCloudflaredRoutes#network_superset}

---

##### `route_id`<sup>Optional</sup> <a name="route_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesConfig.property.routeId"></a>

```python
route_id: str
```

- *Type:* str

UUID of the route.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/zero_trust_tunnel_cloudflared_routes#route_id DataCloudflareZeroTrustTunnelCloudflaredRoutes#route_id}

---

##### `tunnel_id`<sup>Optional</sup> <a name="tunnel_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesConfig.property.tunnelId"></a>

```python
tunnel_id: str
```

- *Type:* str

UUID of the tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/zero_trust_tunnel_cloudflared_routes#tunnel_id DataCloudflareZeroTrustTunnelCloudflaredRoutes#tunnel_id}

---

##### `tun_types`<sup>Optional</sup> <a name="tun_types" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesConfig.property.tunTypes"></a>

```python
tun_types: typing.List[str]
```

- *Type:* typing.List[str]

The types of tunnels to filter by, separated by commas.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/zero_trust_tunnel_cloudflared_routes#tun_types DataCloudflareZeroTrustTunnelCloudflaredRoutes#tun_types}

---

##### `virtual_network_id`<sup>Optional</sup> <a name="virtual_network_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesConfig.property.virtualNetworkId"></a>

```python
virtual_network_id: str
```

- *Type:* str

UUID of the virtual network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/zero_trust_tunnel_cloudflared_routes#virtual_network_id DataCloudflareZeroTrustTunnelCloudflaredRoutes#virtual_network_id}

---

### DataCloudflareZeroTrustTunnelCloudflaredRoutesResult <a name="DataCloudflareZeroTrustTunnelCloudflaredRoutesResult" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResult"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResult.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_tunnel_cloudflared_routes

dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResult()
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareZeroTrustTunnelCloudflaredRoutesResultList <a name="DataCloudflareZeroTrustTunnelCloudflaredRoutesResultList" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_tunnel_cloudflared_routes

dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference <a name="DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_tunnel_cloudflared_routes

dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference.property.deletedAt">deleted_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference.property.network">network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference.property.tunnelId">tunnel_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference.property.tunnelName">tunnel_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference.property.tunType">tun_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference.property.virtualNetworkId">virtual_network_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference.property.virtualNetworkName">virtual_network_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResult">DataCloudflareZeroTrustTunnelCloudflaredRoutesResult</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `deleted_at`<sup>Required</sup> <a name="deleted_at" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference.property.deletedAt"></a>

```python
deleted_at: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference.property.network"></a>

```python
network: str
```

- *Type:* str

---

##### `tunnel_id`<sup>Required</sup> <a name="tunnel_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference.property.tunnelId"></a>

```python
tunnel_id: str
```

- *Type:* str

---

##### `tunnel_name`<sup>Required</sup> <a name="tunnel_name" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference.property.tunnelName"></a>

```python
tunnel_name: str
```

- *Type:* str

---

##### `tun_type`<sup>Required</sup> <a name="tun_type" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference.property.tunType"></a>

```python
tun_type: str
```

- *Type:* str

---

##### `virtual_network_id`<sup>Required</sup> <a name="virtual_network_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference.property.virtualNetworkId"></a>

```python
virtual_network_id: str
```

- *Type:* str

---

##### `virtual_network_name`<sup>Required</sup> <a name="virtual_network_name" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference.property.virtualNetworkName"></a>

```python
virtual_network_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareZeroTrustTunnelCloudflaredRoutesResult
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResult">DataCloudflareZeroTrustTunnelCloudflaredRoutesResult</a>

---



