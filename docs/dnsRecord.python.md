# `dnsRecord` Submodule <a name="`dnsRecord` Submodule" id="@cdktf/provider-cloudflare.dnsRecord"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DnsRecord <a name="DnsRecord" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/dns_record cloudflare_dns_record}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import dns_record

dnsRecord.DnsRecord(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  ttl: typing.Union[int, float],
  type: str,
  zone_id: str,
  comment: str = None,
  content: str = None,
  data: DnsRecordData = None,
  priority: typing.Union[int, float] = None,
  proxied: typing.Union[bool, IResolvable] = None,
  settings: DnsRecordSettings = None,
  tags: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.Initializer.parameter.name">name</a></code> | <code>str</code> | DNS record name (or @ for the zone apex) in Punycode. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.Initializer.parameter.ttl">ttl</a></code> | <code>typing.Union[int, float]</code> | Time To Live (TTL) of the DNS record in seconds. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.Initializer.parameter.type">type</a></code> | <code>str</code> | Record type. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.Initializer.parameter.zoneId">zone_id</a></code> | <code>str</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.Initializer.parameter.comment">comment</a></code> | <code>str</code> | Comments or notes about the DNS record. This field has no effect on DNS responses. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.Initializer.parameter.content">content</a></code> | <code>str</code> | A valid IPv4 address. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.Initializer.parameter.data">data</a></code> | <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData">DnsRecordData</a></code> | Components of a CAA record. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.Initializer.parameter.priority">priority</a></code> | <code>typing.Union[int, float]</code> | Required for MX, SRV and URI records; unused by other record types. Records with lower priorities are preferred. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.Initializer.parameter.proxied">proxied</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the record is receiving the performance and security benefits of Cloudflare. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.Initializer.parameter.settings">settings</a></code> | <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettings">DnsRecordSettings</a></code> | Settings for the DNS record. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.Initializer.parameter.tags">tags</a></code> | <code>typing.List[str]</code> | Custom tags for the DNS record. This field has no effect on DNS responses. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.Initializer.parameter.name"></a>

- *Type:* str

DNS record name (or @ for the zone apex) in Punycode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/dns_record#name DnsRecord#name}

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.Initializer.parameter.ttl"></a>

- *Type:* typing.Union[int, float]

Time To Live (TTL) of the DNS record in seconds.

Setting to 1 means 'automatic'. Value must be between 60 and 86400, with the minimum reduced to 30 for Enterprise zones.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/dns_record#ttl DnsRecord#ttl}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.Initializer.parameter.type"></a>

- *Type:* str

Record type.

Available values: "A", "AAAA", "CNAME", "MX", "NS", "OPENPGPKEY", "PTR", "TXT", "CAA", "CERT", "DNSKEY", "DS", "HTTPS", "LOC", "NAPTR", "SMIMEA", "SRV", "SSHFP", "SVCB", "TLSA", "URI".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/dns_record#type DnsRecord#type}

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.Initializer.parameter.zoneId"></a>

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/dns_record#zone_id DnsRecord#zone_id}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.Initializer.parameter.comment"></a>

- *Type:* str

Comments or notes about the DNS record. This field has no effect on DNS responses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/dns_record#comment DnsRecord#comment}

---

##### `content`<sup>Optional</sup> <a name="content" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.Initializer.parameter.content"></a>

- *Type:* str

A valid IPv4 address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/dns_record#content DnsRecord#content}

---

##### `data`<sup>Optional</sup> <a name="data" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.Initializer.parameter.data"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData">DnsRecordData</a>

Components of a CAA record.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/dns_record#data DnsRecord#data}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.Initializer.parameter.priority"></a>

- *Type:* typing.Union[int, float]

Required for MX, SRV and URI records; unused by other record types. Records with lower priorities are preferred.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/dns_record#priority DnsRecord#priority}

---

##### `proxied`<sup>Optional</sup> <a name="proxied" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.Initializer.parameter.proxied"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the record is receiving the performance and security benefits of Cloudflare.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/dns_record#proxied DnsRecord#proxied}

---

##### `settings`<sup>Optional</sup> <a name="settings" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.Initializer.parameter.settings"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettings">DnsRecordSettings</a>

Settings for the DNS record.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/dns_record#settings DnsRecord#settings}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.Initializer.parameter.tags"></a>

- *Type:* typing.List[str]

Custom tags for the DNS record. This field has no effect on DNS responses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/dns_record#tags DnsRecord#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.putData">put_data</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.putSettings">put_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.resetComment">reset_comment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.resetContent">reset_content</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.resetData">reset_data</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.resetPriority">reset_priority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.resetProxied">reset_proxied</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.resetSettings">reset_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_data` <a name="put_data" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.putData"></a>

```python
def put_data(
  algorithm: typing.Union[int, float] = None,
  altitude: typing.Union[int, float] = None,
  certificate: str = None,
  digest: str = None,
  digest_type: typing.Union[int, float] = None,
  fingerprint: str = None,
  flags: typing.Mapping[typing.Any] = None,
  key_tag: typing.Union[int, float] = None,
  lat_degrees: typing.Union[int, float] = None,
  lat_direction: str = None,
  lat_minutes: typing.Union[int, float] = None,
  lat_seconds: typing.Union[int, float] = None,
  long_degrees: typing.Union[int, float] = None,
  long_direction: str = None,
  long_minutes: typing.Union[int, float] = None,
  long_seconds: typing.Union[int, float] = None,
  matching_type: typing.Union[int, float] = None,
  order: typing.Union[int, float] = None,
  port: typing.Union[int, float] = None,
  precision_horz: typing.Union[int, float] = None,
  precision_vert: typing.Union[int, float] = None,
  preference: typing.Union[int, float] = None,
  priority: typing.Union[int, float] = None,
  protocol: typing.Union[int, float] = None,
  public_key: str = None,
  regex: str = None,
  replacement: str = None,
  selector: typing.Union[int, float] = None,
  service: str = None,
  size: typing.Union[int, float] = None,
  tag: str = None,
  target: str = None,
  type: typing.Union[int, float] = None,
  usage: typing.Union[int, float] = None,
  value: str = None,
  weight: typing.Union[int, float] = None
) -> None
```

###### `algorithm`<sup>Optional</sup> <a name="algorithm" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.putData.parameter.algorithm"></a>

- *Type:* typing.Union[int, float]

Algorithm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/dns_record#algorithm DnsRecord#algorithm}

---

###### `altitude`<sup>Optional</sup> <a name="altitude" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.putData.parameter.altitude"></a>

- *Type:* typing.Union[int, float]

Altitude of location in meters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/dns_record#altitude DnsRecord#altitude}

---

###### `certificate`<sup>Optional</sup> <a name="certificate" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.putData.parameter.certificate"></a>

- *Type:* str

Certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/dns_record#certificate DnsRecord#certificate}

---

###### `digest`<sup>Optional</sup> <a name="digest" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.putData.parameter.digest"></a>

- *Type:* str

Digest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/dns_record#digest DnsRecord#digest}

---

###### `digest_type`<sup>Optional</sup> <a name="digest_type" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.putData.parameter.digestType"></a>

- *Type:* typing.Union[int, float]

Digest Type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/dns_record#digest_type DnsRecord#digest_type}

---

###### `fingerprint`<sup>Optional</sup> <a name="fingerprint" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.putData.parameter.fingerprint"></a>

- *Type:* str

Fingerprint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/dns_record#fingerprint DnsRecord#fingerprint}

---

###### `flags`<sup>Optional</sup> <a name="flags" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.putData.parameter.flags"></a>

- *Type:* typing.Mapping[typing.Any]

Flags for the CAA record.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/dns_record#flags DnsRecord#flags}

---

###### `key_tag`<sup>Optional</sup> <a name="key_tag" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.putData.parameter.keyTag"></a>

- *Type:* typing.Union[int, float]

Key Tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/dns_record#key_tag DnsRecord#key_tag}

---

###### `lat_degrees`<sup>Optional</sup> <a name="lat_degrees" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.putData.parameter.latDegrees"></a>

- *Type:* typing.Union[int, float]

Degrees of latitude.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/dns_record#lat_degrees DnsRecord#lat_degrees}

---

###### `lat_direction`<sup>Optional</sup> <a name="lat_direction" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.putData.parameter.latDirection"></a>

- *Type:* str

Latitude direction. Available values: "N", "S".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/dns_record#lat_direction DnsRecord#lat_direction}

---

###### `lat_minutes`<sup>Optional</sup> <a name="lat_minutes" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.putData.parameter.latMinutes"></a>

- *Type:* typing.Union[int, float]

Minutes of latitude.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/dns_record#lat_minutes DnsRecord#lat_minutes}

---

###### `lat_seconds`<sup>Optional</sup> <a name="lat_seconds" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.putData.parameter.latSeconds"></a>

- *Type:* typing.Union[int, float]

Seconds of latitude.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/dns_record#lat_seconds DnsRecord#lat_seconds}

---

###### `long_degrees`<sup>Optional</sup> <a name="long_degrees" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.putData.parameter.longDegrees"></a>

- *Type:* typing.Union[int, float]

Degrees of longitude.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/dns_record#long_degrees DnsRecord#long_degrees}

---

###### `long_direction`<sup>Optional</sup> <a name="long_direction" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.putData.parameter.longDirection"></a>

- *Type:* str

Longitude direction. Available values: "E", "W".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/dns_record#long_direction DnsRecord#long_direction}

---

###### `long_minutes`<sup>Optional</sup> <a name="long_minutes" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.putData.parameter.longMinutes"></a>

- *Type:* typing.Union[int, float]

Minutes of longitude.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/dns_record#long_minutes DnsRecord#long_minutes}

---

###### `long_seconds`<sup>Optional</sup> <a name="long_seconds" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.putData.parameter.longSeconds"></a>

- *Type:* typing.Union[int, float]

Seconds of longitude.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/dns_record#long_seconds DnsRecord#long_seconds}

---

###### `matching_type`<sup>Optional</sup> <a name="matching_type" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.putData.parameter.matchingType"></a>

- *Type:* typing.Union[int, float]

Matching Type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/dns_record#matching_type DnsRecord#matching_type}

---

###### `order`<sup>Optional</sup> <a name="order" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.putData.parameter.order"></a>

- *Type:* typing.Union[int, float]

Order.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/dns_record#order DnsRecord#order}

---

###### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.putData.parameter.port"></a>

- *Type:* typing.Union[int, float]

The port of the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/dns_record#port DnsRecord#port}

---

###### `precision_horz`<sup>Optional</sup> <a name="precision_horz" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.putData.parameter.precisionHorz"></a>

- *Type:* typing.Union[int, float]

Horizontal precision of location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/dns_record#precision_horz DnsRecord#precision_horz}

---

###### `precision_vert`<sup>Optional</sup> <a name="precision_vert" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.putData.parameter.precisionVert"></a>

- *Type:* typing.Union[int, float]

Vertical precision of location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/dns_record#precision_vert DnsRecord#precision_vert}

---

###### `preference`<sup>Optional</sup> <a name="preference" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.putData.parameter.preference"></a>

- *Type:* typing.Union[int, float]

Preference.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/dns_record#preference DnsRecord#preference}

---

###### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.putData.parameter.priority"></a>

- *Type:* typing.Union[int, float]

Priority.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/dns_record#priority DnsRecord#priority}

---

###### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.putData.parameter.protocol"></a>

- *Type:* typing.Union[int, float]

Protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/dns_record#protocol DnsRecord#protocol}

---

###### `public_key`<sup>Optional</sup> <a name="public_key" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.putData.parameter.publicKey"></a>

- *Type:* str

Public Key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/dns_record#public_key DnsRecord#public_key}

---

###### `regex`<sup>Optional</sup> <a name="regex" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.putData.parameter.regex"></a>

- *Type:* str

Regex.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/dns_record#regex DnsRecord#regex}

---

###### `replacement`<sup>Optional</sup> <a name="replacement" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.putData.parameter.replacement"></a>

- *Type:* str

Replacement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/dns_record#replacement DnsRecord#replacement}

---

###### `selector`<sup>Optional</sup> <a name="selector" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.putData.parameter.selector"></a>

- *Type:* typing.Union[int, float]

Selector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/dns_record#selector DnsRecord#selector}

---

###### `service`<sup>Optional</sup> <a name="service" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.putData.parameter.service"></a>

- *Type:* str

Service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/dns_record#service DnsRecord#service}

---

###### `size`<sup>Optional</sup> <a name="size" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.putData.parameter.size"></a>

- *Type:* typing.Union[int, float]

Size of location in meters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/dns_record#size DnsRecord#size}

---

###### `tag`<sup>Optional</sup> <a name="tag" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.putData.parameter.tag"></a>

- *Type:* str

Name of the property controlled by this record (e.g.: issue, issuewild, iodef).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/dns_record#tag DnsRecord#tag}

---

###### `target`<sup>Optional</sup> <a name="target" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.putData.parameter.target"></a>

- *Type:* str

Target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/dns_record#target DnsRecord#target}

---

###### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.putData.parameter.type"></a>

- *Type:* typing.Union[int, float]

Type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/dns_record#type DnsRecord#type}

---

###### `usage`<sup>Optional</sup> <a name="usage" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.putData.parameter.usage"></a>

- *Type:* typing.Union[int, float]

Usage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/dns_record#usage DnsRecord#usage}

---

###### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.putData.parameter.value"></a>

- *Type:* str

Value of the record. This field's semantics depend on the chosen tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/dns_record#value DnsRecord#value}

---

###### `weight`<sup>Optional</sup> <a name="weight" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.putData.parameter.weight"></a>

- *Type:* typing.Union[int, float]

The record weight.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/dns_record#weight DnsRecord#weight}

---

##### `put_settings` <a name="put_settings" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.putSettings"></a>

```python
def put_settings(
  flatten_cname: typing.Union[bool, IResolvable] = None,
  ipv4_only: typing.Union[bool, IResolvable] = None,
  ipv6_only: typing.Union[bool, IResolvable] = None
) -> None
```

###### `flatten_cname`<sup>Optional</sup> <a name="flatten_cname" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.putSettings.parameter.flattenCname"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If enabled, causes the CNAME record to be resolved externally and the resulting address records (e.g., A and AAAA) to be returned instead of the CNAME record itself. This setting is unavailable for proxied records, since they are always flattened.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/dns_record#flatten_cname DnsRecord#flatten_cname}

---

###### `ipv4_only`<sup>Optional</sup> <a name="ipv4_only" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.putSettings.parameter.ipv4Only"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

When enabled, only A records will be generated, and AAAA records will not be created.

This setting is intended for exceptional cases. Note that this option only applies to proxied records and it has no effect on whether Cloudflare communicates with the origin using IPv4 or IPv6.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/dns_record#ipv4_only DnsRecord#ipv4_only}

---

###### `ipv6_only`<sup>Optional</sup> <a name="ipv6_only" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.putSettings.parameter.ipv6Only"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

When enabled, only AAAA records will be generated, and A records will not be created.

This setting is intended for exceptional cases. Note that this option only applies to proxied records and it has no effect on whether Cloudflare communicates with the origin using IPv4 or IPv6.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/dns_record#ipv6_only DnsRecord#ipv6_only}

---

##### `reset_comment` <a name="reset_comment" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.resetComment"></a>

```python
def reset_comment() -> None
```

##### `reset_content` <a name="reset_content" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.resetContent"></a>

```python
def reset_content() -> None
```

##### `reset_data` <a name="reset_data" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.resetData"></a>

```python
def reset_data() -> None
```

##### `reset_priority` <a name="reset_priority" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.resetPriority"></a>

```python
def reset_priority() -> None
```

##### `reset_proxied` <a name="reset_proxied" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.resetProxied"></a>

```python
def reset_proxied() -> None
```

##### `reset_settings` <a name="reset_settings" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.resetSettings"></a>

```python
def reset_settings() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DnsRecord resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.isConstruct"></a>

```python
from cdktf_cdktf_provider_cloudflare import dns_record

dnsRecord.DnsRecord.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_cloudflare import dns_record

dnsRecord.DnsRecord.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_cloudflare import dns_record

dnsRecord.DnsRecord.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_cloudflare import dns_record

dnsRecord.DnsRecord.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DnsRecord resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DnsRecord to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DnsRecord that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/dns_record#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DnsRecord to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.commentModifiedOn">comment_modified_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.createdOn">created_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.data">data</a></code> | <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference">DnsRecordDataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.meta">meta</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.modifiedOn">modified_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.proxiable">proxiable</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.settings">settings</a></code> | <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference">DnsRecordSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.tagsModifiedOn">tags_modified_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.commentInput">comment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.contentInput">content_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.dataInput">data_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData">DnsRecordData</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.priorityInput">priority_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.proxiedInput">proxied_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.settingsInput">settings_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettings">DnsRecordSettings</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.tagsInput">tags_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.ttlInput">ttl_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.zoneIdInput">zone_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.content">content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.proxied">proxied</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.tags">tags</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.ttl">ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.zoneId">zone_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `comment_modified_on`<sup>Required</sup> <a name="comment_modified_on" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.commentModifiedOn"></a>

```python
comment_modified_on: str
```

- *Type:* str

---

##### `created_on`<sup>Required</sup> <a name="created_on" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.createdOn"></a>

```python
created_on: str
```

- *Type:* str

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.data"></a>

```python
data: DnsRecordDataOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference">DnsRecordDataOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `meta`<sup>Required</sup> <a name="meta" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.meta"></a>

```python
meta: str
```

- *Type:* str

---

##### `modified_on`<sup>Required</sup> <a name="modified_on" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.modifiedOn"></a>

```python
modified_on: str
```

- *Type:* str

---

##### `proxiable`<sup>Required</sup> <a name="proxiable" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.proxiable"></a>

```python
proxiable: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `settings`<sup>Required</sup> <a name="settings" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.settings"></a>

```python
settings: DnsRecordSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference">DnsRecordSettingsOutputReference</a>

---

##### `tags_modified_on`<sup>Required</sup> <a name="tags_modified_on" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.tagsModifiedOn"></a>

```python
tags_modified_on: str
```

- *Type:* str

---

##### `comment_input`<sup>Optional</sup> <a name="comment_input" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.commentInput"></a>

```python
comment_input: str
```

- *Type:* str

---

##### `content_input`<sup>Optional</sup> <a name="content_input" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.contentInput"></a>

```python
content_input: str
```

- *Type:* str

---

##### `data_input`<sup>Optional</sup> <a name="data_input" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.dataInput"></a>

```python
data_input: typing.Union[IResolvable, DnsRecordData]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData">DnsRecordData</a>]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `priority_input`<sup>Optional</sup> <a name="priority_input" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.priorityInput"></a>

```python
priority_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `proxied_input`<sup>Optional</sup> <a name="proxied_input" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.proxiedInput"></a>

```python
proxied_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `settings_input`<sup>Optional</sup> <a name="settings_input" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.settingsInput"></a>

```python
settings_input: typing.Union[IResolvable, DnsRecordSettings]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettings">DnsRecordSettings</a>]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.tagsInput"></a>

```python
tags_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ttl_input`<sup>Optional</sup> <a name="ttl_input" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.ttlInput"></a>

```python
ttl_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `zone_id_input`<sup>Optional</sup> <a name="zone_id_input" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.zoneIdInput"></a>

```python
zone_id_input: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.content"></a>

```python
content: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `proxied`<sup>Required</sup> <a name="proxied" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.proxied"></a>

```python
proxied: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.ttl"></a>

```python
ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.zoneId"></a>

```python
zone_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DnsRecordConfig <a name="DnsRecordConfig" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import dns_record

dnsRecord.DnsRecordConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  ttl: typing.Union[int, float],
  type: str,
  zone_id: str,
  comment: str = None,
  content: str = None,
  data: DnsRecordData = None,
  priority: typing.Union[int, float] = None,
  proxied: typing.Union[bool, IResolvable] = None,
  settings: DnsRecordSettings = None,
  tags: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.name">name</a></code> | <code>str</code> | DNS record name (or @ for the zone apex) in Punycode. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.ttl">ttl</a></code> | <code>typing.Union[int, float]</code> | Time To Live (TTL) of the DNS record in seconds. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.type">type</a></code> | <code>str</code> | Record type. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.zoneId">zone_id</a></code> | <code>str</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.comment">comment</a></code> | <code>str</code> | Comments or notes about the DNS record. This field has no effect on DNS responses. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.content">content</a></code> | <code>str</code> | A valid IPv4 address. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.data">data</a></code> | <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData">DnsRecordData</a></code> | Components of a CAA record. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | Required for MX, SRV and URI records; unused by other record types. Records with lower priorities are preferred. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.proxied">proxied</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the record is receiving the performance and security benefits of Cloudflare. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.settings">settings</a></code> | <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettings">DnsRecordSettings</a></code> | Settings for the DNS record. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.tags">tags</a></code> | <code>typing.List[str]</code> | Custom tags for the DNS record. This field has no effect on DNS responses. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.name"></a>

```python
name: str
```

- *Type:* str

DNS record name (or @ for the zone apex) in Punycode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/dns_record#name DnsRecord#name}

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.ttl"></a>

```python
ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Time To Live (TTL) of the DNS record in seconds.

Setting to 1 means 'automatic'. Value must be between 60 and 86400, with the minimum reduced to 30 for Enterprise zones.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/dns_record#ttl DnsRecord#ttl}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Record type.

Available values: "A", "AAAA", "CNAME", "MX", "NS", "OPENPGPKEY", "PTR", "TXT", "CAA", "CERT", "DNSKEY", "DS", "HTTPS", "LOC", "NAPTR", "SMIMEA", "SRV", "SSHFP", "SVCB", "TLSA", "URI".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/dns_record#type DnsRecord#type}

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.zoneId"></a>

```python
zone_id: str
```

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/dns_record#zone_id DnsRecord#zone_id}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.comment"></a>

```python
comment: str
```

- *Type:* str

Comments or notes about the DNS record. This field has no effect on DNS responses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/dns_record#comment DnsRecord#comment}

---

##### `content`<sup>Optional</sup> <a name="content" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.content"></a>

```python
content: str
```

- *Type:* str

A valid IPv4 address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/dns_record#content DnsRecord#content}

---

##### `data`<sup>Optional</sup> <a name="data" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.data"></a>

```python
data: DnsRecordData
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData">DnsRecordData</a>

Components of a CAA record.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/dns_record#data DnsRecord#data}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Required for MX, SRV and URI records; unused by other record types. Records with lower priorities are preferred.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/dns_record#priority DnsRecord#priority}

---

##### `proxied`<sup>Optional</sup> <a name="proxied" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.proxied"></a>

```python
proxied: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the record is receiving the performance and security benefits of Cloudflare.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/dns_record#proxied DnsRecord#proxied}

---

##### `settings`<sup>Optional</sup> <a name="settings" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.settings"></a>

```python
settings: DnsRecordSettings
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettings">DnsRecordSettings</a>

Settings for the DNS record.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/dns_record#settings DnsRecord#settings}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

Custom tags for the DNS record. This field has no effect on DNS responses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/dns_record#tags DnsRecord#tags}

---

### DnsRecordData <a name="DnsRecordData" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import dns_record

dnsRecord.DnsRecordData(
  algorithm: typing.Union[int, float] = None,
  altitude: typing.Union[int, float] = None,
  certificate: str = None,
  digest: str = None,
  digest_type: typing.Union[int, float] = None,
  fingerprint: str = None,
  flags: typing.Mapping[typing.Any] = None,
  key_tag: typing.Union[int, float] = None,
  lat_degrees: typing.Union[int, float] = None,
  lat_direction: str = None,
  lat_minutes: typing.Union[int, float] = None,
  lat_seconds: typing.Union[int, float] = None,
  long_degrees: typing.Union[int, float] = None,
  long_direction: str = None,
  long_minutes: typing.Union[int, float] = None,
  long_seconds: typing.Union[int, float] = None,
  matching_type: typing.Union[int, float] = None,
  order: typing.Union[int, float] = None,
  port: typing.Union[int, float] = None,
  precision_horz: typing.Union[int, float] = None,
  precision_vert: typing.Union[int, float] = None,
  preference: typing.Union[int, float] = None,
  priority: typing.Union[int, float] = None,
  protocol: typing.Union[int, float] = None,
  public_key: str = None,
  regex: str = None,
  replacement: str = None,
  selector: typing.Union[int, float] = None,
  service: str = None,
  size: typing.Union[int, float] = None,
  tag: str = None,
  target: str = None,
  type: typing.Union[int, float] = None,
  usage: typing.Union[int, float] = None,
  value: str = None,
  weight: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.algorithm">algorithm</a></code> | <code>typing.Union[int, float]</code> | Algorithm. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.altitude">altitude</a></code> | <code>typing.Union[int, float]</code> | Altitude of location in meters. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.certificate">certificate</a></code> | <code>str</code> | Certificate. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.digest">digest</a></code> | <code>str</code> | Digest. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.digestType">digest_type</a></code> | <code>typing.Union[int, float]</code> | Digest Type. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.fingerprint">fingerprint</a></code> | <code>str</code> | Fingerprint. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.flags">flags</a></code> | <code>typing.Mapping[typing.Any]</code> | Flags for the CAA record. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.keyTag">key_tag</a></code> | <code>typing.Union[int, float]</code> | Key Tag. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.latDegrees">lat_degrees</a></code> | <code>typing.Union[int, float]</code> | Degrees of latitude. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.latDirection">lat_direction</a></code> | <code>str</code> | Latitude direction. Available values: "N", "S". |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.latMinutes">lat_minutes</a></code> | <code>typing.Union[int, float]</code> | Minutes of latitude. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.latSeconds">lat_seconds</a></code> | <code>typing.Union[int, float]</code> | Seconds of latitude. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.longDegrees">long_degrees</a></code> | <code>typing.Union[int, float]</code> | Degrees of longitude. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.longDirection">long_direction</a></code> | <code>str</code> | Longitude direction. Available values: "E", "W". |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.longMinutes">long_minutes</a></code> | <code>typing.Union[int, float]</code> | Minutes of longitude. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.longSeconds">long_seconds</a></code> | <code>typing.Union[int, float]</code> | Seconds of longitude. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.matchingType">matching_type</a></code> | <code>typing.Union[int, float]</code> | Matching Type. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.order">order</a></code> | <code>typing.Union[int, float]</code> | Order. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.port">port</a></code> | <code>typing.Union[int, float]</code> | The port of the service. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.precisionHorz">precision_horz</a></code> | <code>typing.Union[int, float]</code> | Horizontal precision of location. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.precisionVert">precision_vert</a></code> | <code>typing.Union[int, float]</code> | Vertical precision of location. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.preference">preference</a></code> | <code>typing.Union[int, float]</code> | Preference. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | Priority. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.protocol">protocol</a></code> | <code>typing.Union[int, float]</code> | Protocol. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.publicKey">public_key</a></code> | <code>str</code> | Public Key. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.regex">regex</a></code> | <code>str</code> | Regex. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.replacement">replacement</a></code> | <code>str</code> | Replacement. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.selector">selector</a></code> | <code>typing.Union[int, float]</code> | Selector. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.service">service</a></code> | <code>str</code> | Service. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.size">size</a></code> | <code>typing.Union[int, float]</code> | Size of location in meters. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.tag">tag</a></code> | <code>str</code> | Name of the property controlled by this record (e.g.: issue, issuewild, iodef). |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.target">target</a></code> | <code>str</code> | Target. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.type">type</a></code> | <code>typing.Union[int, float]</code> | Type. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.usage">usage</a></code> | <code>typing.Union[int, float]</code> | Usage. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.value">value</a></code> | <code>str</code> | Value of the record. This field's semantics depend on the chosen tag. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | The record weight. |

---

##### `algorithm`<sup>Optional</sup> <a name="algorithm" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.algorithm"></a>

```python
algorithm: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Algorithm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/dns_record#algorithm DnsRecord#algorithm}

---

##### `altitude`<sup>Optional</sup> <a name="altitude" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.altitude"></a>

```python
altitude: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Altitude of location in meters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/dns_record#altitude DnsRecord#altitude}

---

##### `certificate`<sup>Optional</sup> <a name="certificate" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.certificate"></a>

```python
certificate: str
```

- *Type:* str

Certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/dns_record#certificate DnsRecord#certificate}

---

##### `digest`<sup>Optional</sup> <a name="digest" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.digest"></a>

```python
digest: str
```

- *Type:* str

Digest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/dns_record#digest DnsRecord#digest}

---

##### `digest_type`<sup>Optional</sup> <a name="digest_type" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.digestType"></a>

```python
digest_type: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Digest Type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/dns_record#digest_type DnsRecord#digest_type}

---

##### `fingerprint`<sup>Optional</sup> <a name="fingerprint" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.fingerprint"></a>

```python
fingerprint: str
```

- *Type:* str

Fingerprint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/dns_record#fingerprint DnsRecord#fingerprint}

---

##### `flags`<sup>Optional</sup> <a name="flags" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.flags"></a>

```python
flags: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

Flags for the CAA record.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/dns_record#flags DnsRecord#flags}

---

##### `key_tag`<sup>Optional</sup> <a name="key_tag" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.keyTag"></a>

```python
key_tag: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Key Tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/dns_record#key_tag DnsRecord#key_tag}

---

##### `lat_degrees`<sup>Optional</sup> <a name="lat_degrees" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.latDegrees"></a>

```python
lat_degrees: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Degrees of latitude.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/dns_record#lat_degrees DnsRecord#lat_degrees}

---

##### `lat_direction`<sup>Optional</sup> <a name="lat_direction" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.latDirection"></a>

```python
lat_direction: str
```

- *Type:* str

Latitude direction. Available values: "N", "S".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/dns_record#lat_direction DnsRecord#lat_direction}

---

##### `lat_minutes`<sup>Optional</sup> <a name="lat_minutes" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.latMinutes"></a>

```python
lat_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Minutes of latitude.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/dns_record#lat_minutes DnsRecord#lat_minutes}

---

##### `lat_seconds`<sup>Optional</sup> <a name="lat_seconds" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.latSeconds"></a>

```python
lat_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Seconds of latitude.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/dns_record#lat_seconds DnsRecord#lat_seconds}

---

##### `long_degrees`<sup>Optional</sup> <a name="long_degrees" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.longDegrees"></a>

```python
long_degrees: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Degrees of longitude.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/dns_record#long_degrees DnsRecord#long_degrees}

---

##### `long_direction`<sup>Optional</sup> <a name="long_direction" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.longDirection"></a>

```python
long_direction: str
```

- *Type:* str

Longitude direction. Available values: "E", "W".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/dns_record#long_direction DnsRecord#long_direction}

---

##### `long_minutes`<sup>Optional</sup> <a name="long_minutes" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.longMinutes"></a>

```python
long_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Minutes of longitude.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/dns_record#long_minutes DnsRecord#long_minutes}

---

##### `long_seconds`<sup>Optional</sup> <a name="long_seconds" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.longSeconds"></a>

```python
long_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Seconds of longitude.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/dns_record#long_seconds DnsRecord#long_seconds}

---

##### `matching_type`<sup>Optional</sup> <a name="matching_type" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.matchingType"></a>

```python
matching_type: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Matching Type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/dns_record#matching_type DnsRecord#matching_type}

---

##### `order`<sup>Optional</sup> <a name="order" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.order"></a>

```python
order: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Order.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/dns_record#order DnsRecord#order}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The port of the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/dns_record#port DnsRecord#port}

---

##### `precision_horz`<sup>Optional</sup> <a name="precision_horz" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.precisionHorz"></a>

```python
precision_horz: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Horizontal precision of location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/dns_record#precision_horz DnsRecord#precision_horz}

---

##### `precision_vert`<sup>Optional</sup> <a name="precision_vert" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.precisionVert"></a>

```python
precision_vert: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Vertical precision of location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/dns_record#precision_vert DnsRecord#precision_vert}

---

##### `preference`<sup>Optional</sup> <a name="preference" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.preference"></a>

```python
preference: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Preference.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/dns_record#preference DnsRecord#preference}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Priority.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/dns_record#priority DnsRecord#priority}

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.protocol"></a>

```python
protocol: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/dns_record#protocol DnsRecord#protocol}

---

##### `public_key`<sup>Optional</sup> <a name="public_key" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.publicKey"></a>

```python
public_key: str
```

- *Type:* str

Public Key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/dns_record#public_key DnsRecord#public_key}

---

##### `regex`<sup>Optional</sup> <a name="regex" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.regex"></a>

```python
regex: str
```

- *Type:* str

Regex.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/dns_record#regex DnsRecord#regex}

---

##### `replacement`<sup>Optional</sup> <a name="replacement" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.replacement"></a>

```python
replacement: str
```

- *Type:* str

Replacement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/dns_record#replacement DnsRecord#replacement}

---

##### `selector`<sup>Optional</sup> <a name="selector" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.selector"></a>

```python
selector: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Selector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/dns_record#selector DnsRecord#selector}

---

##### `service`<sup>Optional</sup> <a name="service" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.service"></a>

```python
service: str
```

- *Type:* str

Service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/dns_record#service DnsRecord#service}

---

##### `size`<sup>Optional</sup> <a name="size" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.size"></a>

```python
size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Size of location in meters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/dns_record#size DnsRecord#size}

---

##### `tag`<sup>Optional</sup> <a name="tag" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.tag"></a>

```python
tag: str
```

- *Type:* str

Name of the property controlled by this record (e.g.: issue, issuewild, iodef).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/dns_record#tag DnsRecord#tag}

---

##### `target`<sup>Optional</sup> <a name="target" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.target"></a>

```python
target: str
```

- *Type:* str

Target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/dns_record#target DnsRecord#target}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.type"></a>

```python
type: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/dns_record#type DnsRecord#type}

---

##### `usage`<sup>Optional</sup> <a name="usage" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.usage"></a>

```python
usage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Usage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/dns_record#usage DnsRecord#usage}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.value"></a>

```python
value: str
```

- *Type:* str

Value of the record. This field's semantics depend on the chosen tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/dns_record#value DnsRecord#value}

---

##### `weight`<sup>Optional</sup> <a name="weight" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The record weight.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/dns_record#weight DnsRecord#weight}

---

### DnsRecordSettings <a name="DnsRecordSettings" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import dns_record

dnsRecord.DnsRecordSettings(
  flatten_cname: typing.Union[bool, IResolvable] = None,
  ipv4_only: typing.Union[bool, IResolvable] = None,
  ipv6_only: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettings.property.flattenCname">flatten_cname</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If enabled, causes the CNAME record to be resolved externally and the resulting address records (e.g., A and AAAA) to be returned instead of the CNAME record itself. This setting is unavailable for proxied records, since they are always flattened. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettings.property.ipv4Only">ipv4_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When enabled, only A records will be generated, and AAAA records will not be created. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettings.property.ipv6Only">ipv6_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When enabled, only AAAA records will be generated, and A records will not be created. |

---

##### `flatten_cname`<sup>Optional</sup> <a name="flatten_cname" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettings.property.flattenCname"></a>

```python
flatten_cname: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If enabled, causes the CNAME record to be resolved externally and the resulting address records (e.g., A and AAAA) to be returned instead of the CNAME record itself. This setting is unavailable for proxied records, since they are always flattened.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/dns_record#flatten_cname DnsRecord#flatten_cname}

---

##### `ipv4_only`<sup>Optional</sup> <a name="ipv4_only" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettings.property.ipv4Only"></a>

```python
ipv4_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

When enabled, only A records will be generated, and AAAA records will not be created.

This setting is intended for exceptional cases. Note that this option only applies to proxied records and it has no effect on whether Cloudflare communicates with the origin using IPv4 or IPv6.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/dns_record#ipv4_only DnsRecord#ipv4_only}

---

##### `ipv6_only`<sup>Optional</sup> <a name="ipv6_only" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettings.property.ipv6Only"></a>

```python
ipv6_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

When enabled, only AAAA records will be generated, and A records will not be created.

This setting is intended for exceptional cases. Note that this option only applies to proxied records and it has no effect on whether Cloudflare communicates with the origin using IPv4 or IPv6.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/dns_record#ipv6_only DnsRecord#ipv6_only}

---

## Classes <a name="Classes" id="Classes"></a>

### DnsRecordDataOutputReference <a name="DnsRecordDataOutputReference" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import dns_record

dnsRecord.DnsRecordDataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetAlgorithm">reset_algorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetAltitude">reset_altitude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetCertificate">reset_certificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetDigest">reset_digest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetDigestType">reset_digest_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetFingerprint">reset_fingerprint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetFlags">reset_flags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetKeyTag">reset_key_tag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetLatDegrees">reset_lat_degrees</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetLatDirection">reset_lat_direction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetLatMinutes">reset_lat_minutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetLatSeconds">reset_lat_seconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetLongDegrees">reset_long_degrees</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetLongDirection">reset_long_direction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetLongMinutes">reset_long_minutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetLongSeconds">reset_long_seconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetMatchingType">reset_matching_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetOrder">reset_order</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetPort">reset_port</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetPrecisionHorz">reset_precision_horz</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetPrecisionVert">reset_precision_vert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetPreference">reset_preference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetPriority">reset_priority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetProtocol">reset_protocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetPublicKey">reset_public_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetRegex">reset_regex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetReplacement">reset_replacement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetSelector">reset_selector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetService">reset_service</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetSize">reset_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetTag">reset_tag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetTarget">reset_target</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetType">reset_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetUsage">reset_usage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetValue">reset_value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetWeight">reset_weight</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_algorithm` <a name="reset_algorithm" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetAlgorithm"></a>

```python
def reset_algorithm() -> None
```

##### `reset_altitude` <a name="reset_altitude" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetAltitude"></a>

```python
def reset_altitude() -> None
```

##### `reset_certificate` <a name="reset_certificate" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetCertificate"></a>

```python
def reset_certificate() -> None
```

##### `reset_digest` <a name="reset_digest" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetDigest"></a>

```python
def reset_digest() -> None
```

##### `reset_digest_type` <a name="reset_digest_type" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetDigestType"></a>

```python
def reset_digest_type() -> None
```

##### `reset_fingerprint` <a name="reset_fingerprint" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetFingerprint"></a>

```python
def reset_fingerprint() -> None
```

##### `reset_flags` <a name="reset_flags" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetFlags"></a>

```python
def reset_flags() -> None
```

##### `reset_key_tag` <a name="reset_key_tag" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetKeyTag"></a>

```python
def reset_key_tag() -> None
```

##### `reset_lat_degrees` <a name="reset_lat_degrees" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetLatDegrees"></a>

```python
def reset_lat_degrees() -> None
```

##### `reset_lat_direction` <a name="reset_lat_direction" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetLatDirection"></a>

```python
def reset_lat_direction() -> None
```

##### `reset_lat_minutes` <a name="reset_lat_minutes" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetLatMinutes"></a>

```python
def reset_lat_minutes() -> None
```

##### `reset_lat_seconds` <a name="reset_lat_seconds" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetLatSeconds"></a>

```python
def reset_lat_seconds() -> None
```

##### `reset_long_degrees` <a name="reset_long_degrees" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetLongDegrees"></a>

```python
def reset_long_degrees() -> None
```

##### `reset_long_direction` <a name="reset_long_direction" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetLongDirection"></a>

```python
def reset_long_direction() -> None
```

##### `reset_long_minutes` <a name="reset_long_minutes" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetLongMinutes"></a>

```python
def reset_long_minutes() -> None
```

##### `reset_long_seconds` <a name="reset_long_seconds" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetLongSeconds"></a>

```python
def reset_long_seconds() -> None
```

##### `reset_matching_type` <a name="reset_matching_type" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetMatchingType"></a>

```python
def reset_matching_type() -> None
```

##### `reset_order` <a name="reset_order" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetOrder"></a>

```python
def reset_order() -> None
```

##### `reset_port` <a name="reset_port" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetPort"></a>

```python
def reset_port() -> None
```

##### `reset_precision_horz` <a name="reset_precision_horz" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetPrecisionHorz"></a>

```python
def reset_precision_horz() -> None
```

##### `reset_precision_vert` <a name="reset_precision_vert" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetPrecisionVert"></a>

```python
def reset_precision_vert() -> None
```

##### `reset_preference` <a name="reset_preference" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetPreference"></a>

```python
def reset_preference() -> None
```

##### `reset_priority` <a name="reset_priority" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetPriority"></a>

```python
def reset_priority() -> None
```

##### `reset_protocol` <a name="reset_protocol" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetProtocol"></a>

```python
def reset_protocol() -> None
```

##### `reset_public_key` <a name="reset_public_key" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetPublicKey"></a>

```python
def reset_public_key() -> None
```

##### `reset_regex` <a name="reset_regex" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```

##### `reset_replacement` <a name="reset_replacement" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetReplacement"></a>

```python
def reset_replacement() -> None
```

##### `reset_selector` <a name="reset_selector" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetSelector"></a>

```python
def reset_selector() -> None
```

##### `reset_service` <a name="reset_service" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetService"></a>

```python
def reset_service() -> None
```

##### `reset_size` <a name="reset_size" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetSize"></a>

```python
def reset_size() -> None
```

##### `reset_tag` <a name="reset_tag" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetTag"></a>

```python
def reset_tag() -> None
```

##### `reset_target` <a name="reset_target" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetTarget"></a>

```python
def reset_target() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetType"></a>

```python
def reset_type() -> None
```

##### `reset_usage` <a name="reset_usage" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetUsage"></a>

```python
def reset_usage() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetValue"></a>

```python
def reset_value() -> None
```

##### `reset_weight` <a name="reset_weight" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetWeight"></a>

```python
def reset_weight() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.algorithmInput">algorithm_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.altitudeInput">altitude_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.certificateInput">certificate_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.digestInput">digest_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.digestTypeInput">digest_type_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.fingerprintInput">fingerprint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.flagsInput">flags_input</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.keyTagInput">key_tag_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.latDegreesInput">lat_degrees_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.latDirectionInput">lat_direction_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.latMinutesInput">lat_minutes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.latSecondsInput">lat_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.longDegreesInput">long_degrees_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.longDirectionInput">long_direction_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.longMinutesInput">long_minutes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.longSecondsInput">long_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.matchingTypeInput">matching_type_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.orderInput">order_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.precisionHorzInput">precision_horz_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.precisionVertInput">precision_vert_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.preferenceInput">preference_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.priorityInput">priority_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.protocolInput">protocol_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.publicKeyInput">public_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.regexInput">regex_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.replacementInput">replacement_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.selectorInput">selector_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.serviceInput">service_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.sizeInput">size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.tagInput">tag_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.targetInput">target_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.typeInput">type_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.usageInput">usage_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.weightInput">weight_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.algorithm">algorithm</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.altitude">altitude</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.certificate">certificate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.digest">digest</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.digestType">digest_type</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.fingerprint">fingerprint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.flags">flags</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.keyTag">key_tag</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.latDegrees">lat_degrees</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.latDirection">lat_direction</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.latMinutes">lat_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.latSeconds">lat_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.longDegrees">long_degrees</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.longDirection">long_direction</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.longMinutes">long_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.longSeconds">long_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.matchingType">matching_type</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.order">order</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.precisionHorz">precision_horz</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.precisionVert">precision_vert</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.preference">preference</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.protocol">protocol</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.publicKey">public_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.regex">regex</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.replacement">replacement</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.selector">selector</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.service">service</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.size">size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.tag">tag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.target">target</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.type">type</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.usage">usage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData">DnsRecordData</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `algorithm_input`<sup>Optional</sup> <a name="algorithm_input" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.algorithmInput"></a>

```python
algorithm_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `altitude_input`<sup>Optional</sup> <a name="altitude_input" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.altitudeInput"></a>

```python
altitude_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `certificate_input`<sup>Optional</sup> <a name="certificate_input" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.certificateInput"></a>

```python
certificate_input: str
```

- *Type:* str

---

##### `digest_input`<sup>Optional</sup> <a name="digest_input" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.digestInput"></a>

```python
digest_input: str
```

- *Type:* str

---

##### `digest_type_input`<sup>Optional</sup> <a name="digest_type_input" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.digestTypeInput"></a>

```python
digest_type_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `fingerprint_input`<sup>Optional</sup> <a name="fingerprint_input" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.fingerprintInput"></a>

```python
fingerprint_input: str
```

- *Type:* str

---

##### `flags_input`<sup>Optional</sup> <a name="flags_input" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.flagsInput"></a>

```python
flags_input: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `key_tag_input`<sup>Optional</sup> <a name="key_tag_input" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.keyTagInput"></a>

```python
key_tag_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `lat_degrees_input`<sup>Optional</sup> <a name="lat_degrees_input" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.latDegreesInput"></a>

```python
lat_degrees_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `lat_direction_input`<sup>Optional</sup> <a name="lat_direction_input" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.latDirectionInput"></a>

```python
lat_direction_input: str
```

- *Type:* str

---

##### `lat_minutes_input`<sup>Optional</sup> <a name="lat_minutes_input" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.latMinutesInput"></a>

```python
lat_minutes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `lat_seconds_input`<sup>Optional</sup> <a name="lat_seconds_input" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.latSecondsInput"></a>

```python
lat_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `long_degrees_input`<sup>Optional</sup> <a name="long_degrees_input" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.longDegreesInput"></a>

```python
long_degrees_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `long_direction_input`<sup>Optional</sup> <a name="long_direction_input" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.longDirectionInput"></a>

```python
long_direction_input: str
```

- *Type:* str

---

##### `long_minutes_input`<sup>Optional</sup> <a name="long_minutes_input" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.longMinutesInput"></a>

```python
long_minutes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `long_seconds_input`<sup>Optional</sup> <a name="long_seconds_input" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.longSecondsInput"></a>

```python
long_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `matching_type_input`<sup>Optional</sup> <a name="matching_type_input" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.matchingTypeInput"></a>

```python
matching_type_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `order_input`<sup>Optional</sup> <a name="order_input" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.orderInput"></a>

```python
order_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `precision_horz_input`<sup>Optional</sup> <a name="precision_horz_input" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.precisionHorzInput"></a>

```python
precision_horz_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `precision_vert_input`<sup>Optional</sup> <a name="precision_vert_input" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.precisionVertInput"></a>

```python
precision_vert_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `preference_input`<sup>Optional</sup> <a name="preference_input" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.preferenceInput"></a>

```python
preference_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `priority_input`<sup>Optional</sup> <a name="priority_input" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.priorityInput"></a>

```python
priority_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `protocol_input`<sup>Optional</sup> <a name="protocol_input" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.protocolInput"></a>

```python
protocol_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `public_key_input`<sup>Optional</sup> <a name="public_key_input" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.publicKeyInput"></a>

```python
public_key_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.regexInput"></a>

```python
regex_input: str
```

- *Type:* str

---

##### `replacement_input`<sup>Optional</sup> <a name="replacement_input" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.replacementInput"></a>

```python
replacement_input: str
```

- *Type:* str

---

##### `selector_input`<sup>Optional</sup> <a name="selector_input" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.selectorInput"></a>

```python
selector_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `service_input`<sup>Optional</sup> <a name="service_input" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.serviceInput"></a>

```python
service_input: str
```

- *Type:* str

---

##### `size_input`<sup>Optional</sup> <a name="size_input" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.sizeInput"></a>

```python
size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tag_input`<sup>Optional</sup> <a name="tag_input" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.tagInput"></a>

```python
tag_input: str
```

- *Type:* str

---

##### `target_input`<sup>Optional</sup> <a name="target_input" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.targetInput"></a>

```python
target_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.typeInput"></a>

```python
type_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `usage_input`<sup>Optional</sup> <a name="usage_input" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.usageInput"></a>

```python
usage_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `weight_input`<sup>Optional</sup> <a name="weight_input" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.weightInput"></a>

```python
weight_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.algorithm"></a>

```python
algorithm: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `altitude`<sup>Required</sup> <a name="altitude" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.altitude"></a>

```python
altitude: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.certificate"></a>

```python
certificate: str
```

- *Type:* str

---

##### `digest`<sup>Required</sup> <a name="digest" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.digest"></a>

```python
digest: str
```

- *Type:* str

---

##### `digest_type`<sup>Required</sup> <a name="digest_type" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.digestType"></a>

```python
digest_type: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `fingerprint`<sup>Required</sup> <a name="fingerprint" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.fingerprint"></a>

```python
fingerprint: str
```

- *Type:* str

---

##### `flags`<sup>Required</sup> <a name="flags" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.flags"></a>

```python
flags: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `key_tag`<sup>Required</sup> <a name="key_tag" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.keyTag"></a>

```python
key_tag: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `lat_degrees`<sup>Required</sup> <a name="lat_degrees" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.latDegrees"></a>

```python
lat_degrees: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `lat_direction`<sup>Required</sup> <a name="lat_direction" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.latDirection"></a>

```python
lat_direction: str
```

- *Type:* str

---

##### `lat_minutes`<sup>Required</sup> <a name="lat_minutes" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.latMinutes"></a>

```python
lat_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `lat_seconds`<sup>Required</sup> <a name="lat_seconds" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.latSeconds"></a>

```python
lat_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `long_degrees`<sup>Required</sup> <a name="long_degrees" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.longDegrees"></a>

```python
long_degrees: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `long_direction`<sup>Required</sup> <a name="long_direction" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.longDirection"></a>

```python
long_direction: str
```

- *Type:* str

---

##### `long_minutes`<sup>Required</sup> <a name="long_minutes" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.longMinutes"></a>

```python
long_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `long_seconds`<sup>Required</sup> <a name="long_seconds" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.longSeconds"></a>

```python
long_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `matching_type`<sup>Required</sup> <a name="matching_type" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.matchingType"></a>

```python
matching_type: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.order"></a>

```python
order: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `precision_horz`<sup>Required</sup> <a name="precision_horz" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.precisionHorz"></a>

```python
precision_horz: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `precision_vert`<sup>Required</sup> <a name="precision_vert" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.precisionVert"></a>

```python
precision_vert: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `preference`<sup>Required</sup> <a name="preference" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.preference"></a>

```python
preference: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.protocol"></a>

```python
protocol: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `public_key`<sup>Required</sup> <a name="public_key" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.publicKey"></a>

```python
public_key: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.regex"></a>

```python
regex: str
```

- *Type:* str

---

##### `replacement`<sup>Required</sup> <a name="replacement" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.replacement"></a>

```python
replacement: str
```

- *Type:* str

---

##### `selector`<sup>Required</sup> <a name="selector" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.selector"></a>

```python
selector: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.service"></a>

```python
service: str
```

- *Type:* str

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.size"></a>

```python
size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.tag"></a>

```python
tag: str
```

- *Type:* str

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.target"></a>

```python
target: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.type"></a>

```python
type: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `usage`<sup>Required</sup> <a name="usage" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.usage"></a>

```python
usage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DnsRecordData]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData">DnsRecordData</a>]

---


### DnsRecordSettingsOutputReference <a name="DnsRecordSettingsOutputReference" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import dns_record

dnsRecord.DnsRecordSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.resetFlattenCname">reset_flatten_cname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.resetIpv4Only">reset_ipv4_only</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.resetIpv6Only">reset_ipv6_only</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_flatten_cname` <a name="reset_flatten_cname" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.resetFlattenCname"></a>

```python
def reset_flatten_cname() -> None
```

##### `reset_ipv4_only` <a name="reset_ipv4_only" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.resetIpv4Only"></a>

```python
def reset_ipv4_only() -> None
```

##### `reset_ipv6_only` <a name="reset_ipv6_only" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.resetIpv6Only"></a>

```python
def reset_ipv6_only() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.property.flattenCnameInput">flatten_cname_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.property.ipv4OnlyInput">ipv4_only_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.property.ipv6OnlyInput">ipv6_only_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.property.flattenCname">flatten_cname</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.property.ipv4Only">ipv4_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.property.ipv6Only">ipv6_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettings">DnsRecordSettings</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `flatten_cname_input`<sup>Optional</sup> <a name="flatten_cname_input" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.property.flattenCnameInput"></a>

```python
flatten_cname_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ipv4_only_input`<sup>Optional</sup> <a name="ipv4_only_input" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.property.ipv4OnlyInput"></a>

```python
ipv4_only_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ipv6_only_input`<sup>Optional</sup> <a name="ipv6_only_input" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.property.ipv6OnlyInput"></a>

```python
ipv6_only_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `flatten_cname`<sup>Required</sup> <a name="flatten_cname" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.property.flattenCname"></a>

```python
flatten_cname: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ipv4_only`<sup>Required</sup> <a name="ipv4_only" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.property.ipv4Only"></a>

```python
ipv4_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ipv6_only`<sup>Required</sup> <a name="ipv6_only" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.property.ipv6Only"></a>

```python
ipv6_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DnsRecordSettings]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettings">DnsRecordSettings</a>]

---



