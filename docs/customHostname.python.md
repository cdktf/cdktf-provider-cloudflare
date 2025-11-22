# `customHostname` Submodule <a name="`customHostname` Submodule" id="@cdktf/provider-cloudflare.customHostname"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CustomHostname <a name="CustomHostname" id="@cdktf/provider-cloudflare.customHostname.CustomHostname"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/custom_hostname cloudflare_custom_hostname}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import custom_hostname

customHostname.CustomHostname(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  hostname: str,
  ssl: CustomHostnameSsl,
  zone_id: str,
  custom_metadata: typing.Mapping[str] = None,
  custom_origin_server: str = None,
  custom_origin_sni: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.Initializer.parameter.hostname">hostname</a></code> | <code>str</code> | The custom hostname that will point to your hostname via CNAME. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.Initializer.parameter.ssl">ssl</a></code> | <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSsl">CustomHostnameSsl</a></code> | SSL properties used when creating the custom hostname. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.Initializer.parameter.zoneId">zone_id</a></code> | <code>str</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.Initializer.parameter.customMetadata">custom_metadata</a></code> | <code>typing.Mapping[str]</code> | Unique key/value metadata for this hostname. These are per-hostname (customer) settings. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.Initializer.parameter.customOriginServer">custom_origin_server</a></code> | <code>str</code> | a valid hostname that’s been added to your DNS zone as an A, AAAA, or CNAME record. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.Initializer.parameter.customOriginSni">custom_origin_sni</a></code> | <code>str</code> | A hostname that will be sent to your custom origin server as SNI for TLS handshake. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.Initializer.parameter.hostname"></a>

- *Type:* str

The custom hostname that will point to your hostname via CNAME.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/custom_hostname#hostname CustomHostname#hostname}

---

##### `ssl`<sup>Required</sup> <a name="ssl" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.Initializer.parameter.ssl"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSsl">CustomHostnameSsl</a>

SSL properties used when creating the custom hostname.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/custom_hostname#ssl CustomHostname#ssl}

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.Initializer.parameter.zoneId"></a>

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/custom_hostname#zone_id CustomHostname#zone_id}

---

##### `custom_metadata`<sup>Optional</sup> <a name="custom_metadata" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.Initializer.parameter.customMetadata"></a>

- *Type:* typing.Mapping[str]

Unique key/value metadata for this hostname. These are per-hostname (customer) settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/custom_hostname#custom_metadata CustomHostname#custom_metadata}

---

##### `custom_origin_server`<sup>Optional</sup> <a name="custom_origin_server" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.Initializer.parameter.customOriginServer"></a>

- *Type:* str

a valid hostname that’s been added to your DNS zone as an A, AAAA, or CNAME record.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/custom_hostname#custom_origin_server CustomHostname#custom_origin_server}

---

##### `custom_origin_sni`<sup>Optional</sup> <a name="custom_origin_sni" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.Initializer.parameter.customOriginSni"></a>

- *Type:* str

A hostname that will be sent to your custom origin server as SNI for TLS handshake.

This can be a valid subdomain of the zone or custom origin server name or the string ':request_host_header:' which will cause the host header in the request to be used as SNI. Not configurable with default/fallback origin server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/custom_hostname#custom_origin_sni CustomHostname#custom_origin_sni}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.putSsl">put_ssl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.resetCustomMetadata">reset_custom_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.resetCustomOriginServer">reset_custom_origin_server</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.resetCustomOriginSni">reset_custom_origin_sni</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_ssl` <a name="put_ssl" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.putSsl"></a>

```python
def put_ssl(
  bundle_method: str = None,
  certificate_authority: str = None,
  cloudflare_branding: bool | IResolvable = None,
  custom_cert_bundle: IResolvable | typing.List[CustomHostnameSslCustomCertBundle] = None,
  custom_certificate: str = None,
  custom_key: str = None,
  method: str = None,
  settings: CustomHostnameSslSettings = None,
  type: str = None,
  wildcard: bool | IResolvable = None
) -> None
```

###### `bundle_method`<sup>Optional</sup> <a name="bundle_method" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.putSsl.parameter.bundleMethod"></a>

- *Type:* str

A ubiquitous bundle has the highest probability of being verified everywhere, even by clients using outdated or unusual trust stores.

An optimal bundle uses the shortest chain and newest intermediates. And the force bundle verifies the chain, but does not otherwise modify it.
Available values: "ubiquitous", "optimal", "force".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/custom_hostname#bundle_method CustomHostname#bundle_method}

---

###### `certificate_authority`<sup>Optional</sup> <a name="certificate_authority" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.putSsl.parameter.certificateAuthority"></a>

- *Type:* str

The Certificate Authority that will issue the certificate Available values: "digicert", "google", "lets_encrypt", "ssl_com".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/custom_hostname#certificate_authority CustomHostname#certificate_authority}

---

###### `cloudflare_branding`<sup>Optional</sup> <a name="cloudflare_branding" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.putSsl.parameter.cloudflareBranding"></a>

- *Type:* bool | cdktf.IResolvable

Whether or not to add Cloudflare Branding for the order.

This will add a subdomain of sni.cloudflaressl.com as the Common Name if set to true

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/custom_hostname#cloudflare_branding CustomHostname#cloudflare_branding}

---

###### `custom_cert_bundle`<sup>Optional</sup> <a name="custom_cert_bundle" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.putSsl.parameter.customCertBundle"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundle">CustomHostnameSslCustomCertBundle</a>]

Array of custom certificate and key pairs (1 or 2 pairs allowed).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/custom_hostname#custom_cert_bundle CustomHostname#custom_cert_bundle}

---

###### `custom_certificate`<sup>Optional</sup> <a name="custom_certificate" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.putSsl.parameter.customCertificate"></a>

- *Type:* str

If a custom uploaded certificate is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/custom_hostname#custom_certificate CustomHostname#custom_certificate}

---

###### `custom_key`<sup>Optional</sup> <a name="custom_key" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.putSsl.parameter.customKey"></a>

- *Type:* str

The key for a custom uploaded certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/custom_hostname#custom_key CustomHostname#custom_key}

---

###### `method`<sup>Optional</sup> <a name="method" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.putSsl.parameter.method"></a>

- *Type:* str

Domain control validation (DCV) method used for this hostname. Available values: "http", "txt", "email".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/custom_hostname#method CustomHostname#method}

---

###### `settings`<sup>Optional</sup> <a name="settings" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.putSsl.parameter.settings"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettings">CustomHostnameSslSettings</a>

SSL specific settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/custom_hostname#settings CustomHostname#settings}

---

###### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.putSsl.parameter.type"></a>

- *Type:* str

Level of validation to be used for this hostname. Domain validation (dv) must be used. Available values: "dv".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/custom_hostname#type CustomHostname#type}

---

###### `wildcard`<sup>Optional</sup> <a name="wildcard" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.putSsl.parameter.wildcard"></a>

- *Type:* bool | cdktf.IResolvable

Indicates whether the certificate covers a wildcard.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/custom_hostname#wildcard CustomHostname#wildcard}

---

##### `reset_custom_metadata` <a name="reset_custom_metadata" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.resetCustomMetadata"></a>

```python
def reset_custom_metadata() -> None
```

##### `reset_custom_origin_server` <a name="reset_custom_origin_server" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.resetCustomOriginServer"></a>

```python
def reset_custom_origin_server() -> None
```

##### `reset_custom_origin_sni` <a name="reset_custom_origin_sni" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.resetCustomOriginSni"></a>

```python
def reset_custom_origin_sni() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a CustomHostname resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.isConstruct"></a>

```python
from cdktf_cdktf_provider_cloudflare import custom_hostname

customHostname.CustomHostname.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_cloudflare import custom_hostname

customHostname.CustomHostname.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_cloudflare import custom_hostname

customHostname.CustomHostname.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_cloudflare import custom_hostname

customHostname.CustomHostname.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a CustomHostname resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CustomHostname to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CustomHostname that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/custom_hostname#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CustomHostname to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.property.ownershipVerification">ownership_verification</a></code> | <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference">CustomHostnameOwnershipVerificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.property.ownershipVerificationHttp">ownership_verification_http</a></code> | <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference">CustomHostnameOwnershipVerificationHttpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.property.ssl">ssl</a></code> | <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference">CustomHostnameSslOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.property.verificationErrors">verification_errors</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.property.customMetadataInput">custom_metadata_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.property.customOriginServerInput">custom_origin_server_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.property.customOriginSniInput">custom_origin_sni_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.property.hostnameInput">hostname_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.property.sslInput">ssl_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSsl">CustomHostnameSsl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.property.zoneIdInput">zone_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.property.customMetadata">custom_metadata</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.property.customOriginServer">custom_origin_server</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.property.customOriginSni">custom_origin_sni</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.property.hostname">hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.property.zoneId">zone_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ownership_verification`<sup>Required</sup> <a name="ownership_verification" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.property.ownershipVerification"></a>

```python
ownership_verification: CustomHostnameOwnershipVerificationOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference">CustomHostnameOwnershipVerificationOutputReference</a>

---

##### `ownership_verification_http`<sup>Required</sup> <a name="ownership_verification_http" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.property.ownershipVerificationHttp"></a>

```python
ownership_verification_http: CustomHostnameOwnershipVerificationHttpOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference">CustomHostnameOwnershipVerificationHttpOutputReference</a>

---

##### `ssl`<sup>Required</sup> <a name="ssl" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.property.ssl"></a>

```python
ssl: CustomHostnameSslOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference">CustomHostnameSslOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `verification_errors`<sup>Required</sup> <a name="verification_errors" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.property.verificationErrors"></a>

```python
verification_errors: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `custom_metadata_input`<sup>Optional</sup> <a name="custom_metadata_input" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.property.customMetadataInput"></a>

```python
custom_metadata_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `custom_origin_server_input`<sup>Optional</sup> <a name="custom_origin_server_input" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.property.customOriginServerInput"></a>

```python
custom_origin_server_input: str
```

- *Type:* str

---

##### `custom_origin_sni_input`<sup>Optional</sup> <a name="custom_origin_sni_input" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.property.customOriginSniInput"></a>

```python
custom_origin_sni_input: str
```

- *Type:* str

---

##### `hostname_input`<sup>Optional</sup> <a name="hostname_input" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.property.hostnameInput"></a>

```python
hostname_input: str
```

- *Type:* str

---

##### `ssl_input`<sup>Optional</sup> <a name="ssl_input" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.property.sslInput"></a>

```python
ssl_input: IResolvable | CustomHostnameSsl
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSsl">CustomHostnameSsl</a>

---

##### `zone_id_input`<sup>Optional</sup> <a name="zone_id_input" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.property.zoneIdInput"></a>

```python
zone_id_input: str
```

- *Type:* str

---

##### `custom_metadata`<sup>Required</sup> <a name="custom_metadata" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.property.customMetadata"></a>

```python
custom_metadata: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `custom_origin_server`<sup>Required</sup> <a name="custom_origin_server" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.property.customOriginServer"></a>

```python
custom_origin_server: str
```

- *Type:* str

---

##### `custom_origin_sni`<sup>Required</sup> <a name="custom_origin_sni" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.property.customOriginSni"></a>

```python
custom_origin_sni: str
```

- *Type:* str

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.property.zoneId"></a>

```python
zone_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CustomHostnameConfig <a name="CustomHostnameConfig" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import custom_hostname

customHostname.CustomHostnameConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  hostname: str,
  ssl: CustomHostnameSsl,
  zone_id: str,
  custom_metadata: typing.Mapping[str] = None,
  custom_origin_server: str = None,
  custom_origin_sni: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameConfig.property.hostname">hostname</a></code> | <code>str</code> | The custom hostname that will point to your hostname via CNAME. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameConfig.property.ssl">ssl</a></code> | <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSsl">CustomHostnameSsl</a></code> | SSL properties used when creating the custom hostname. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameConfig.property.zoneId">zone_id</a></code> | <code>str</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameConfig.property.customMetadata">custom_metadata</a></code> | <code>typing.Mapping[str]</code> | Unique key/value metadata for this hostname. These are per-hostname (customer) settings. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameConfig.property.customOriginServer">custom_origin_server</a></code> | <code>str</code> | a valid hostname that’s been added to your DNS zone as an A, AAAA, or CNAME record. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameConfig.property.customOriginSni">custom_origin_sni</a></code> | <code>str</code> | A hostname that will be sent to your custom origin server as SNI for TLS handshake. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameConfig.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

The custom hostname that will point to your hostname via CNAME.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/custom_hostname#hostname CustomHostname#hostname}

---

##### `ssl`<sup>Required</sup> <a name="ssl" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameConfig.property.ssl"></a>

```python
ssl: CustomHostnameSsl
```

- *Type:* <a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSsl">CustomHostnameSsl</a>

SSL properties used when creating the custom hostname.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/custom_hostname#ssl CustomHostname#ssl}

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameConfig.property.zoneId"></a>

```python
zone_id: str
```

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/custom_hostname#zone_id CustomHostname#zone_id}

---

##### `custom_metadata`<sup>Optional</sup> <a name="custom_metadata" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameConfig.property.customMetadata"></a>

```python
custom_metadata: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Unique key/value metadata for this hostname. These are per-hostname (customer) settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/custom_hostname#custom_metadata CustomHostname#custom_metadata}

---

##### `custom_origin_server`<sup>Optional</sup> <a name="custom_origin_server" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameConfig.property.customOriginServer"></a>

```python
custom_origin_server: str
```

- *Type:* str

a valid hostname that’s been added to your DNS zone as an A, AAAA, or CNAME record.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/custom_hostname#custom_origin_server CustomHostname#custom_origin_server}

---

##### `custom_origin_sni`<sup>Optional</sup> <a name="custom_origin_sni" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameConfig.property.customOriginSni"></a>

```python
custom_origin_sni: str
```

- *Type:* str

A hostname that will be sent to your custom origin server as SNI for TLS handshake.

This can be a valid subdomain of the zone or custom origin server name or the string ':request_host_header:' which will cause the host header in the request to be used as SNI. Not configurable with default/fallback origin server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/custom_hostname#custom_origin_sni CustomHostname#custom_origin_sni}

---

### CustomHostnameOwnershipVerification <a name="CustomHostnameOwnershipVerification" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerification.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import custom_hostname

customHostname.CustomHostnameOwnershipVerification()
```


### CustomHostnameOwnershipVerificationHttp <a name="CustomHostnameOwnershipVerificationHttp" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttp.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import custom_hostname

customHostname.CustomHostnameOwnershipVerificationHttp()
```


### CustomHostnameSsl <a name="CustomHostnameSsl" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSsl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSsl.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import custom_hostname

customHostname.CustomHostnameSsl(
  bundle_method: str = None,
  certificate_authority: str = None,
  cloudflare_branding: bool | IResolvable = None,
  custom_cert_bundle: IResolvable | typing.List[CustomHostnameSslCustomCertBundle] = None,
  custom_certificate: str = None,
  custom_key: str = None,
  method: str = None,
  settings: CustomHostnameSslSettings = None,
  type: str = None,
  wildcard: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSsl.property.bundleMethod">bundle_method</a></code> | <code>str</code> | A ubiquitous bundle has the highest probability of being verified everywhere, even by clients using outdated or unusual trust stores. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSsl.property.certificateAuthority">certificate_authority</a></code> | <code>str</code> | The Certificate Authority that will issue the certificate Available values: "digicert", "google", "lets_encrypt", "ssl_com". |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSsl.property.cloudflareBranding">cloudflare_branding</a></code> | <code>bool \| cdktf.IResolvable</code> | Whether or not to add Cloudflare Branding for the order. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSsl.property.customCertBundle">custom_cert_bundle</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundle">CustomHostnameSslCustomCertBundle</a>]</code> | Array of custom certificate and key pairs (1 or 2 pairs allowed). |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSsl.property.customCertificate">custom_certificate</a></code> | <code>str</code> | If a custom uploaded certificate is used. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSsl.property.customKey">custom_key</a></code> | <code>str</code> | The key for a custom uploaded certificate. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSsl.property.method">method</a></code> | <code>str</code> | Domain control validation (DCV) method used for this hostname. Available values: "http", "txt", "email". |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSsl.property.settings">settings</a></code> | <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettings">CustomHostnameSslSettings</a></code> | SSL specific settings. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSsl.property.type">type</a></code> | <code>str</code> | Level of validation to be used for this hostname. Domain validation (dv) must be used. Available values: "dv". |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSsl.property.wildcard">wildcard</a></code> | <code>bool \| cdktf.IResolvable</code> | Indicates whether the certificate covers a wildcard. |

---

##### `bundle_method`<sup>Optional</sup> <a name="bundle_method" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSsl.property.bundleMethod"></a>

```python
bundle_method: str
```

- *Type:* str

A ubiquitous bundle has the highest probability of being verified everywhere, even by clients using outdated or unusual trust stores.

An optimal bundle uses the shortest chain and newest intermediates. And the force bundle verifies the chain, but does not otherwise modify it.
Available values: "ubiquitous", "optimal", "force".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/custom_hostname#bundle_method CustomHostname#bundle_method}

---

##### `certificate_authority`<sup>Optional</sup> <a name="certificate_authority" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSsl.property.certificateAuthority"></a>

```python
certificate_authority: str
```

- *Type:* str

The Certificate Authority that will issue the certificate Available values: "digicert", "google", "lets_encrypt", "ssl_com".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/custom_hostname#certificate_authority CustomHostname#certificate_authority}

---

##### `cloudflare_branding`<sup>Optional</sup> <a name="cloudflare_branding" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSsl.property.cloudflareBranding"></a>

```python
cloudflare_branding: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Whether or not to add Cloudflare Branding for the order.

This will add a subdomain of sni.cloudflaressl.com as the Common Name if set to true

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/custom_hostname#cloudflare_branding CustomHostname#cloudflare_branding}

---

##### `custom_cert_bundle`<sup>Optional</sup> <a name="custom_cert_bundle" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSsl.property.customCertBundle"></a>

```python
custom_cert_bundle: IResolvable | typing.List[CustomHostnameSslCustomCertBundle]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundle">CustomHostnameSslCustomCertBundle</a>]

Array of custom certificate and key pairs (1 or 2 pairs allowed).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/custom_hostname#custom_cert_bundle CustomHostname#custom_cert_bundle}

---

##### `custom_certificate`<sup>Optional</sup> <a name="custom_certificate" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSsl.property.customCertificate"></a>

```python
custom_certificate: str
```

- *Type:* str

If a custom uploaded certificate is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/custom_hostname#custom_certificate CustomHostname#custom_certificate}

---

##### `custom_key`<sup>Optional</sup> <a name="custom_key" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSsl.property.customKey"></a>

```python
custom_key: str
```

- *Type:* str

The key for a custom uploaded certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/custom_hostname#custom_key CustomHostname#custom_key}

---

##### `method`<sup>Optional</sup> <a name="method" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSsl.property.method"></a>

```python
method: str
```

- *Type:* str

Domain control validation (DCV) method used for this hostname. Available values: "http", "txt", "email".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/custom_hostname#method CustomHostname#method}

---

##### `settings`<sup>Optional</sup> <a name="settings" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSsl.property.settings"></a>

```python
settings: CustomHostnameSslSettings
```

- *Type:* <a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettings">CustomHostnameSslSettings</a>

SSL specific settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/custom_hostname#settings CustomHostname#settings}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSsl.property.type"></a>

```python
type: str
```

- *Type:* str

Level of validation to be used for this hostname. Domain validation (dv) must be used. Available values: "dv".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/custom_hostname#type CustomHostname#type}

---

##### `wildcard`<sup>Optional</sup> <a name="wildcard" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSsl.property.wildcard"></a>

```python
wildcard: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Indicates whether the certificate covers a wildcard.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/custom_hostname#wildcard CustomHostname#wildcard}

---

### CustomHostnameSslCustomCertBundle <a name="CustomHostnameSslCustomCertBundle" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundle"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundle.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import custom_hostname

customHostname.CustomHostnameSslCustomCertBundle(
  custom_certificate: str,
  custom_key: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundle.property.customCertificate">custom_certificate</a></code> | <code>str</code> | If a custom uploaded certificate is used. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundle.property.customKey">custom_key</a></code> | <code>str</code> | The key for a custom uploaded certificate. |

---

##### `custom_certificate`<sup>Required</sup> <a name="custom_certificate" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundle.property.customCertificate"></a>

```python
custom_certificate: str
```

- *Type:* str

If a custom uploaded certificate is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/custom_hostname#custom_certificate CustomHostname#custom_certificate}

---

##### `custom_key`<sup>Required</sup> <a name="custom_key" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundle.property.customKey"></a>

```python
custom_key: str
```

- *Type:* str

The key for a custom uploaded certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/custom_hostname#custom_key CustomHostname#custom_key}

---

### CustomHostnameSslSettings <a name="CustomHostnameSslSettings" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import custom_hostname

customHostname.CustomHostnameSslSettings(
  ciphers: typing.List[str] = None,
  early_hints: str = None,
  http2: str = None,
  min_tls_version: str = None,
  tls13: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettings.property.ciphers">ciphers</a></code> | <code>typing.List[str]</code> | An allowlist of ciphers for TLS termination. These ciphers must be in the BoringSSL format. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettings.property.earlyHints">early_hints</a></code> | <code>str</code> | Whether or not Early Hints is enabled. Available values: "on", "off". |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettings.property.http2">http2</a></code> | <code>str</code> | Whether or not HTTP2 is enabled. Available values: "on", "off". |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettings.property.minTlsVersion">min_tls_version</a></code> | <code>str</code> | The minimum TLS version supported. Available values: "1.0", "1.1", "1.2", "1.3". |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettings.property.tls13">tls13</a></code> | <code>str</code> | Whether or not TLS 1.3 is enabled. Available values: "on", "off". |

---

##### `ciphers`<sup>Optional</sup> <a name="ciphers" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettings.property.ciphers"></a>

```python
ciphers: typing.List[str]
```

- *Type:* typing.List[str]

An allowlist of ciphers for TLS termination. These ciphers must be in the BoringSSL format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/custom_hostname#ciphers CustomHostname#ciphers}

---

##### `early_hints`<sup>Optional</sup> <a name="early_hints" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettings.property.earlyHints"></a>

```python
early_hints: str
```

- *Type:* str

Whether or not Early Hints is enabled. Available values: "on", "off".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/custom_hostname#early_hints CustomHostname#early_hints}

---

##### `http2`<sup>Optional</sup> <a name="http2" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettings.property.http2"></a>

```python
http2: str
```

- *Type:* str

Whether or not HTTP2 is enabled. Available values: "on", "off".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/custom_hostname#http2 CustomHostname#http2}

---

##### `min_tls_version`<sup>Optional</sup> <a name="min_tls_version" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettings.property.minTlsVersion"></a>

```python
min_tls_version: str
```

- *Type:* str

The minimum TLS version supported. Available values: "1.0", "1.1", "1.2", "1.3".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/custom_hostname#min_tls_version CustomHostname#min_tls_version}

---

##### `tls13`<sup>Optional</sup> <a name="tls13" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettings.property.tls13"></a>

```python
tls13: str
```

- *Type:* str

Whether or not TLS 1.3 is enabled. Available values: "on", "off".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/custom_hostname#tls_1_3 CustomHostname#tls_1_3}

---

## Classes <a name="Classes" id="Classes"></a>

### CustomHostnameOwnershipVerificationHttpOutputReference <a name="CustomHostnameOwnershipVerificationHttpOutputReference" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import custom_hostname

customHostname.CustomHostnameOwnershipVerificationHttpOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.property.httpBody">http_body</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.property.httpUrl">http_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttp">CustomHostnameOwnershipVerificationHttp</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `http_body`<sup>Required</sup> <a name="http_body" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.property.httpBody"></a>

```python
http_body: str
```

- *Type:* str

---

##### `http_url`<sup>Required</sup> <a name="http_url" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.property.httpUrl"></a>

```python
http_url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.property.internalValue"></a>

```python
internal_value: CustomHostnameOwnershipVerificationHttp
```

- *Type:* <a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttp">CustomHostnameOwnershipVerificationHttp</a>

---


### CustomHostnameOwnershipVerificationOutputReference <a name="CustomHostnameOwnershipVerificationOutputReference" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import custom_hostname

customHostname.CustomHostnameOwnershipVerificationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerification">CustomHostnameOwnershipVerification</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.property.internalValue"></a>

```python
internal_value: CustomHostnameOwnershipVerification
```

- *Type:* <a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerification">CustomHostnameOwnershipVerification</a>

---


### CustomHostnameSslCustomCertBundleList <a name="CustomHostnameSslCustomCertBundleList" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import custom_hostname

customHostname.CustomHostnameSslCustomCertBundleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CustomHostnameSslCustomCertBundleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundle">CustomHostnameSslCustomCertBundle</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CustomHostnameSslCustomCertBundle]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundle">CustomHostnameSslCustomCertBundle</a>]

---


### CustomHostnameSslCustomCertBundleOutputReference <a name="CustomHostnameSslCustomCertBundleOutputReference" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import custom_hostname

customHostname.CustomHostnameSslCustomCertBundleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.property.customCertificateInput">custom_certificate_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.property.customKeyInput">custom_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.property.customCertificate">custom_certificate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.property.customKey">custom_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundle">CustomHostnameSslCustomCertBundle</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `custom_certificate_input`<sup>Optional</sup> <a name="custom_certificate_input" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.property.customCertificateInput"></a>

```python
custom_certificate_input: str
```

- *Type:* str

---

##### `custom_key_input`<sup>Optional</sup> <a name="custom_key_input" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.property.customKeyInput"></a>

```python
custom_key_input: str
```

- *Type:* str

---

##### `custom_certificate`<sup>Required</sup> <a name="custom_certificate" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.property.customCertificate"></a>

```python
custom_certificate: str
```

- *Type:* str

---

##### `custom_key`<sup>Required</sup> <a name="custom_key" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.property.customKey"></a>

```python
custom_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CustomHostnameSslCustomCertBundle
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundle">CustomHostnameSslCustomCertBundle</a>

---


### CustomHostnameSslOutputReference <a name="CustomHostnameSslOutputReference" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import custom_hostname

customHostname.CustomHostnameSslOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.putCustomCertBundle">put_custom_cert_bundle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.putSettings">put_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.resetBundleMethod">reset_bundle_method</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.resetCertificateAuthority">reset_certificate_authority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.resetCloudflareBranding">reset_cloudflare_branding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.resetCustomCertBundle">reset_custom_cert_bundle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.resetCustomCertificate">reset_custom_certificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.resetCustomKey">reset_custom_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.resetMethod">reset_method</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.resetSettings">reset_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.resetType">reset_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.resetWildcard">reset_wildcard</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_custom_cert_bundle` <a name="put_custom_cert_bundle" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.putCustomCertBundle"></a>

```python
def put_custom_cert_bundle(
  value: IResolvable | typing.List[CustomHostnameSslCustomCertBundle]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.putCustomCertBundle.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundle">CustomHostnameSslCustomCertBundle</a>]

---

##### `put_settings` <a name="put_settings" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.putSettings"></a>

```python
def put_settings(
  ciphers: typing.List[str] = None,
  early_hints: str = None,
  http2: str = None,
  min_tls_version: str = None,
  tls13: str = None
) -> None
```

###### `ciphers`<sup>Optional</sup> <a name="ciphers" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.putSettings.parameter.ciphers"></a>

- *Type:* typing.List[str]

An allowlist of ciphers for TLS termination. These ciphers must be in the BoringSSL format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/custom_hostname#ciphers CustomHostname#ciphers}

---

###### `early_hints`<sup>Optional</sup> <a name="early_hints" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.putSettings.parameter.earlyHints"></a>

- *Type:* str

Whether or not Early Hints is enabled. Available values: "on", "off".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/custom_hostname#early_hints CustomHostname#early_hints}

---

###### `http2`<sup>Optional</sup> <a name="http2" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.putSettings.parameter.http2"></a>

- *Type:* str

Whether or not HTTP2 is enabled. Available values: "on", "off".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/custom_hostname#http2 CustomHostname#http2}

---

###### `min_tls_version`<sup>Optional</sup> <a name="min_tls_version" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.putSettings.parameter.minTlsVersion"></a>

- *Type:* str

The minimum TLS version supported. Available values: "1.0", "1.1", "1.2", "1.3".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/custom_hostname#min_tls_version CustomHostname#min_tls_version}

---

###### `tls13`<sup>Optional</sup> <a name="tls13" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.putSettings.parameter.tls13"></a>

- *Type:* str

Whether or not TLS 1.3 is enabled. Available values: "on", "off".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/custom_hostname#tls_1_3 CustomHostname#tls_1_3}

---

##### `reset_bundle_method` <a name="reset_bundle_method" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.resetBundleMethod"></a>

```python
def reset_bundle_method() -> None
```

##### `reset_certificate_authority` <a name="reset_certificate_authority" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.resetCertificateAuthority"></a>

```python
def reset_certificate_authority() -> None
```

##### `reset_cloudflare_branding` <a name="reset_cloudflare_branding" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.resetCloudflareBranding"></a>

```python
def reset_cloudflare_branding() -> None
```

##### `reset_custom_cert_bundle` <a name="reset_custom_cert_bundle" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.resetCustomCertBundle"></a>

```python
def reset_custom_cert_bundle() -> None
```

##### `reset_custom_certificate` <a name="reset_custom_certificate" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.resetCustomCertificate"></a>

```python
def reset_custom_certificate() -> None
```

##### `reset_custom_key` <a name="reset_custom_key" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.resetCustomKey"></a>

```python
def reset_custom_key() -> None
```

##### `reset_method` <a name="reset_method" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.resetMethod"></a>

```python
def reset_method() -> None
```

##### `reset_settings` <a name="reset_settings" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.resetSettings"></a>

```python
def reset_settings() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.resetType"></a>

```python
def reset_type() -> None
```

##### `reset_wildcard` <a name="reset_wildcard" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.resetWildcard"></a>

```python
def reset_wildcard() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.customCertBundle">custom_cert_bundle</a></code> | <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleList">CustomHostnameSslCustomCertBundleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.settings">settings</a></code> | <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference">CustomHostnameSslSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.bundleMethodInput">bundle_method_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.certificateAuthorityInput">certificate_authority_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.cloudflareBrandingInput">cloudflare_branding_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.customCertBundleInput">custom_cert_bundle_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundle">CustomHostnameSslCustomCertBundle</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.customCertificateInput">custom_certificate_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.customKeyInput">custom_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.methodInput">method_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.settingsInput">settings_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettings">CustomHostnameSslSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.wildcardInput">wildcard_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.bundleMethod">bundle_method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.certificateAuthority">certificate_authority</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.cloudflareBranding">cloudflare_branding</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.customCertificate">custom_certificate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.customKey">custom_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.method">method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.wildcard">wildcard</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSsl">CustomHostnameSsl</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `custom_cert_bundle`<sup>Required</sup> <a name="custom_cert_bundle" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.customCertBundle"></a>

```python
custom_cert_bundle: CustomHostnameSslCustomCertBundleList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleList">CustomHostnameSslCustomCertBundleList</a>

---

##### `settings`<sup>Required</sup> <a name="settings" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.settings"></a>

```python
settings: CustomHostnameSslSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference">CustomHostnameSslSettingsOutputReference</a>

---

##### `bundle_method_input`<sup>Optional</sup> <a name="bundle_method_input" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.bundleMethodInput"></a>

```python
bundle_method_input: str
```

- *Type:* str

---

##### `certificate_authority_input`<sup>Optional</sup> <a name="certificate_authority_input" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.certificateAuthorityInput"></a>

```python
certificate_authority_input: str
```

- *Type:* str

---

##### `cloudflare_branding_input`<sup>Optional</sup> <a name="cloudflare_branding_input" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.cloudflareBrandingInput"></a>

```python
cloudflare_branding_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `custom_cert_bundle_input`<sup>Optional</sup> <a name="custom_cert_bundle_input" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.customCertBundleInput"></a>

```python
custom_cert_bundle_input: IResolvable | typing.List[CustomHostnameSslCustomCertBundle]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundle">CustomHostnameSslCustomCertBundle</a>]

---

##### `custom_certificate_input`<sup>Optional</sup> <a name="custom_certificate_input" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.customCertificateInput"></a>

```python
custom_certificate_input: str
```

- *Type:* str

---

##### `custom_key_input`<sup>Optional</sup> <a name="custom_key_input" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.customKeyInput"></a>

```python
custom_key_input: str
```

- *Type:* str

---

##### `method_input`<sup>Optional</sup> <a name="method_input" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.methodInput"></a>

```python
method_input: str
```

- *Type:* str

---

##### `settings_input`<sup>Optional</sup> <a name="settings_input" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.settingsInput"></a>

```python
settings_input: IResolvable | CustomHostnameSslSettings
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettings">CustomHostnameSslSettings</a>

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `wildcard_input`<sup>Optional</sup> <a name="wildcard_input" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.wildcardInput"></a>

```python
wildcard_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `bundle_method`<sup>Required</sup> <a name="bundle_method" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.bundleMethod"></a>

```python
bundle_method: str
```

- *Type:* str

---

##### `certificate_authority`<sup>Required</sup> <a name="certificate_authority" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.certificateAuthority"></a>

```python
certificate_authority: str
```

- *Type:* str

---

##### `cloudflare_branding`<sup>Required</sup> <a name="cloudflare_branding" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.cloudflareBranding"></a>

```python
cloudflare_branding: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `custom_certificate`<sup>Required</sup> <a name="custom_certificate" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.customCertificate"></a>

```python
custom_certificate: str
```

- *Type:* str

---

##### `custom_key`<sup>Required</sup> <a name="custom_key" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.customKey"></a>

```python
custom_key: str
```

- *Type:* str

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.method"></a>

```python
method: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `wildcard`<sup>Required</sup> <a name="wildcard" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.wildcard"></a>

```python
wildcard: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CustomHostnameSsl
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSsl">CustomHostnameSsl</a>

---


### CustomHostnameSslSettingsOutputReference <a name="CustomHostnameSslSettingsOutputReference" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import custom_hostname

customHostname.CustomHostnameSslSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.resetCiphers">reset_ciphers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.resetEarlyHints">reset_early_hints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.resetHttp2">reset_http2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.resetMinTlsVersion">reset_min_tls_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.resetTls13">reset_tls13</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_ciphers` <a name="reset_ciphers" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.resetCiphers"></a>

```python
def reset_ciphers() -> None
```

##### `reset_early_hints` <a name="reset_early_hints" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.resetEarlyHints"></a>

```python
def reset_early_hints() -> None
```

##### `reset_http2` <a name="reset_http2" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.resetHttp2"></a>

```python
def reset_http2() -> None
```

##### `reset_min_tls_version` <a name="reset_min_tls_version" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.resetMinTlsVersion"></a>

```python
def reset_min_tls_version() -> None
```

##### `reset_tls13` <a name="reset_tls13" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.resetTls13"></a>

```python
def reset_tls13() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.property.ciphersInput">ciphers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.property.earlyHintsInput">early_hints_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.property.http2Input">http2_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.property.minTlsVersionInput">min_tls_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.property.tls13Input">tls13_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.property.ciphers">ciphers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.property.earlyHints">early_hints</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.property.http2">http2</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.property.minTlsVersion">min_tls_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.property.tls13">tls13</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettings">CustomHostnameSslSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ciphers_input`<sup>Optional</sup> <a name="ciphers_input" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.property.ciphersInput"></a>

```python
ciphers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `early_hints_input`<sup>Optional</sup> <a name="early_hints_input" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.property.earlyHintsInput"></a>

```python
early_hints_input: str
```

- *Type:* str

---

##### `http2_input`<sup>Optional</sup> <a name="http2_input" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.property.http2Input"></a>

```python
http2_input: str
```

- *Type:* str

---

##### `min_tls_version_input`<sup>Optional</sup> <a name="min_tls_version_input" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.property.minTlsVersionInput"></a>

```python
min_tls_version_input: str
```

- *Type:* str

---

##### `tls13_input`<sup>Optional</sup> <a name="tls13_input" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.property.tls13Input"></a>

```python
tls13_input: str
```

- *Type:* str

---

##### `ciphers`<sup>Required</sup> <a name="ciphers" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.property.ciphers"></a>

```python
ciphers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `early_hints`<sup>Required</sup> <a name="early_hints" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.property.earlyHints"></a>

```python
early_hints: str
```

- *Type:* str

---

##### `http2`<sup>Required</sup> <a name="http2" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.property.http2"></a>

```python
http2: str
```

- *Type:* str

---

##### `min_tls_version`<sup>Required</sup> <a name="min_tls_version" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.property.minTlsVersion"></a>

```python
min_tls_version: str
```

- *Type:* str

---

##### `tls13`<sup>Required</sup> <a name="tls13" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.property.tls13"></a>

```python
tls13: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CustomHostnameSslSettings
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettings">CustomHostnameSslSettings</a>

---



