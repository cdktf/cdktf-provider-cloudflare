# `cloudflare_spectrum_application`

Refer to the Terraform Registory for docs: [`cloudflare_spectrum_application`](https://registry.terraform.io/providers/cloudflare/cloudflare/4.17.0/docs/resources/spectrum_application).

# `spectrumApplication` Submodule <a name="`spectrumApplication` Submodule" id="@cdktf/provider-cloudflare.spectrumApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SpectrumApplication <a name="SpectrumApplication" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.17.0/docs/resources/spectrum_application cloudflare_spectrum_application}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import spectrum_application

spectrumApplication.SpectrumApplication(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  dns: SpectrumApplicationDns,
  protocol: str,
  zone_id: str,
  argo_smart_routing: typing.Union[bool, IResolvable] = None,
  edge_ips: SpectrumApplicationEdgeIps = None,
  id: str = None,
  ip_firewall: typing.Union[bool, IResolvable] = None,
  origin_direct: typing.List[str] = None,
  origin_dns: SpectrumApplicationOriginDns = None,
  origin_port: typing.Union[int, float] = None,
  origin_port_range: SpectrumApplicationOriginPortRange = None,
  proxy_protocol: str = None,
  tls: str = None,
  traffic_type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.Initializer.parameter.dns">dns</a></code> | <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationDns">SpectrumApplicationDns</a></code> | dns block. |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.Initializer.parameter.protocol">protocol</a></code> | <code>str</code> | The port configuration at Cloudflare's edge. e.g. `tcp/22`. |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.Initializer.parameter.zoneId">zone_id</a></code> | <code>str</code> | The zone identifier to target for the resource. |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.Initializer.parameter.argoSmartRouting">argo_smart_routing</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enables Argo Smart Routing. |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.Initializer.parameter.edgeIps">edge_ips</a></code> | <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIps">SpectrumApplicationEdgeIps</a></code> | edge_ips block. |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.17.0/docs/resources/spectrum_application#id SpectrumApplication#id}. |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.Initializer.parameter.ipFirewall">ip_firewall</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enables the IP Firewall for this application. |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.Initializer.parameter.originDirect">origin_direct</a></code> | <code>typing.List[str]</code> | A list of destination addresses to the origin. e.g. `tcp://192.0.2.1:22`. |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.Initializer.parameter.originDns">origin_dns</a></code> | <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDns">SpectrumApplicationOriginDns</a></code> | origin_dns block. |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.Initializer.parameter.originPort">origin_port</a></code> | <code>typing.Union[int, float]</code> | Origin port to proxy traffice to. Conflicts with `origin_port_range`. |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.Initializer.parameter.originPortRange">origin_port_range</a></code> | <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginPortRange">SpectrumApplicationOriginPortRange</a></code> | origin_port_range block. |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.Initializer.parameter.proxyProtocol">proxy_protocol</a></code> | <code>str</code> | Enables a proxy protocol to the origin. Available values: `off`, `v1`, `v2`, `simple`. |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.Initializer.parameter.tls">tls</a></code> | <code>str</code> | TLS configuration option for Cloudflare to connect to your origin. Available values: `off`, `flexible`, `full`, `strict`. |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.Initializer.parameter.trafficType">traffic_type</a></code> | <code>str</code> | Sets application type. Available values: `direct`, `http`, `https`. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `dns`<sup>Required</sup> <a name="dns" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.Initializer.parameter.dns"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationDns">SpectrumApplicationDns</a>

dns block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.17.0/docs/resources/spectrum_application#dns SpectrumApplication#dns}

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.Initializer.parameter.protocol"></a>

- *Type:* str

The port configuration at Cloudflare's edge. e.g. `tcp/22`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.17.0/docs/resources/spectrum_application#protocol SpectrumApplication#protocol}

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.Initializer.parameter.zoneId"></a>

- *Type:* str

The zone identifier to target for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.17.0/docs/resources/spectrum_application#zone_id SpectrumApplication#zone_id}

---

##### `argo_smart_routing`<sup>Optional</sup> <a name="argo_smart_routing" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.Initializer.parameter.argoSmartRouting"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enables Argo Smart Routing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.17.0/docs/resources/spectrum_application#argo_smart_routing SpectrumApplication#argo_smart_routing}

---

##### `edge_ips`<sup>Optional</sup> <a name="edge_ips" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.Initializer.parameter.edgeIps"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIps">SpectrumApplicationEdgeIps</a>

edge_ips block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.17.0/docs/resources/spectrum_application#edge_ips SpectrumApplication#edge_ips}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.17.0/docs/resources/spectrum_application#id SpectrumApplication#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ip_firewall`<sup>Optional</sup> <a name="ip_firewall" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.Initializer.parameter.ipFirewall"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enables the IP Firewall for this application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.17.0/docs/resources/spectrum_application#ip_firewall SpectrumApplication#ip_firewall}

---

##### `origin_direct`<sup>Optional</sup> <a name="origin_direct" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.Initializer.parameter.originDirect"></a>

- *Type:* typing.List[str]

A list of destination addresses to the origin. e.g. `tcp://192.0.2.1:22`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.17.0/docs/resources/spectrum_application#origin_direct SpectrumApplication#origin_direct}

---

##### `origin_dns`<sup>Optional</sup> <a name="origin_dns" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.Initializer.parameter.originDns"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDns">SpectrumApplicationOriginDns</a>

origin_dns block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.17.0/docs/resources/spectrum_application#origin_dns SpectrumApplication#origin_dns}

---

##### `origin_port`<sup>Optional</sup> <a name="origin_port" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.Initializer.parameter.originPort"></a>

- *Type:* typing.Union[int, float]

Origin port to proxy traffice to. Conflicts with `origin_port_range`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.17.0/docs/resources/spectrum_application#origin_port SpectrumApplication#origin_port}

---

##### `origin_port_range`<sup>Optional</sup> <a name="origin_port_range" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.Initializer.parameter.originPortRange"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginPortRange">SpectrumApplicationOriginPortRange</a>

origin_port_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.17.0/docs/resources/spectrum_application#origin_port_range SpectrumApplication#origin_port_range}

---

##### `proxy_protocol`<sup>Optional</sup> <a name="proxy_protocol" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.Initializer.parameter.proxyProtocol"></a>

- *Type:* str

Enables a proxy protocol to the origin. Available values: `off`, `v1`, `v2`, `simple`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.17.0/docs/resources/spectrum_application#proxy_protocol SpectrumApplication#proxy_protocol}

---

##### `tls`<sup>Optional</sup> <a name="tls" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.Initializer.parameter.tls"></a>

- *Type:* str

TLS configuration option for Cloudflare to connect to your origin. Available values: `off`, `flexible`, `full`, `strict`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.17.0/docs/resources/spectrum_application#tls SpectrumApplication#tls}

---

##### `traffic_type`<sup>Optional</sup> <a name="traffic_type" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.Initializer.parameter.trafficType"></a>

- *Type:* str

Sets application type. Available values: `direct`, `http`, `https`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.17.0/docs/resources/spectrum_application#traffic_type SpectrumApplication#traffic_type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.putDns">put_dns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.putEdgeIps">put_edge_ips</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.putOriginDns">put_origin_dns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.putOriginPortRange">put_origin_port_range</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.resetArgoSmartRouting">reset_argo_smart_routing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.resetEdgeIps">reset_edge_ips</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.resetIpFirewall">reset_ip_firewall</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.resetOriginDirect">reset_origin_direct</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.resetOriginDns">reset_origin_dns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.resetOriginPort">reset_origin_port</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.resetOriginPortRange">reset_origin_port_range</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.resetProxyProtocol">reset_proxy_protocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.resetTls">reset_tls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.resetTrafficType">reset_traffic_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `import_from` <a name="import_from" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_to` <a name="move_to" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `put_dns` <a name="put_dns" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.putDns"></a>

```python
def put_dns(
  name: str,
  type: str
) -> None
```

###### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.putDns.parameter.name"></a>

- *Type:* str

The name of the DNS record associated with the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.17.0/docs/resources/spectrum_application#name SpectrumApplication#name}

---

###### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.putDns.parameter.type"></a>

- *Type:* str

The type of DNS record associated with the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.17.0/docs/resources/spectrum_application#type SpectrumApplication#type}

---

##### `put_edge_ips` <a name="put_edge_ips" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.putEdgeIps"></a>

```python
def put_edge_ips(
  type: str,
  connectivity: str = None,
  ips: typing.List[str] = None
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.putEdgeIps.parameter.type"></a>

- *Type:* str

The type of edge IP configuration specified. Available values: `dynamic`, `static`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.17.0/docs/resources/spectrum_application#type SpectrumApplication#type}

---

###### `connectivity`<sup>Optional</sup> <a name="connectivity" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.putEdgeIps.parameter.connectivity"></a>

- *Type:* str

The IP versions supported for inbound connections on Spectrum anycast IPs.

Required when `type` is not `static`. Available values: `all`, `ipv4`, `ipv6`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.17.0/docs/resources/spectrum_application#connectivity SpectrumApplication#connectivity}

---

###### `ips`<sup>Optional</sup> <a name="ips" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.putEdgeIps.parameter.ips"></a>

- *Type:* typing.List[str]

The collection of customer owned IPs to broadcast via anycast for this hostname and application.

Requires [Bring Your Own IP](https://developers.cloudflare.com/spectrum/getting-started/byoip/) provisioned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.17.0/docs/resources/spectrum_application#ips SpectrumApplication#ips}

---

##### `put_origin_dns` <a name="put_origin_dns" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.putOriginDns"></a>

```python
def put_origin_dns(
  name: str
) -> None
```

###### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.putOriginDns.parameter.name"></a>

- *Type:* str

Fully qualified domain name of the origin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.17.0/docs/resources/spectrum_application#name SpectrumApplication#name}

---

##### `put_origin_port_range` <a name="put_origin_port_range" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.putOriginPortRange"></a>

```python
def put_origin_port_range(
  end: typing.Union[int, float],
  start: typing.Union[int, float]
) -> None
```

###### `end`<sup>Required</sup> <a name="end" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.putOriginPortRange.parameter.end"></a>

- *Type:* typing.Union[int, float]

Upper bound of the origin port range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.17.0/docs/resources/spectrum_application#end SpectrumApplication#end}

---

###### `start`<sup>Required</sup> <a name="start" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.putOriginPortRange.parameter.start"></a>

- *Type:* typing.Union[int, float]

Lower bound of the origin port range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.17.0/docs/resources/spectrum_application#start SpectrumApplication#start}

---

##### `reset_argo_smart_routing` <a name="reset_argo_smart_routing" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.resetArgoSmartRouting"></a>

```python
def reset_argo_smart_routing() -> None
```

##### `reset_edge_ips` <a name="reset_edge_ips" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.resetEdgeIps"></a>

```python
def reset_edge_ips() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_ip_firewall` <a name="reset_ip_firewall" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.resetIpFirewall"></a>

```python
def reset_ip_firewall() -> None
```

##### `reset_origin_direct` <a name="reset_origin_direct" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.resetOriginDirect"></a>

```python
def reset_origin_direct() -> None
```

##### `reset_origin_dns` <a name="reset_origin_dns" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.resetOriginDns"></a>

```python
def reset_origin_dns() -> None
```

##### `reset_origin_port` <a name="reset_origin_port" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.resetOriginPort"></a>

```python
def reset_origin_port() -> None
```

##### `reset_origin_port_range` <a name="reset_origin_port_range" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.resetOriginPortRange"></a>

```python
def reset_origin_port_range() -> None
```

##### `reset_proxy_protocol` <a name="reset_proxy_protocol" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.resetProxyProtocol"></a>

```python
def reset_proxy_protocol() -> None
```

##### `reset_tls` <a name="reset_tls" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.resetTls"></a>

```python
def reset_tls() -> None
```

##### `reset_traffic_type` <a name="reset_traffic_type" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.resetTrafficType"></a>

```python
def reset_traffic_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a SpectrumApplication resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.isConstruct"></a>

```python
from cdktf_cdktf_provider_cloudflare import spectrum_application

spectrumApplication.SpectrumApplication.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_cloudflare import spectrum_application

spectrumApplication.SpectrumApplication.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_cloudflare import spectrum_application

spectrumApplication.SpectrumApplication.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_cloudflare import spectrum_application

spectrumApplication.SpectrumApplication.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a SpectrumApplication resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SpectrumApplication to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SpectrumApplication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.17.0/docs/resources/spectrum_application#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SpectrumApplication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.property.dns">dns</a></code> | <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference">SpectrumApplicationDnsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.property.edgeIps">edge_ips</a></code> | <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference">SpectrumApplicationEdgeIpsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.property.originDns">origin_dns</a></code> | <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference">SpectrumApplicationOriginDnsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.property.originPortRange">origin_port_range</a></code> | <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginPortRangeOutputReference">SpectrumApplicationOriginPortRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.property.argoSmartRoutingInput">argo_smart_routing_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.property.dnsInput">dns_input</a></code> | <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationDns">SpectrumApplicationDns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.property.edgeIpsInput">edge_ips_input</a></code> | <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIps">SpectrumApplicationEdgeIps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.property.ipFirewallInput">ip_firewall_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.property.originDirectInput">origin_direct_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.property.originDnsInput">origin_dns_input</a></code> | <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDns">SpectrumApplicationOriginDns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.property.originPortInput">origin_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.property.originPortRangeInput">origin_port_range_input</a></code> | <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginPortRange">SpectrumApplicationOriginPortRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.property.protocolInput">protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.property.proxyProtocolInput">proxy_protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.property.tlsInput">tls_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.property.trafficTypeInput">traffic_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.property.zoneIdInput">zone_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.property.argoSmartRouting">argo_smart_routing</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.property.ipFirewall">ip_firewall</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.property.originDirect">origin_direct</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.property.originPort">origin_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.property.proxyProtocol">proxy_protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.property.tls">tls</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.property.trafficType">traffic_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.property.zoneId">zone_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `dns`<sup>Required</sup> <a name="dns" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.property.dns"></a>

```python
dns: SpectrumApplicationDnsOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference">SpectrumApplicationDnsOutputReference</a>

---

##### `edge_ips`<sup>Required</sup> <a name="edge_ips" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.property.edgeIps"></a>

```python
edge_ips: SpectrumApplicationEdgeIpsOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference">SpectrumApplicationEdgeIpsOutputReference</a>

---

##### `origin_dns`<sup>Required</sup> <a name="origin_dns" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.property.originDns"></a>

```python
origin_dns: SpectrumApplicationOriginDnsOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference">SpectrumApplicationOriginDnsOutputReference</a>

---

##### `origin_port_range`<sup>Required</sup> <a name="origin_port_range" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.property.originPortRange"></a>

```python
origin_port_range: SpectrumApplicationOriginPortRangeOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginPortRangeOutputReference">SpectrumApplicationOriginPortRangeOutputReference</a>

---

##### `argo_smart_routing_input`<sup>Optional</sup> <a name="argo_smart_routing_input" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.property.argoSmartRoutingInput"></a>

```python
argo_smart_routing_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `dns_input`<sup>Optional</sup> <a name="dns_input" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.property.dnsInput"></a>

```python
dns_input: SpectrumApplicationDns
```

- *Type:* <a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationDns">SpectrumApplicationDns</a>

---

##### `edge_ips_input`<sup>Optional</sup> <a name="edge_ips_input" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.property.edgeIpsInput"></a>

```python
edge_ips_input: SpectrumApplicationEdgeIps
```

- *Type:* <a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIps">SpectrumApplicationEdgeIps</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `ip_firewall_input`<sup>Optional</sup> <a name="ip_firewall_input" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.property.ipFirewallInput"></a>

```python
ip_firewall_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `origin_direct_input`<sup>Optional</sup> <a name="origin_direct_input" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.property.originDirectInput"></a>

```python
origin_direct_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `origin_dns_input`<sup>Optional</sup> <a name="origin_dns_input" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.property.originDnsInput"></a>

```python
origin_dns_input: SpectrumApplicationOriginDns
```

- *Type:* <a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDns">SpectrumApplicationOriginDns</a>

---

##### `origin_port_input`<sup>Optional</sup> <a name="origin_port_input" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.property.originPortInput"></a>

```python
origin_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `origin_port_range_input`<sup>Optional</sup> <a name="origin_port_range_input" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.property.originPortRangeInput"></a>

```python
origin_port_range_input: SpectrumApplicationOriginPortRange
```

- *Type:* <a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginPortRange">SpectrumApplicationOriginPortRange</a>

---

##### `protocol_input`<sup>Optional</sup> <a name="protocol_input" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.property.protocolInput"></a>

```python
protocol_input: str
```

- *Type:* str

---

##### `proxy_protocol_input`<sup>Optional</sup> <a name="proxy_protocol_input" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.property.proxyProtocolInput"></a>

```python
proxy_protocol_input: str
```

- *Type:* str

---

##### `tls_input`<sup>Optional</sup> <a name="tls_input" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.property.tlsInput"></a>

```python
tls_input: str
```

- *Type:* str

---

##### `traffic_type_input`<sup>Optional</sup> <a name="traffic_type_input" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.property.trafficTypeInput"></a>

```python
traffic_type_input: str
```

- *Type:* str

---

##### `zone_id_input`<sup>Optional</sup> <a name="zone_id_input" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.property.zoneIdInput"></a>

```python
zone_id_input: str
```

- *Type:* str

---

##### `argo_smart_routing`<sup>Required</sup> <a name="argo_smart_routing" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.property.argoSmartRouting"></a>

```python
argo_smart_routing: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ip_firewall`<sup>Required</sup> <a name="ip_firewall" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.property.ipFirewall"></a>

```python
ip_firewall: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `origin_direct`<sup>Required</sup> <a name="origin_direct" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.property.originDirect"></a>

```python
origin_direct: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `origin_port`<sup>Required</sup> <a name="origin_port" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.property.originPort"></a>

```python
origin_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `proxy_protocol`<sup>Required</sup> <a name="proxy_protocol" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.property.proxyProtocol"></a>

```python
proxy_protocol: str
```

- *Type:* str

---

##### `tls`<sup>Required</sup> <a name="tls" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.property.tls"></a>

```python
tls: str
```

- *Type:* str

---

##### `traffic_type`<sup>Required</sup> <a name="traffic_type" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.property.trafficType"></a>

```python
traffic_type: str
```

- *Type:* str

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.property.zoneId"></a>

```python
zone_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SpectrumApplicationConfig <a name="SpectrumApplicationConfig" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import spectrum_application

spectrumApplication.SpectrumApplicationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  dns: SpectrumApplicationDns,
  protocol: str,
  zone_id: str,
  argo_smart_routing: typing.Union[bool, IResolvable] = None,
  edge_ips: SpectrumApplicationEdgeIps = None,
  id: str = None,
  ip_firewall: typing.Union[bool, IResolvable] = None,
  origin_direct: typing.List[str] = None,
  origin_dns: SpectrumApplicationOriginDns = None,
  origin_port: typing.Union[int, float] = None,
  origin_port_range: SpectrumApplicationOriginPortRange = None,
  proxy_protocol: str = None,
  tls: str = None,
  traffic_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationConfig.property.dns">dns</a></code> | <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationDns">SpectrumApplicationDns</a></code> | dns block. |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationConfig.property.protocol">protocol</a></code> | <code>str</code> | The port configuration at Cloudflare's edge. e.g. `tcp/22`. |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationConfig.property.zoneId">zone_id</a></code> | <code>str</code> | The zone identifier to target for the resource. |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationConfig.property.argoSmartRouting">argo_smart_routing</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enables Argo Smart Routing. |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationConfig.property.edgeIps">edge_ips</a></code> | <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIps">SpectrumApplicationEdgeIps</a></code> | edge_ips block. |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.17.0/docs/resources/spectrum_application#id SpectrumApplication#id}. |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationConfig.property.ipFirewall">ip_firewall</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enables the IP Firewall for this application. |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationConfig.property.originDirect">origin_direct</a></code> | <code>typing.List[str]</code> | A list of destination addresses to the origin. e.g. `tcp://192.0.2.1:22`. |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationConfig.property.originDns">origin_dns</a></code> | <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDns">SpectrumApplicationOriginDns</a></code> | origin_dns block. |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationConfig.property.originPort">origin_port</a></code> | <code>typing.Union[int, float]</code> | Origin port to proxy traffice to. Conflicts with `origin_port_range`. |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationConfig.property.originPortRange">origin_port_range</a></code> | <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginPortRange">SpectrumApplicationOriginPortRange</a></code> | origin_port_range block. |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationConfig.property.proxyProtocol">proxy_protocol</a></code> | <code>str</code> | Enables a proxy protocol to the origin. Available values: `off`, `v1`, `v2`, `simple`. |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationConfig.property.tls">tls</a></code> | <code>str</code> | TLS configuration option for Cloudflare to connect to your origin. Available values: `off`, `flexible`, `full`, `strict`. |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationConfig.property.trafficType">traffic_type</a></code> | <code>str</code> | Sets application type. Available values: `direct`, `http`, `https`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `dns`<sup>Required</sup> <a name="dns" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationConfig.property.dns"></a>

```python
dns: SpectrumApplicationDns
```

- *Type:* <a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationDns">SpectrumApplicationDns</a>

dns block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.17.0/docs/resources/spectrum_application#dns SpectrumApplication#dns}

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationConfig.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

The port configuration at Cloudflare's edge. e.g. `tcp/22`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.17.0/docs/resources/spectrum_application#protocol SpectrumApplication#protocol}

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationConfig.property.zoneId"></a>

```python
zone_id: str
```

- *Type:* str

The zone identifier to target for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.17.0/docs/resources/spectrum_application#zone_id SpectrumApplication#zone_id}

---

##### `argo_smart_routing`<sup>Optional</sup> <a name="argo_smart_routing" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationConfig.property.argoSmartRouting"></a>

```python
argo_smart_routing: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enables Argo Smart Routing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.17.0/docs/resources/spectrum_application#argo_smart_routing SpectrumApplication#argo_smart_routing}

---

##### `edge_ips`<sup>Optional</sup> <a name="edge_ips" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationConfig.property.edgeIps"></a>

```python
edge_ips: SpectrumApplicationEdgeIps
```

- *Type:* <a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIps">SpectrumApplicationEdgeIps</a>

edge_ips block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.17.0/docs/resources/spectrum_application#edge_ips SpectrumApplication#edge_ips}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.17.0/docs/resources/spectrum_application#id SpectrumApplication#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ip_firewall`<sup>Optional</sup> <a name="ip_firewall" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationConfig.property.ipFirewall"></a>

```python
ip_firewall: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enables the IP Firewall for this application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.17.0/docs/resources/spectrum_application#ip_firewall SpectrumApplication#ip_firewall}

---

##### `origin_direct`<sup>Optional</sup> <a name="origin_direct" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationConfig.property.originDirect"></a>

```python
origin_direct: typing.List[str]
```

- *Type:* typing.List[str]

A list of destination addresses to the origin. e.g. `tcp://192.0.2.1:22`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.17.0/docs/resources/spectrum_application#origin_direct SpectrumApplication#origin_direct}

---

##### `origin_dns`<sup>Optional</sup> <a name="origin_dns" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationConfig.property.originDns"></a>

```python
origin_dns: SpectrumApplicationOriginDns
```

- *Type:* <a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDns">SpectrumApplicationOriginDns</a>

origin_dns block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.17.0/docs/resources/spectrum_application#origin_dns SpectrumApplication#origin_dns}

---

##### `origin_port`<sup>Optional</sup> <a name="origin_port" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationConfig.property.originPort"></a>

```python
origin_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Origin port to proxy traffice to. Conflicts with `origin_port_range`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.17.0/docs/resources/spectrum_application#origin_port SpectrumApplication#origin_port}

---

##### `origin_port_range`<sup>Optional</sup> <a name="origin_port_range" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationConfig.property.originPortRange"></a>

```python
origin_port_range: SpectrumApplicationOriginPortRange
```

- *Type:* <a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginPortRange">SpectrumApplicationOriginPortRange</a>

origin_port_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.17.0/docs/resources/spectrum_application#origin_port_range SpectrumApplication#origin_port_range}

---

##### `proxy_protocol`<sup>Optional</sup> <a name="proxy_protocol" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationConfig.property.proxyProtocol"></a>

```python
proxy_protocol: str
```

- *Type:* str

Enables a proxy protocol to the origin. Available values: `off`, `v1`, `v2`, `simple`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.17.0/docs/resources/spectrum_application#proxy_protocol SpectrumApplication#proxy_protocol}

---

##### `tls`<sup>Optional</sup> <a name="tls" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationConfig.property.tls"></a>

```python
tls: str
```

- *Type:* str

TLS configuration option for Cloudflare to connect to your origin. Available values: `off`, `flexible`, `full`, `strict`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.17.0/docs/resources/spectrum_application#tls SpectrumApplication#tls}

---

##### `traffic_type`<sup>Optional</sup> <a name="traffic_type" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationConfig.property.trafficType"></a>

```python
traffic_type: str
```

- *Type:* str

Sets application type. Available values: `direct`, `http`, `https`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.17.0/docs/resources/spectrum_application#traffic_type SpectrumApplication#traffic_type}

---

### SpectrumApplicationDns <a name="SpectrumApplicationDns" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationDns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationDns.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import spectrum_application

spectrumApplication.SpectrumApplicationDns(
  name: str,
  type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationDns.property.name">name</a></code> | <code>str</code> | The name of the DNS record associated with the application. |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationDns.property.type">type</a></code> | <code>str</code> | The type of DNS record associated with the application. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationDns.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the DNS record associated with the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.17.0/docs/resources/spectrum_application#name SpectrumApplication#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationDns.property.type"></a>

```python
type: str
```

- *Type:* str

The type of DNS record associated with the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.17.0/docs/resources/spectrum_application#type SpectrumApplication#type}

---

### SpectrumApplicationEdgeIps <a name="SpectrumApplicationEdgeIps" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIps"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIps.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import spectrum_application

spectrumApplication.SpectrumApplicationEdgeIps(
  type: str,
  connectivity: str = None,
  ips: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIps.property.type">type</a></code> | <code>str</code> | The type of edge IP configuration specified. Available values: `dynamic`, `static`. |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIps.property.connectivity">connectivity</a></code> | <code>str</code> | The IP versions supported for inbound connections on Spectrum anycast IPs. |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIps.property.ips">ips</a></code> | <code>typing.List[str]</code> | The collection of customer owned IPs to broadcast via anycast for this hostname and application. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIps.property.type"></a>

```python
type: str
```

- *Type:* str

The type of edge IP configuration specified. Available values: `dynamic`, `static`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.17.0/docs/resources/spectrum_application#type SpectrumApplication#type}

---

##### `connectivity`<sup>Optional</sup> <a name="connectivity" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIps.property.connectivity"></a>

```python
connectivity: str
```

- *Type:* str

The IP versions supported for inbound connections on Spectrum anycast IPs.

Required when `type` is not `static`. Available values: `all`, `ipv4`, `ipv6`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.17.0/docs/resources/spectrum_application#connectivity SpectrumApplication#connectivity}

---

##### `ips`<sup>Optional</sup> <a name="ips" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIps.property.ips"></a>

```python
ips: typing.List[str]
```

- *Type:* typing.List[str]

The collection of customer owned IPs to broadcast via anycast for this hostname and application.

Requires [Bring Your Own IP](https://developers.cloudflare.com/spectrum/getting-started/byoip/) provisioned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.17.0/docs/resources/spectrum_application#ips SpectrumApplication#ips}

---

### SpectrumApplicationOriginDns <a name="SpectrumApplicationOriginDns" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDns.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import spectrum_application

spectrumApplication.SpectrumApplicationOriginDns(
  name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDns.property.name">name</a></code> | <code>str</code> | Fully qualified domain name of the origin. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDns.property.name"></a>

```python
name: str
```

- *Type:* str

Fully qualified domain name of the origin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.17.0/docs/resources/spectrum_application#name SpectrumApplication#name}

---

### SpectrumApplicationOriginPortRange <a name="SpectrumApplicationOriginPortRange" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginPortRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginPortRange.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import spectrum_application

spectrumApplication.SpectrumApplicationOriginPortRange(
  end: typing.Union[int, float],
  start: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginPortRange.property.end">end</a></code> | <code>typing.Union[int, float]</code> | Upper bound of the origin port range. |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginPortRange.property.start">start</a></code> | <code>typing.Union[int, float]</code> | Lower bound of the origin port range. |

---

##### `end`<sup>Required</sup> <a name="end" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginPortRange.property.end"></a>

```python
end: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Upper bound of the origin port range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.17.0/docs/resources/spectrum_application#end SpectrumApplication#end}

---

##### `start`<sup>Required</sup> <a name="start" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginPortRange.property.start"></a>

```python
start: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Lower bound of the origin port range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.17.0/docs/resources/spectrum_application#start SpectrumApplication#start}

---

## Classes <a name="Classes" id="Classes"></a>

### SpectrumApplicationDnsOutputReference <a name="SpectrumApplicationDnsOutputReference" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import spectrum_application

spectrumApplication.SpectrumApplicationDnsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationDns">SpectrumApplicationDns</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference.property.internalValue"></a>

```python
internal_value: SpectrumApplicationDns
```

- *Type:* <a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationDns">SpectrumApplicationDns</a>

---


### SpectrumApplicationEdgeIpsOutputReference <a name="SpectrumApplicationEdgeIpsOutputReference" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import spectrum_application

spectrumApplication.SpectrumApplicationEdgeIpsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.resetConnectivity">reset_connectivity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.resetIps">reset_ips</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_connectivity` <a name="reset_connectivity" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.resetConnectivity"></a>

```python
def reset_connectivity() -> None
```

##### `reset_ips` <a name="reset_ips" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.resetIps"></a>

```python
def reset_ips() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.property.connectivityInput">connectivity_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.property.ipsInput">ips_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.property.connectivity">connectivity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.property.ips">ips</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIps">SpectrumApplicationEdgeIps</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `connectivity_input`<sup>Optional</sup> <a name="connectivity_input" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.property.connectivityInput"></a>

```python
connectivity_input: str
```

- *Type:* str

---

##### `ips_input`<sup>Optional</sup> <a name="ips_input" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.property.ipsInput"></a>

```python
ips_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `connectivity`<sup>Required</sup> <a name="connectivity" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.property.connectivity"></a>

```python
connectivity: str
```

- *Type:* str

---

##### `ips`<sup>Required</sup> <a name="ips" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.property.ips"></a>

```python
ips: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.property.internalValue"></a>

```python
internal_value: SpectrumApplicationEdgeIps
```

- *Type:* <a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIps">SpectrumApplicationEdgeIps</a>

---


### SpectrumApplicationOriginDnsOutputReference <a name="SpectrumApplicationOriginDnsOutputReference" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import spectrum_application

spectrumApplication.SpectrumApplicationOriginDnsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDns">SpectrumApplicationOriginDns</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.property.internalValue"></a>

```python
internal_value: SpectrumApplicationOriginDns
```

- *Type:* <a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDns">SpectrumApplicationOriginDns</a>

---


### SpectrumApplicationOriginPortRangeOutputReference <a name="SpectrumApplicationOriginPortRangeOutputReference" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginPortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginPortRangeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import spectrum_application

spectrumApplication.SpectrumApplicationOriginPortRangeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginPortRangeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginPortRangeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginPortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginPortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginPortRangeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginPortRangeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginPortRangeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginPortRangeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginPortRangeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginPortRangeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginPortRangeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginPortRangeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginPortRangeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginPortRangeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginPortRangeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginPortRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginPortRangeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginPortRangeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginPortRangeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginPortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginPortRangeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginPortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginPortRangeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginPortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginPortRangeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginPortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginPortRangeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginPortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginPortRangeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginPortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginPortRangeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginPortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginPortRangeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginPortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginPortRangeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginPortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginPortRangeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginPortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginPortRangeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginPortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginPortRangeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginPortRangeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginPortRangeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginPortRangeOutputReference.property.endInput">end_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginPortRangeOutputReference.property.startInput">start_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginPortRangeOutputReference.property.end">end</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginPortRangeOutputReference.property.start">start</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginPortRangeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginPortRange">SpectrumApplicationOriginPortRange</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginPortRangeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginPortRangeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `end_input`<sup>Optional</sup> <a name="end_input" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginPortRangeOutputReference.property.endInput"></a>

```python
end_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `start_input`<sup>Optional</sup> <a name="start_input" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginPortRangeOutputReference.property.startInput"></a>

```python
start_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `end`<sup>Required</sup> <a name="end" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginPortRangeOutputReference.property.end"></a>

```python
end: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `start`<sup>Required</sup> <a name="start" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginPortRangeOutputReference.property.start"></a>

```python
start: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginPortRangeOutputReference.property.internalValue"></a>

```python
internal_value: SpectrumApplicationOriginPortRange
```

- *Type:* <a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginPortRange">SpectrumApplicationOriginPortRange</a>

---



