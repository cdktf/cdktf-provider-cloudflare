# `dnsFirewall` Submodule <a name="`dnsFirewall` Submodule" id="@cdktf/provider-cloudflare.dnsFirewall"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DnsFirewall <a name="DnsFirewall" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/dns_firewall cloudflare_dns_firewall}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import dns_firewall

dnsFirewall.DnsFirewall(
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
  name: str,
  upstream_ips: typing.List[str],
  attack_mitigation: DnsFirewallAttackMitigation = None,
  deprecate_any_requests: typing.Union[bool, IResolvable] = None,
  ecs_fallback: typing.Union[bool, IResolvable] = None,
  maximum_cache_ttl: typing.Union[int, float] = None,
  minimum_cache_ttl: typing.Union[int, float] = None,
  negative_cache_ttl: typing.Union[int, float] = None,
  ratelimit: typing.Union[int, float] = None,
  retries: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.Initializer.parameter.name">name</a></code> | <code>str</code> | DNS Firewall cluster name. |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.Initializer.parameter.upstreamIps">upstream_ips</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/dns_firewall#upstream_ips DnsFirewall#upstream_ips}. |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.Initializer.parameter.attackMitigation">attack_mitigation</a></code> | <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigation">DnsFirewallAttackMitigation</a></code> | Attack mitigation settings. |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.Initializer.parameter.deprecateAnyRequests">deprecate_any_requests</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to refuse to answer queries for the ANY type. |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.Initializer.parameter.ecsFallback">ecs_fallback</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to forward client IP (resolver) subnet if no EDNS Client Subnet is sent. |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.Initializer.parameter.maximumCacheTtl">maximum_cache_ttl</a></code> | <code>typing.Union[int, float]</code> | Maximum DNS cache TTL This setting sets an upper bound on DNS TTLs for purposes of caching between DNS Firewall and the upstream servers. |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.Initializer.parameter.minimumCacheTtl">minimum_cache_ttl</a></code> | <code>typing.Union[int, float]</code> | Minimum DNS cache TTL This setting sets a lower bound on DNS TTLs for purposes of caching between DNS Firewall and the upstream servers. |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.Initializer.parameter.negativeCacheTtl">negative_cache_ttl</a></code> | <code>typing.Union[int, float]</code> | Negative DNS cache TTL This setting controls how long DNS Firewall should cache negative responses (e.g., NXDOMAIN) from the upstream servers. |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.Initializer.parameter.ratelimit">ratelimit</a></code> | <code>typing.Union[int, float]</code> | Ratelimit in queries per second per datacenter (applies to DNS queries sent to the upstream nameservers configured on the cluster). |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.Initializer.parameter.retries">retries</a></code> | <code>typing.Union[int, float]</code> | Number of retries for fetching DNS responses from upstream nameservers (not counting the initial attempt). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.Initializer.parameter.accountId"></a>

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/dns_firewall#account_id DnsFirewall#account_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.Initializer.parameter.name"></a>

- *Type:* str

DNS Firewall cluster name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/dns_firewall#name DnsFirewall#name}

---

##### `upstream_ips`<sup>Required</sup> <a name="upstream_ips" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.Initializer.parameter.upstreamIps"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/dns_firewall#upstream_ips DnsFirewall#upstream_ips}.

---

##### `attack_mitigation`<sup>Optional</sup> <a name="attack_mitigation" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.Initializer.parameter.attackMitigation"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigation">DnsFirewallAttackMitigation</a>

Attack mitigation settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/dns_firewall#attack_mitigation DnsFirewall#attack_mitigation}

---

##### `deprecate_any_requests`<sup>Optional</sup> <a name="deprecate_any_requests" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.Initializer.parameter.deprecateAnyRequests"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to refuse to answer queries for the ANY type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/dns_firewall#deprecate_any_requests DnsFirewall#deprecate_any_requests}

---

##### `ecs_fallback`<sup>Optional</sup> <a name="ecs_fallback" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.Initializer.parameter.ecsFallback"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to forward client IP (resolver) subnet if no EDNS Client Subnet is sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/dns_firewall#ecs_fallback DnsFirewall#ecs_fallback}

---

##### `maximum_cache_ttl`<sup>Optional</sup> <a name="maximum_cache_ttl" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.Initializer.parameter.maximumCacheTtl"></a>

- *Type:* typing.Union[int, float]

Maximum DNS cache TTL This setting sets an upper bound on DNS TTLs for purposes of caching between DNS Firewall and the upstream servers.

Higher TTLs will be decreased to the maximum defined here for caching purposes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/dns_firewall#maximum_cache_ttl DnsFirewall#maximum_cache_ttl}

---

##### `minimum_cache_ttl`<sup>Optional</sup> <a name="minimum_cache_ttl" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.Initializer.parameter.minimumCacheTtl"></a>

- *Type:* typing.Union[int, float]

Minimum DNS cache TTL This setting sets a lower bound on DNS TTLs for purposes of caching between DNS Firewall and the upstream servers.

Lower TTLs will be increased to the minimum defined here for caching purposes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/dns_firewall#minimum_cache_ttl DnsFirewall#minimum_cache_ttl}

---

##### `negative_cache_ttl`<sup>Optional</sup> <a name="negative_cache_ttl" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.Initializer.parameter.negativeCacheTtl"></a>

- *Type:* typing.Union[int, float]

Negative DNS cache TTL This setting controls how long DNS Firewall should cache negative responses (e.g., NXDOMAIN) from the upstream servers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/dns_firewall#negative_cache_ttl DnsFirewall#negative_cache_ttl}

---

##### `ratelimit`<sup>Optional</sup> <a name="ratelimit" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.Initializer.parameter.ratelimit"></a>

- *Type:* typing.Union[int, float]

Ratelimit in queries per second per datacenter (applies to DNS queries sent to the upstream nameservers configured on the cluster).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/dns_firewall#ratelimit DnsFirewall#ratelimit}

---

##### `retries`<sup>Optional</sup> <a name="retries" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.Initializer.parameter.retries"></a>

- *Type:* typing.Union[int, float]

Number of retries for fetching DNS responses from upstream nameservers (not counting the initial attempt).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/dns_firewall#retries DnsFirewall#retries}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.putAttackMitigation">put_attack_mitigation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.resetAttackMitigation">reset_attack_mitigation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.resetDeprecateAnyRequests">reset_deprecate_any_requests</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.resetEcsFallback">reset_ecs_fallback</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.resetMaximumCacheTtl">reset_maximum_cache_ttl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.resetMinimumCacheTtl">reset_minimum_cache_ttl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.resetNegativeCacheTtl">reset_negative_cache_ttl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.resetRatelimit">reset_ratelimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.resetRetries">reset_retries</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_attack_mitigation` <a name="put_attack_mitigation" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.putAttackMitigation"></a>

```python
def put_attack_mitigation(
  enabled: typing.Union[bool, IResolvable] = None,
  only_when_upstream_unhealthy: typing.Union[bool, IResolvable] = None
) -> None
```

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.putAttackMitigation.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

When enabled, automatically mitigate random-prefix attacks to protect upstream DNS servers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/dns_firewall#enabled DnsFirewall#enabled}

---

###### `only_when_upstream_unhealthy`<sup>Optional</sup> <a name="only_when_upstream_unhealthy" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.putAttackMitigation.parameter.onlyWhenUpstreamUnhealthy"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Only mitigate attacks when upstream servers seem unhealthy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/dns_firewall#only_when_upstream_unhealthy DnsFirewall#only_when_upstream_unhealthy}

---

##### `reset_attack_mitigation` <a name="reset_attack_mitigation" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.resetAttackMitigation"></a>

```python
def reset_attack_mitigation() -> None
```

##### `reset_deprecate_any_requests` <a name="reset_deprecate_any_requests" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.resetDeprecateAnyRequests"></a>

```python
def reset_deprecate_any_requests() -> None
```

##### `reset_ecs_fallback` <a name="reset_ecs_fallback" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.resetEcsFallback"></a>

```python
def reset_ecs_fallback() -> None
```

##### `reset_maximum_cache_ttl` <a name="reset_maximum_cache_ttl" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.resetMaximumCacheTtl"></a>

```python
def reset_maximum_cache_ttl() -> None
```

##### `reset_minimum_cache_ttl` <a name="reset_minimum_cache_ttl" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.resetMinimumCacheTtl"></a>

```python
def reset_minimum_cache_ttl() -> None
```

##### `reset_negative_cache_ttl` <a name="reset_negative_cache_ttl" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.resetNegativeCacheTtl"></a>

```python
def reset_negative_cache_ttl() -> None
```

##### `reset_ratelimit` <a name="reset_ratelimit" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.resetRatelimit"></a>

```python
def reset_ratelimit() -> None
```

##### `reset_retries` <a name="reset_retries" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.resetRetries"></a>

```python
def reset_retries() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DnsFirewall resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.isConstruct"></a>

```python
from cdktf_cdktf_provider_cloudflare import dns_firewall

dnsFirewall.DnsFirewall.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_cloudflare import dns_firewall

dnsFirewall.DnsFirewall.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_cloudflare import dns_firewall

dnsFirewall.DnsFirewall.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_cloudflare import dns_firewall

dnsFirewall.DnsFirewall.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DnsFirewall resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DnsFirewall to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DnsFirewall that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/dns_firewall#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DnsFirewall to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.attackMitigation">attack_mitigation</a></code> | <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference">DnsFirewallAttackMitigationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.dnsFirewallIps">dns_firewall_ips</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.modifiedOn">modified_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.attackMitigationInput">attack_mitigation_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigation">DnsFirewallAttackMitigation</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.deprecateAnyRequestsInput">deprecate_any_requests_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.ecsFallbackInput">ecs_fallback_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.maximumCacheTtlInput">maximum_cache_ttl_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.minimumCacheTtlInput">minimum_cache_ttl_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.negativeCacheTtlInput">negative_cache_ttl_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.ratelimitInput">ratelimit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.retriesInput">retries_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.upstreamIpsInput">upstream_ips_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.deprecateAnyRequests">deprecate_any_requests</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.ecsFallback">ecs_fallback</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.maximumCacheTtl">maximum_cache_ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.minimumCacheTtl">minimum_cache_ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.negativeCacheTtl">negative_cache_ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.ratelimit">ratelimit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.retries">retries</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.upstreamIps">upstream_ips</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `attack_mitigation`<sup>Required</sup> <a name="attack_mitigation" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.attackMitigation"></a>

```python
attack_mitigation: DnsFirewallAttackMitigationOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference">DnsFirewallAttackMitigationOutputReference</a>

---

##### `dns_firewall_ips`<sup>Required</sup> <a name="dns_firewall_ips" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.dnsFirewallIps"></a>

```python
dns_firewall_ips: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `modified_on`<sup>Required</sup> <a name="modified_on" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.modifiedOn"></a>

```python
modified_on: str
```

- *Type:* str

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `attack_mitigation_input`<sup>Optional</sup> <a name="attack_mitigation_input" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.attackMitigationInput"></a>

```python
attack_mitigation_input: typing.Union[IResolvable, DnsFirewallAttackMitigation]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigation">DnsFirewallAttackMitigation</a>]

---

##### `deprecate_any_requests_input`<sup>Optional</sup> <a name="deprecate_any_requests_input" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.deprecateAnyRequestsInput"></a>

```python
deprecate_any_requests_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ecs_fallback_input`<sup>Optional</sup> <a name="ecs_fallback_input" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.ecsFallbackInput"></a>

```python
ecs_fallback_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `maximum_cache_ttl_input`<sup>Optional</sup> <a name="maximum_cache_ttl_input" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.maximumCacheTtlInput"></a>

```python
maximum_cache_ttl_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minimum_cache_ttl_input`<sup>Optional</sup> <a name="minimum_cache_ttl_input" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.minimumCacheTtlInput"></a>

```python
minimum_cache_ttl_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `negative_cache_ttl_input`<sup>Optional</sup> <a name="negative_cache_ttl_input" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.negativeCacheTtlInput"></a>

```python
negative_cache_ttl_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ratelimit_input`<sup>Optional</sup> <a name="ratelimit_input" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.ratelimitInput"></a>

```python
ratelimit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `retries_input`<sup>Optional</sup> <a name="retries_input" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.retriesInput"></a>

```python
retries_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `upstream_ips_input`<sup>Optional</sup> <a name="upstream_ips_input" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.upstreamIpsInput"></a>

```python
upstream_ips_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `deprecate_any_requests`<sup>Required</sup> <a name="deprecate_any_requests" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.deprecateAnyRequests"></a>

```python
deprecate_any_requests: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ecs_fallback`<sup>Required</sup> <a name="ecs_fallback" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.ecsFallback"></a>

```python
ecs_fallback: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `maximum_cache_ttl`<sup>Required</sup> <a name="maximum_cache_ttl" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.maximumCacheTtl"></a>

```python
maximum_cache_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minimum_cache_ttl`<sup>Required</sup> <a name="minimum_cache_ttl" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.minimumCacheTtl"></a>

```python
minimum_cache_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `negative_cache_ttl`<sup>Required</sup> <a name="negative_cache_ttl" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.negativeCacheTtl"></a>

```python
negative_cache_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ratelimit`<sup>Required</sup> <a name="ratelimit" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.ratelimit"></a>

```python
ratelimit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `retries`<sup>Required</sup> <a name="retries" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.retries"></a>

```python
retries: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `upstream_ips`<sup>Required</sup> <a name="upstream_ips" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.upstreamIps"></a>

```python
upstream_ips: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DnsFirewallAttackMitigation <a name="DnsFirewallAttackMitigation" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigation.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import dns_firewall

dnsFirewall.DnsFirewallAttackMitigation(
  enabled: typing.Union[bool, IResolvable] = None,
  only_when_upstream_unhealthy: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigation.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When enabled, automatically mitigate random-prefix attacks to protect upstream DNS servers. |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigation.property.onlyWhenUpstreamUnhealthy">only_when_upstream_unhealthy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Only mitigate attacks when upstream servers seem unhealthy. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigation.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

When enabled, automatically mitigate random-prefix attacks to protect upstream DNS servers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/dns_firewall#enabled DnsFirewall#enabled}

---

##### `only_when_upstream_unhealthy`<sup>Optional</sup> <a name="only_when_upstream_unhealthy" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigation.property.onlyWhenUpstreamUnhealthy"></a>

```python
only_when_upstream_unhealthy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Only mitigate attacks when upstream servers seem unhealthy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/dns_firewall#only_when_upstream_unhealthy DnsFirewall#only_when_upstream_unhealthy}

---

### DnsFirewallConfig <a name="DnsFirewallConfig" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import dns_firewall

dnsFirewall.DnsFirewallConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  account_id: str,
  name: str,
  upstream_ips: typing.List[str],
  attack_mitigation: DnsFirewallAttackMitigation = None,
  deprecate_any_requests: typing.Union[bool, IResolvable] = None,
  ecs_fallback: typing.Union[bool, IResolvable] = None,
  maximum_cache_ttl: typing.Union[int, float] = None,
  minimum_cache_ttl: typing.Union[int, float] = None,
  negative_cache_ttl: typing.Union[int, float] = None,
  ratelimit: typing.Union[int, float] = None,
  retries: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.accountId">account_id</a></code> | <code>str</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.name">name</a></code> | <code>str</code> | DNS Firewall cluster name. |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.upstreamIps">upstream_ips</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/dns_firewall#upstream_ips DnsFirewall#upstream_ips}. |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.attackMitigation">attack_mitigation</a></code> | <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigation">DnsFirewallAttackMitigation</a></code> | Attack mitigation settings. |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.deprecateAnyRequests">deprecate_any_requests</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to refuse to answer queries for the ANY type. |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.ecsFallback">ecs_fallback</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to forward client IP (resolver) subnet if no EDNS Client Subnet is sent. |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.maximumCacheTtl">maximum_cache_ttl</a></code> | <code>typing.Union[int, float]</code> | Maximum DNS cache TTL This setting sets an upper bound on DNS TTLs for purposes of caching between DNS Firewall and the upstream servers. |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.minimumCacheTtl">minimum_cache_ttl</a></code> | <code>typing.Union[int, float]</code> | Minimum DNS cache TTL This setting sets a lower bound on DNS TTLs for purposes of caching between DNS Firewall and the upstream servers. |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.negativeCacheTtl">negative_cache_ttl</a></code> | <code>typing.Union[int, float]</code> | Negative DNS cache TTL This setting controls how long DNS Firewall should cache negative responses (e.g., NXDOMAIN) from the upstream servers. |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.ratelimit">ratelimit</a></code> | <code>typing.Union[int, float]</code> | Ratelimit in queries per second per datacenter (applies to DNS queries sent to the upstream nameservers configured on the cluster). |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.retries">retries</a></code> | <code>typing.Union[int, float]</code> | Number of retries for fetching DNS responses from upstream nameservers (not counting the initial attempt). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/dns_firewall#account_id DnsFirewall#account_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.name"></a>

```python
name: str
```

- *Type:* str

DNS Firewall cluster name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/dns_firewall#name DnsFirewall#name}

---

##### `upstream_ips`<sup>Required</sup> <a name="upstream_ips" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.upstreamIps"></a>

```python
upstream_ips: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/dns_firewall#upstream_ips DnsFirewall#upstream_ips}.

---

##### `attack_mitigation`<sup>Optional</sup> <a name="attack_mitigation" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.attackMitigation"></a>

```python
attack_mitigation: DnsFirewallAttackMitigation
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigation">DnsFirewallAttackMitigation</a>

Attack mitigation settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/dns_firewall#attack_mitigation DnsFirewall#attack_mitigation}

---

##### `deprecate_any_requests`<sup>Optional</sup> <a name="deprecate_any_requests" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.deprecateAnyRequests"></a>

```python
deprecate_any_requests: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to refuse to answer queries for the ANY type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/dns_firewall#deprecate_any_requests DnsFirewall#deprecate_any_requests}

---

##### `ecs_fallback`<sup>Optional</sup> <a name="ecs_fallback" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.ecsFallback"></a>

```python
ecs_fallback: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to forward client IP (resolver) subnet if no EDNS Client Subnet is sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/dns_firewall#ecs_fallback DnsFirewall#ecs_fallback}

---

##### `maximum_cache_ttl`<sup>Optional</sup> <a name="maximum_cache_ttl" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.maximumCacheTtl"></a>

```python
maximum_cache_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum DNS cache TTL This setting sets an upper bound on DNS TTLs for purposes of caching between DNS Firewall and the upstream servers.

Higher TTLs will be decreased to the maximum defined here for caching purposes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/dns_firewall#maximum_cache_ttl DnsFirewall#maximum_cache_ttl}

---

##### `minimum_cache_ttl`<sup>Optional</sup> <a name="minimum_cache_ttl" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.minimumCacheTtl"></a>

```python
minimum_cache_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Minimum DNS cache TTL This setting sets a lower bound on DNS TTLs for purposes of caching between DNS Firewall and the upstream servers.

Lower TTLs will be increased to the minimum defined here for caching purposes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/dns_firewall#minimum_cache_ttl DnsFirewall#minimum_cache_ttl}

---

##### `negative_cache_ttl`<sup>Optional</sup> <a name="negative_cache_ttl" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.negativeCacheTtl"></a>

```python
negative_cache_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Negative DNS cache TTL This setting controls how long DNS Firewall should cache negative responses (e.g., NXDOMAIN) from the upstream servers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/dns_firewall#negative_cache_ttl DnsFirewall#negative_cache_ttl}

---

##### `ratelimit`<sup>Optional</sup> <a name="ratelimit" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.ratelimit"></a>

```python
ratelimit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Ratelimit in queries per second per datacenter (applies to DNS queries sent to the upstream nameservers configured on the cluster).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/dns_firewall#ratelimit DnsFirewall#ratelimit}

---

##### `retries`<sup>Optional</sup> <a name="retries" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.retries"></a>

```python
retries: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Number of retries for fetching DNS responses from upstream nameservers (not counting the initial attempt).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/dns_firewall#retries DnsFirewall#retries}

---

## Classes <a name="Classes" id="Classes"></a>

### DnsFirewallAttackMitigationOutputReference <a name="DnsFirewallAttackMitigationOutputReference" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import dns_firewall

dnsFirewall.DnsFirewallAttackMitigationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.resetOnlyWhenUpstreamUnhealthy">reset_only_when_upstream_unhealthy</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_only_when_upstream_unhealthy` <a name="reset_only_when_upstream_unhealthy" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.resetOnlyWhenUpstreamUnhealthy"></a>

```python
def reset_only_when_upstream_unhealthy() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.property.onlyWhenUpstreamUnhealthyInput">only_when_upstream_unhealthy_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.property.onlyWhenUpstreamUnhealthy">only_when_upstream_unhealthy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigation">DnsFirewallAttackMitigation</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `only_when_upstream_unhealthy_input`<sup>Optional</sup> <a name="only_when_upstream_unhealthy_input" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.property.onlyWhenUpstreamUnhealthyInput"></a>

```python
only_when_upstream_unhealthy_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `only_when_upstream_unhealthy`<sup>Required</sup> <a name="only_when_upstream_unhealthy" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.property.onlyWhenUpstreamUnhealthy"></a>

```python
only_when_upstream_unhealthy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DnsFirewallAttackMitigation]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigation">DnsFirewallAttackMitigation</a>]

---



