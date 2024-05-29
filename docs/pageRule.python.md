# `pageRule` Submodule <a name="`pageRule` Submodule" id="@cdktf/provider-cloudflare.pageRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PageRule <a name="PageRule" id="@cdktf/provider-cloudflare.pageRule.PageRule"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule cloudflare_page_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.pageRule.PageRule.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import page_rule

pageRule.PageRule(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  actions: PageRuleActions,
  target: str,
  zone_id: str,
  id: str = None,
  priority: typing.Union[int, float] = None,
  status: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.Initializer.parameter.actions">actions</a></code> | <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActions">PageRuleActions</a></code> | actions block. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.Initializer.parameter.target">target</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#target PageRule#target}. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.Initializer.parameter.zoneId">zone_id</a></code> | <code>str</code> | The zone identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#id PageRule#id}. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.Initializer.parameter.priority">priority</a></code> | <code>typing.Union[int, float]</code> | Defaults to `1`. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.Initializer.parameter.status">status</a></code> | <code>str</code> | Defaults to `active`. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.pageRule.PageRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.pageRule.PageRule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.pageRule.PageRule.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.pageRule.PageRule.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.pageRule.PageRule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.pageRule.PageRule.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.pageRule.PageRule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.pageRule.PageRule.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.pageRule.PageRule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktf/provider-cloudflare.pageRule.PageRule.Initializer.parameter.actions"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActions">PageRuleActions</a>

actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#actions PageRule#actions}

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-cloudflare.pageRule.PageRule.Initializer.parameter.target"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#target PageRule#target}.

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktf/provider-cloudflare.pageRule.PageRule.Initializer.parameter.zoneId"></a>

- *Type:* str

The zone identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#zone_id PageRule#zone_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.pageRule.PageRule.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#id PageRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-cloudflare.pageRule.PageRule.Initializer.parameter.priority"></a>

- *Type:* typing.Union[int, float]

Defaults to `1`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#priority PageRule#priority}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-cloudflare.pageRule.PageRule.Initializer.parameter.status"></a>

- *Type:* str

Defaults to `active`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#status PageRule#status}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.putActions">put_actions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.resetPriority">reset_priority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.resetStatus">reset_status</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.pageRule.PageRule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-cloudflare.pageRule.PageRule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.pageRule.PageRule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.pageRule.PageRule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-cloudflare.pageRule.PageRule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-cloudflare.pageRule.PageRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-cloudflare.pageRule.PageRule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-cloudflare.pageRule.PageRule.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-cloudflare.pageRule.PageRule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-cloudflare.pageRule.PageRule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-cloudflare.pageRule.PageRule.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-cloudflare.pageRule.PageRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-cloudflare.pageRule.PageRule.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-cloudflare.pageRule.PageRule.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.pageRule.PageRule.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.pageRule.PageRule.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-cloudflare.pageRule.PageRule.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.pageRule.PageRule.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-cloudflare.pageRule.PageRule.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-cloudflare.pageRule.PageRule.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.pageRule.PageRule.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-cloudflare.pageRule.PageRule.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.pageRule.PageRule.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_actions` <a name="put_actions" id="@cdktf/provider-cloudflare.pageRule.PageRule.putActions"></a>

```python
def put_actions(
  always_use_https: typing.Union[bool, IResolvable] = None,
  automatic_https_rewrites: str = None,
  browser_cache_ttl: str = None,
  browser_check: str = None,
  bypass_cache_on_cookie: str = None,
  cache_by_device_type: str = None,
  cache_deception_armor: str = None,
  cache_key_fields: PageRuleActionsCacheKeyFields = None,
  cache_level: str = None,
  cache_on_cookie: str = None,
  cache_ttl_by_status: typing.Union[IResolvable, typing.List[PageRuleActionsCacheTtlByStatus]] = None,
  disable_apps: typing.Union[bool, IResolvable] = None,
  disable_performance: typing.Union[bool, IResolvable] = None,
  disable_railgun: typing.Union[bool, IResolvable] = None,
  disable_security: typing.Union[bool, IResolvable] = None,
  disable_zaraz: typing.Union[bool, IResolvable] = None,
  edge_cache_ttl: typing.Union[int, float] = None,
  email_obfuscation: str = None,
  explicit_cache_control: str = None,
  forwarding_url: PageRuleActionsForwardingUrl = None,
  host_header_override: str = None,
  ip_geolocation: str = None,
  minify: typing.Union[IResolvable, typing.List[PageRuleActionsMinify]] = None,
  mirage: str = None,
  opportunistic_encryption: str = None,
  origin_error_page_pass_thru: str = None,
  polish: str = None,
  resolve_override: str = None,
  respect_strong_etag: str = None,
  response_buffering: str = None,
  rocket_loader: str = None,
  security_level: str = None,
  server_side_exclude: str = None,
  sort_query_string_for_cache: str = None,
  ssl: str = None,
  true_client_ip_header: str = None,
  waf: str = None
) -> None
```

###### `always_use_https`<sup>Optional</sup> <a name="always_use_https" id="@cdktf/provider-cloudflare.pageRule.PageRule.putActions.parameter.alwaysUseHttps"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#always_use_https PageRule#always_use_https}

---

###### `automatic_https_rewrites`<sup>Optional</sup> <a name="automatic_https_rewrites" id="@cdktf/provider-cloudflare.pageRule.PageRule.putActions.parameter.automaticHttpsRewrites"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#automatic_https_rewrites PageRule#automatic_https_rewrites}.

---

###### `browser_cache_ttl`<sup>Optional</sup> <a name="browser_cache_ttl" id="@cdktf/provider-cloudflare.pageRule.PageRule.putActions.parameter.browserCacheTtl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#browser_cache_ttl PageRule#browser_cache_ttl}.

---

###### `browser_check`<sup>Optional</sup> <a name="browser_check" id="@cdktf/provider-cloudflare.pageRule.PageRule.putActions.parameter.browserCheck"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#browser_check PageRule#browser_check}.

---

###### `bypass_cache_on_cookie`<sup>Optional</sup> <a name="bypass_cache_on_cookie" id="@cdktf/provider-cloudflare.pageRule.PageRule.putActions.parameter.bypassCacheOnCookie"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#bypass_cache_on_cookie PageRule#bypass_cache_on_cookie}.

---

###### `cache_by_device_type`<sup>Optional</sup> <a name="cache_by_device_type" id="@cdktf/provider-cloudflare.pageRule.PageRule.putActions.parameter.cacheByDeviceType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#cache_by_device_type PageRule#cache_by_device_type}.

---

###### `cache_deception_armor`<sup>Optional</sup> <a name="cache_deception_armor" id="@cdktf/provider-cloudflare.pageRule.PageRule.putActions.parameter.cacheDeceptionArmor"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#cache_deception_armor PageRule#cache_deception_armor}.

---

###### `cache_key_fields`<sup>Optional</sup> <a name="cache_key_fields" id="@cdktf/provider-cloudflare.pageRule.PageRule.putActions.parameter.cacheKeyFields"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFields">PageRuleActionsCacheKeyFields</a>

cache_key_fields block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#cache_key_fields PageRule#cache_key_fields}

---

###### `cache_level`<sup>Optional</sup> <a name="cache_level" id="@cdktf/provider-cloudflare.pageRule.PageRule.putActions.parameter.cacheLevel"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#cache_level PageRule#cache_level}.

---

###### `cache_on_cookie`<sup>Optional</sup> <a name="cache_on_cookie" id="@cdktf/provider-cloudflare.pageRule.PageRule.putActions.parameter.cacheOnCookie"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#cache_on_cookie PageRule#cache_on_cookie}.

---

###### `cache_ttl_by_status`<sup>Optional</sup> <a name="cache_ttl_by_status" id="@cdktf/provider-cloudflare.pageRule.PageRule.putActions.parameter.cacheTtlByStatus"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatus">PageRuleActionsCacheTtlByStatus</a>]]

cache_ttl_by_status block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#cache_ttl_by_status PageRule#cache_ttl_by_status}

---

###### `disable_apps`<sup>Optional</sup> <a name="disable_apps" id="@cdktf/provider-cloudflare.pageRule.PageRule.putActions.parameter.disableApps"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#disable_apps PageRule#disable_apps}

---

###### `disable_performance`<sup>Optional</sup> <a name="disable_performance" id="@cdktf/provider-cloudflare.pageRule.PageRule.putActions.parameter.disablePerformance"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#disable_performance PageRule#disable_performance}

---

###### `disable_railgun`<sup>Optional</sup> <a name="disable_railgun" id="@cdktf/provider-cloudflare.pageRule.PageRule.putActions.parameter.disableRailgun"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#disable_railgun PageRule#disable_railgun}

---

###### `disable_security`<sup>Optional</sup> <a name="disable_security" id="@cdktf/provider-cloudflare.pageRule.PageRule.putActions.parameter.disableSecurity"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#disable_security PageRule#disable_security}

---

###### `disable_zaraz`<sup>Optional</sup> <a name="disable_zaraz" id="@cdktf/provider-cloudflare.pageRule.PageRule.putActions.parameter.disableZaraz"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#disable_zaraz PageRule#disable_zaraz}

---

###### `edge_cache_ttl`<sup>Optional</sup> <a name="edge_cache_ttl" id="@cdktf/provider-cloudflare.pageRule.PageRule.putActions.parameter.edgeCacheTtl"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#edge_cache_ttl PageRule#edge_cache_ttl}.

---

###### `email_obfuscation`<sup>Optional</sup> <a name="email_obfuscation" id="@cdktf/provider-cloudflare.pageRule.PageRule.putActions.parameter.emailObfuscation"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#email_obfuscation PageRule#email_obfuscation}.

---

###### `explicit_cache_control`<sup>Optional</sup> <a name="explicit_cache_control" id="@cdktf/provider-cloudflare.pageRule.PageRule.putActions.parameter.explicitCacheControl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#explicit_cache_control PageRule#explicit_cache_control}.

---

###### `forwarding_url`<sup>Optional</sup> <a name="forwarding_url" id="@cdktf/provider-cloudflare.pageRule.PageRule.putActions.parameter.forwardingUrl"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrl">PageRuleActionsForwardingUrl</a>

forwarding_url block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#forwarding_url PageRule#forwarding_url}

---

###### `host_header_override`<sup>Optional</sup> <a name="host_header_override" id="@cdktf/provider-cloudflare.pageRule.PageRule.putActions.parameter.hostHeaderOverride"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#host_header_override PageRule#host_header_override}.

---

###### `ip_geolocation`<sup>Optional</sup> <a name="ip_geolocation" id="@cdktf/provider-cloudflare.pageRule.PageRule.putActions.parameter.ipGeolocation"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#ip_geolocation PageRule#ip_geolocation}.

---

###### `minify`<sup>Optional</sup> <a name="minify" id="@cdktf/provider-cloudflare.pageRule.PageRule.putActions.parameter.minify"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinify">PageRuleActionsMinify</a>]]

minify block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#minify PageRule#minify}

---

###### `mirage`<sup>Optional</sup> <a name="mirage" id="@cdktf/provider-cloudflare.pageRule.PageRule.putActions.parameter.mirage"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#mirage PageRule#mirage}.

---

###### `opportunistic_encryption`<sup>Optional</sup> <a name="opportunistic_encryption" id="@cdktf/provider-cloudflare.pageRule.PageRule.putActions.parameter.opportunisticEncryption"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#opportunistic_encryption PageRule#opportunistic_encryption}.

---

###### `origin_error_page_pass_thru`<sup>Optional</sup> <a name="origin_error_page_pass_thru" id="@cdktf/provider-cloudflare.pageRule.PageRule.putActions.parameter.originErrorPagePassThru"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#origin_error_page_pass_thru PageRule#origin_error_page_pass_thru}.

---

###### `polish`<sup>Optional</sup> <a name="polish" id="@cdktf/provider-cloudflare.pageRule.PageRule.putActions.parameter.polish"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#polish PageRule#polish}.

---

###### `resolve_override`<sup>Optional</sup> <a name="resolve_override" id="@cdktf/provider-cloudflare.pageRule.PageRule.putActions.parameter.resolveOverride"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#resolve_override PageRule#resolve_override}.

---

###### `respect_strong_etag`<sup>Optional</sup> <a name="respect_strong_etag" id="@cdktf/provider-cloudflare.pageRule.PageRule.putActions.parameter.respectStrongEtag"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#respect_strong_etag PageRule#respect_strong_etag}.

---

###### `response_buffering`<sup>Optional</sup> <a name="response_buffering" id="@cdktf/provider-cloudflare.pageRule.PageRule.putActions.parameter.responseBuffering"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#response_buffering PageRule#response_buffering}.

---

###### `rocket_loader`<sup>Optional</sup> <a name="rocket_loader" id="@cdktf/provider-cloudflare.pageRule.PageRule.putActions.parameter.rocketLoader"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#rocket_loader PageRule#rocket_loader}.

---

###### `security_level`<sup>Optional</sup> <a name="security_level" id="@cdktf/provider-cloudflare.pageRule.PageRule.putActions.parameter.securityLevel"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#security_level PageRule#security_level}.

---

###### `server_side_exclude`<sup>Optional</sup> <a name="server_side_exclude" id="@cdktf/provider-cloudflare.pageRule.PageRule.putActions.parameter.serverSideExclude"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#server_side_exclude PageRule#server_side_exclude}.

---

###### `sort_query_string_for_cache`<sup>Optional</sup> <a name="sort_query_string_for_cache" id="@cdktf/provider-cloudflare.pageRule.PageRule.putActions.parameter.sortQueryStringForCache"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#sort_query_string_for_cache PageRule#sort_query_string_for_cache}.

---

###### `ssl`<sup>Optional</sup> <a name="ssl" id="@cdktf/provider-cloudflare.pageRule.PageRule.putActions.parameter.ssl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#ssl PageRule#ssl}.

---

###### `true_client_ip_header`<sup>Optional</sup> <a name="true_client_ip_header" id="@cdktf/provider-cloudflare.pageRule.PageRule.putActions.parameter.trueClientIpHeader"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#true_client_ip_header PageRule#true_client_ip_header}.

---

###### `waf`<sup>Optional</sup> <a name="waf" id="@cdktf/provider-cloudflare.pageRule.PageRule.putActions.parameter.waf"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#waf PageRule#waf}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-cloudflare.pageRule.PageRule.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_priority` <a name="reset_priority" id="@cdktf/provider-cloudflare.pageRule.PageRule.resetPriority"></a>

```python
def reset_priority() -> None
```

##### `reset_status` <a name="reset_status" id="@cdktf/provider-cloudflare.pageRule.PageRule.resetStatus"></a>

```python
def reset_status() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a PageRule resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-cloudflare.pageRule.PageRule.isConstruct"></a>

```python
from cdktf_cdktf_provider_cloudflare import page_rule

pageRule.PageRule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.pageRule.PageRule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-cloudflare.pageRule.PageRule.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_cloudflare import page_rule

pageRule.PageRule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.pageRule.PageRule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-cloudflare.pageRule.PageRule.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_cloudflare import page_rule

pageRule.PageRule.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.pageRule.PageRule.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-cloudflare.pageRule.PageRule.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_cloudflare import page_rule

pageRule.PageRule.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a PageRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.pageRule.PageRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-cloudflare.pageRule.PageRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the PageRule to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-cloudflare.pageRule.PageRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing PageRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.pageRule.PageRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the PageRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.property.actions">actions</a></code> | <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference">PageRuleActionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.property.actionsInput">actions_input</a></code> | <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActions">PageRuleActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.property.priorityInput">priority_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.property.targetInput">target_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.property.zoneIdInput">zone_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.property.target">target</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.property.zoneId">zone_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.pageRule.PageRule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-cloudflare.pageRule.PageRule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.pageRule.PageRule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-cloudflare.pageRule.PageRule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-cloudflare.pageRule.PageRule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-cloudflare.pageRule.PageRule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-cloudflare.pageRule.PageRule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.pageRule.PageRule.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.pageRule.PageRule.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.pageRule.PageRule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.pageRule.PageRule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.pageRule.PageRule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.pageRule.PageRule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.pageRule.PageRule.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktf/provider-cloudflare.pageRule.PageRule.property.actions"></a>

```python
actions: PageRuleActionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference">PageRuleActionsOutputReference</a>

---

##### `actions_input`<sup>Optional</sup> <a name="actions_input" id="@cdktf/provider-cloudflare.pageRule.PageRule.property.actionsInput"></a>

```python
actions_input: PageRuleActions
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActions">PageRuleActions</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-cloudflare.pageRule.PageRule.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `priority_input`<sup>Optional</sup> <a name="priority_input" id="@cdktf/provider-cloudflare.pageRule.PageRule.property.priorityInput"></a>

```python
priority_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktf/provider-cloudflare.pageRule.PageRule.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `target_input`<sup>Optional</sup> <a name="target_input" id="@cdktf/provider-cloudflare.pageRule.PageRule.property.targetInput"></a>

```python
target_input: str
```

- *Type:* str

---

##### `zone_id_input`<sup>Optional</sup> <a name="zone_id_input" id="@cdktf/provider-cloudflare.pageRule.PageRule.property.zoneIdInput"></a>

```python
zone_id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.pageRule.PageRule.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-cloudflare.pageRule.PageRule.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-cloudflare.pageRule.PageRule.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-cloudflare.pageRule.PageRule.property.target"></a>

```python
target: str
```

- *Type:* str

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktf/provider-cloudflare.pageRule.PageRule.property.zoneId"></a>

```python
zone_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.pageRule.PageRule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### PageRuleActions <a name="PageRuleActions" id="@cdktf/provider-cloudflare.pageRule.PageRuleActions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.pageRule.PageRuleActions.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import page_rule

pageRule.PageRuleActions(
  always_use_https: typing.Union[bool, IResolvable] = None,
  automatic_https_rewrites: str = None,
  browser_cache_ttl: str = None,
  browser_check: str = None,
  bypass_cache_on_cookie: str = None,
  cache_by_device_type: str = None,
  cache_deception_armor: str = None,
  cache_key_fields: PageRuleActionsCacheKeyFields = None,
  cache_level: str = None,
  cache_on_cookie: str = None,
  cache_ttl_by_status: typing.Union[IResolvable, typing.List[PageRuleActionsCacheTtlByStatus]] = None,
  disable_apps: typing.Union[bool, IResolvable] = None,
  disable_performance: typing.Union[bool, IResolvable] = None,
  disable_railgun: typing.Union[bool, IResolvable] = None,
  disable_security: typing.Union[bool, IResolvable] = None,
  disable_zaraz: typing.Union[bool, IResolvable] = None,
  edge_cache_ttl: typing.Union[int, float] = None,
  email_obfuscation: str = None,
  explicit_cache_control: str = None,
  forwarding_url: PageRuleActionsForwardingUrl = None,
  host_header_override: str = None,
  ip_geolocation: str = None,
  minify: typing.Union[IResolvable, typing.List[PageRuleActionsMinify]] = None,
  mirage: str = None,
  opportunistic_encryption: str = None,
  origin_error_page_pass_thru: str = None,
  polish: str = None,
  resolve_override: str = None,
  respect_strong_etag: str = None,
  response_buffering: str = None,
  rocket_loader: str = None,
  security_level: str = None,
  server_side_exclude: str = None,
  sort_query_string_for_cache: str = None,
  ssl: str = None,
  true_client_ip_header: str = None,
  waf: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.alwaysUseHttps">always_use_https</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Defaults to `false`. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.automaticHttpsRewrites">automatic_https_rewrites</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#automatic_https_rewrites PageRule#automatic_https_rewrites}. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.browserCacheTtl">browser_cache_ttl</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#browser_cache_ttl PageRule#browser_cache_ttl}. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.browserCheck">browser_check</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#browser_check PageRule#browser_check}. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.bypassCacheOnCookie">bypass_cache_on_cookie</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#bypass_cache_on_cookie PageRule#bypass_cache_on_cookie}. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.cacheByDeviceType">cache_by_device_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#cache_by_device_type PageRule#cache_by_device_type}. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.cacheDeceptionArmor">cache_deception_armor</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#cache_deception_armor PageRule#cache_deception_armor}. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.cacheKeyFields">cache_key_fields</a></code> | <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFields">PageRuleActionsCacheKeyFields</a></code> | cache_key_fields block. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.cacheLevel">cache_level</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#cache_level PageRule#cache_level}. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.cacheOnCookie">cache_on_cookie</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#cache_on_cookie PageRule#cache_on_cookie}. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.cacheTtlByStatus">cache_ttl_by_status</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatus">PageRuleActionsCacheTtlByStatus</a>]]</code> | cache_ttl_by_status block. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.disableApps">disable_apps</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Defaults to `false`. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.disablePerformance">disable_performance</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Defaults to `false`. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.disableRailgun">disable_railgun</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Defaults to `false`. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.disableSecurity">disable_security</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Defaults to `false`. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.disableZaraz">disable_zaraz</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Defaults to `false`. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.edgeCacheTtl">edge_cache_ttl</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#edge_cache_ttl PageRule#edge_cache_ttl}. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.emailObfuscation">email_obfuscation</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#email_obfuscation PageRule#email_obfuscation}. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.explicitCacheControl">explicit_cache_control</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#explicit_cache_control PageRule#explicit_cache_control}. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.forwardingUrl">forwarding_url</a></code> | <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrl">PageRuleActionsForwardingUrl</a></code> | forwarding_url block. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.hostHeaderOverride">host_header_override</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#host_header_override PageRule#host_header_override}. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.ipGeolocation">ip_geolocation</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#ip_geolocation PageRule#ip_geolocation}. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.minify">minify</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinify">PageRuleActionsMinify</a>]]</code> | minify block. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.mirage">mirage</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#mirage PageRule#mirage}. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.opportunisticEncryption">opportunistic_encryption</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#opportunistic_encryption PageRule#opportunistic_encryption}. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.originErrorPagePassThru">origin_error_page_pass_thru</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#origin_error_page_pass_thru PageRule#origin_error_page_pass_thru}. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.polish">polish</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#polish PageRule#polish}. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.resolveOverride">resolve_override</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#resolve_override PageRule#resolve_override}. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.respectStrongEtag">respect_strong_etag</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#respect_strong_etag PageRule#respect_strong_etag}. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.responseBuffering">response_buffering</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#response_buffering PageRule#response_buffering}. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.rocketLoader">rocket_loader</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#rocket_loader PageRule#rocket_loader}. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.securityLevel">security_level</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#security_level PageRule#security_level}. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.serverSideExclude">server_side_exclude</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#server_side_exclude PageRule#server_side_exclude}. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.sortQueryStringForCache">sort_query_string_for_cache</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#sort_query_string_for_cache PageRule#sort_query_string_for_cache}. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.ssl">ssl</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#ssl PageRule#ssl}. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.trueClientIpHeader">true_client_ip_header</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#true_client_ip_header PageRule#true_client_ip_header}. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.waf">waf</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#waf PageRule#waf}. |

---

##### `always_use_https`<sup>Optional</sup> <a name="always_use_https" id="@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.alwaysUseHttps"></a>

```python
always_use_https: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#always_use_https PageRule#always_use_https}

---

##### `automatic_https_rewrites`<sup>Optional</sup> <a name="automatic_https_rewrites" id="@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.automaticHttpsRewrites"></a>

```python
automatic_https_rewrites: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#automatic_https_rewrites PageRule#automatic_https_rewrites}.

---

##### `browser_cache_ttl`<sup>Optional</sup> <a name="browser_cache_ttl" id="@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.browserCacheTtl"></a>

```python
browser_cache_ttl: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#browser_cache_ttl PageRule#browser_cache_ttl}.

---

##### `browser_check`<sup>Optional</sup> <a name="browser_check" id="@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.browserCheck"></a>

```python
browser_check: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#browser_check PageRule#browser_check}.

---

##### `bypass_cache_on_cookie`<sup>Optional</sup> <a name="bypass_cache_on_cookie" id="@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.bypassCacheOnCookie"></a>

```python
bypass_cache_on_cookie: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#bypass_cache_on_cookie PageRule#bypass_cache_on_cookie}.

---

##### `cache_by_device_type`<sup>Optional</sup> <a name="cache_by_device_type" id="@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.cacheByDeviceType"></a>

```python
cache_by_device_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#cache_by_device_type PageRule#cache_by_device_type}.

---

##### `cache_deception_armor`<sup>Optional</sup> <a name="cache_deception_armor" id="@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.cacheDeceptionArmor"></a>

```python
cache_deception_armor: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#cache_deception_armor PageRule#cache_deception_armor}.

---

##### `cache_key_fields`<sup>Optional</sup> <a name="cache_key_fields" id="@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.cacheKeyFields"></a>

```python
cache_key_fields: PageRuleActionsCacheKeyFields
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFields">PageRuleActionsCacheKeyFields</a>

cache_key_fields block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#cache_key_fields PageRule#cache_key_fields}

---

##### `cache_level`<sup>Optional</sup> <a name="cache_level" id="@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.cacheLevel"></a>

```python
cache_level: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#cache_level PageRule#cache_level}.

---

##### `cache_on_cookie`<sup>Optional</sup> <a name="cache_on_cookie" id="@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.cacheOnCookie"></a>

```python
cache_on_cookie: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#cache_on_cookie PageRule#cache_on_cookie}.

---

##### `cache_ttl_by_status`<sup>Optional</sup> <a name="cache_ttl_by_status" id="@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.cacheTtlByStatus"></a>

```python
cache_ttl_by_status: typing.Union[IResolvable, typing.List[PageRuleActionsCacheTtlByStatus]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatus">PageRuleActionsCacheTtlByStatus</a>]]

cache_ttl_by_status block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#cache_ttl_by_status PageRule#cache_ttl_by_status}

---

##### `disable_apps`<sup>Optional</sup> <a name="disable_apps" id="@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.disableApps"></a>

```python
disable_apps: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#disable_apps PageRule#disable_apps}

---

##### `disable_performance`<sup>Optional</sup> <a name="disable_performance" id="@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.disablePerformance"></a>

```python
disable_performance: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#disable_performance PageRule#disable_performance}

---

##### `disable_railgun`<sup>Optional</sup> <a name="disable_railgun" id="@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.disableRailgun"></a>

```python
disable_railgun: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#disable_railgun PageRule#disable_railgun}

---

##### `disable_security`<sup>Optional</sup> <a name="disable_security" id="@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.disableSecurity"></a>

```python
disable_security: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#disable_security PageRule#disable_security}

---

##### `disable_zaraz`<sup>Optional</sup> <a name="disable_zaraz" id="@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.disableZaraz"></a>

```python
disable_zaraz: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#disable_zaraz PageRule#disable_zaraz}

---

##### `edge_cache_ttl`<sup>Optional</sup> <a name="edge_cache_ttl" id="@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.edgeCacheTtl"></a>

```python
edge_cache_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#edge_cache_ttl PageRule#edge_cache_ttl}.

---

##### `email_obfuscation`<sup>Optional</sup> <a name="email_obfuscation" id="@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.emailObfuscation"></a>

```python
email_obfuscation: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#email_obfuscation PageRule#email_obfuscation}.

---

##### `explicit_cache_control`<sup>Optional</sup> <a name="explicit_cache_control" id="@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.explicitCacheControl"></a>

```python
explicit_cache_control: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#explicit_cache_control PageRule#explicit_cache_control}.

---

##### `forwarding_url`<sup>Optional</sup> <a name="forwarding_url" id="@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.forwardingUrl"></a>

```python
forwarding_url: PageRuleActionsForwardingUrl
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrl">PageRuleActionsForwardingUrl</a>

forwarding_url block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#forwarding_url PageRule#forwarding_url}

---

##### `host_header_override`<sup>Optional</sup> <a name="host_header_override" id="@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.hostHeaderOverride"></a>

```python
host_header_override: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#host_header_override PageRule#host_header_override}.

---

##### `ip_geolocation`<sup>Optional</sup> <a name="ip_geolocation" id="@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.ipGeolocation"></a>

```python
ip_geolocation: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#ip_geolocation PageRule#ip_geolocation}.

---

##### `minify`<sup>Optional</sup> <a name="minify" id="@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.minify"></a>

```python
minify: typing.Union[IResolvable, typing.List[PageRuleActionsMinify]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinify">PageRuleActionsMinify</a>]]

minify block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#minify PageRule#minify}

---

##### `mirage`<sup>Optional</sup> <a name="mirage" id="@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.mirage"></a>

```python
mirage: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#mirage PageRule#mirage}.

---

##### `opportunistic_encryption`<sup>Optional</sup> <a name="opportunistic_encryption" id="@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.opportunisticEncryption"></a>

```python
opportunistic_encryption: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#opportunistic_encryption PageRule#opportunistic_encryption}.

---

##### `origin_error_page_pass_thru`<sup>Optional</sup> <a name="origin_error_page_pass_thru" id="@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.originErrorPagePassThru"></a>

```python
origin_error_page_pass_thru: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#origin_error_page_pass_thru PageRule#origin_error_page_pass_thru}.

---

##### `polish`<sup>Optional</sup> <a name="polish" id="@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.polish"></a>

```python
polish: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#polish PageRule#polish}.

---

##### `resolve_override`<sup>Optional</sup> <a name="resolve_override" id="@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.resolveOverride"></a>

```python
resolve_override: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#resolve_override PageRule#resolve_override}.

---

##### `respect_strong_etag`<sup>Optional</sup> <a name="respect_strong_etag" id="@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.respectStrongEtag"></a>

```python
respect_strong_etag: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#respect_strong_etag PageRule#respect_strong_etag}.

---

##### `response_buffering`<sup>Optional</sup> <a name="response_buffering" id="@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.responseBuffering"></a>

```python
response_buffering: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#response_buffering PageRule#response_buffering}.

---

##### `rocket_loader`<sup>Optional</sup> <a name="rocket_loader" id="@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.rocketLoader"></a>

```python
rocket_loader: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#rocket_loader PageRule#rocket_loader}.

---

##### `security_level`<sup>Optional</sup> <a name="security_level" id="@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.securityLevel"></a>

```python
security_level: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#security_level PageRule#security_level}.

---

##### `server_side_exclude`<sup>Optional</sup> <a name="server_side_exclude" id="@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.serverSideExclude"></a>

```python
server_side_exclude: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#server_side_exclude PageRule#server_side_exclude}.

---

##### `sort_query_string_for_cache`<sup>Optional</sup> <a name="sort_query_string_for_cache" id="@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.sortQueryStringForCache"></a>

```python
sort_query_string_for_cache: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#sort_query_string_for_cache PageRule#sort_query_string_for_cache}.

---

##### `ssl`<sup>Optional</sup> <a name="ssl" id="@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.ssl"></a>

```python
ssl: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#ssl PageRule#ssl}.

---

##### `true_client_ip_header`<sup>Optional</sup> <a name="true_client_ip_header" id="@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.trueClientIpHeader"></a>

```python
true_client_ip_header: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#true_client_ip_header PageRule#true_client_ip_header}.

---

##### `waf`<sup>Optional</sup> <a name="waf" id="@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.waf"></a>

```python
waf: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#waf PageRule#waf}.

---

### PageRuleActionsCacheKeyFields <a name="PageRuleActionsCacheKeyFields" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFields"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFields.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import page_rule

pageRule.PageRuleActionsCacheKeyFields(
  host: PageRuleActionsCacheKeyFieldsHost,
  query_string: PageRuleActionsCacheKeyFieldsQueryString,
  user: PageRuleActionsCacheKeyFieldsUser,
  cookie: PageRuleActionsCacheKeyFieldsCookie = None,
  header: PageRuleActionsCacheKeyFieldsHeader = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFields.property.host">host</a></code> | <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHost">PageRuleActionsCacheKeyFieldsHost</a></code> | host block. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFields.property.queryString">query_string</a></code> | <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryString">PageRuleActionsCacheKeyFieldsQueryString</a></code> | query_string block. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFields.property.user">user</a></code> | <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUser">PageRuleActionsCacheKeyFieldsUser</a></code> | user block. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFields.property.cookie">cookie</a></code> | <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookie">PageRuleActionsCacheKeyFieldsCookie</a></code> | cookie block. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFields.property.header">header</a></code> | <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeader">PageRuleActionsCacheKeyFieldsHeader</a></code> | header block. |

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFields.property.host"></a>

```python
host: PageRuleActionsCacheKeyFieldsHost
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHost">PageRuleActionsCacheKeyFieldsHost</a>

host block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#host PageRule#host}

---

##### `query_string`<sup>Required</sup> <a name="query_string" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFields.property.queryString"></a>

```python
query_string: PageRuleActionsCacheKeyFieldsQueryString
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryString">PageRuleActionsCacheKeyFieldsQueryString</a>

query_string block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#query_string PageRule#query_string}

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFields.property.user"></a>

```python
user: PageRuleActionsCacheKeyFieldsUser
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUser">PageRuleActionsCacheKeyFieldsUser</a>

user block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#user PageRule#user}

---

##### `cookie`<sup>Optional</sup> <a name="cookie" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFields.property.cookie"></a>

```python
cookie: PageRuleActionsCacheKeyFieldsCookie
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookie">PageRuleActionsCacheKeyFieldsCookie</a>

cookie block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#cookie PageRule#cookie}

---

##### `header`<sup>Optional</sup> <a name="header" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFields.property.header"></a>

```python
header: PageRuleActionsCacheKeyFieldsHeader
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeader">PageRuleActionsCacheKeyFieldsHeader</a>

header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#header PageRule#header}

---

### PageRuleActionsCacheKeyFieldsCookie <a name="PageRuleActionsCacheKeyFieldsCookie" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookie"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookie.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import page_rule

pageRule.PageRuleActionsCacheKeyFieldsCookie(
  check_presence: typing.List[str] = None,
  include: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookie.property.checkPresence">check_presence</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#check_presence PageRule#check_presence}. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookie.property.include">include</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#include PageRule#include}. |

---

##### `check_presence`<sup>Optional</sup> <a name="check_presence" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookie.property.checkPresence"></a>

```python
check_presence: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#check_presence PageRule#check_presence}.

---

##### `include`<sup>Optional</sup> <a name="include" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookie.property.include"></a>

```python
include: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#include PageRule#include}.

---

### PageRuleActionsCacheKeyFieldsHeader <a name="PageRuleActionsCacheKeyFieldsHeader" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeader.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import page_rule

pageRule.PageRuleActionsCacheKeyFieldsHeader(
  check_presence: typing.List[str] = None,
  exclude: typing.List[str] = None,
  include: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeader.property.checkPresence">check_presence</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#check_presence PageRule#check_presence}. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeader.property.exclude">exclude</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#exclude PageRule#exclude}. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeader.property.include">include</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#include PageRule#include}. |

---

##### `check_presence`<sup>Optional</sup> <a name="check_presence" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeader.property.checkPresence"></a>

```python
check_presence: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#check_presence PageRule#check_presence}.

---

##### `exclude`<sup>Optional</sup> <a name="exclude" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeader.property.exclude"></a>

```python
exclude: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#exclude PageRule#exclude}.

---

##### `include`<sup>Optional</sup> <a name="include" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeader.property.include"></a>

```python
include: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#include PageRule#include}.

---

### PageRuleActionsCacheKeyFieldsHost <a name="PageRuleActionsCacheKeyFieldsHost" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHost"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHost.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import page_rule

pageRule.PageRuleActionsCacheKeyFieldsHost(
  resolved: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHost.property.resolved">resolved</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Defaults to `false`. |

---

##### `resolved`<sup>Optional</sup> <a name="resolved" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHost.property.resolved"></a>

```python
resolved: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#resolved PageRule#resolved}

---

### PageRuleActionsCacheKeyFieldsQueryString <a name="PageRuleActionsCacheKeyFieldsQueryString" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryString"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryString.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import page_rule

pageRule.PageRuleActionsCacheKeyFieldsQueryString(
  exclude: typing.List[str] = None,
  ignore: typing.Union[bool, IResolvable] = None,
  include: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryString.property.exclude">exclude</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#exclude PageRule#exclude}. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryString.property.ignore">ignore</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#ignore PageRule#ignore}. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryString.property.include">include</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#include PageRule#include}. |

---

##### `exclude`<sup>Optional</sup> <a name="exclude" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryString.property.exclude"></a>

```python
exclude: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#exclude PageRule#exclude}.

---

##### `ignore`<sup>Optional</sup> <a name="ignore" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryString.property.ignore"></a>

```python
ignore: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#ignore PageRule#ignore}.

---

##### `include`<sup>Optional</sup> <a name="include" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryString.property.include"></a>

```python
include: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#include PageRule#include}.

---

### PageRuleActionsCacheKeyFieldsUser <a name="PageRuleActionsCacheKeyFieldsUser" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUser"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUser.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import page_rule

pageRule.PageRuleActionsCacheKeyFieldsUser(
  device_type: typing.Union[bool, IResolvable] = None,
  geo: typing.Union[bool, IResolvable] = None,
  lang: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUser.property.deviceType">device_type</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#device_type PageRule#device_type}. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUser.property.geo">geo</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#geo PageRule#geo}. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUser.property.lang">lang</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#lang PageRule#lang}. |

---

##### `device_type`<sup>Optional</sup> <a name="device_type" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUser.property.deviceType"></a>

```python
device_type: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#device_type PageRule#device_type}.

---

##### `geo`<sup>Optional</sup> <a name="geo" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUser.property.geo"></a>

```python
geo: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#geo PageRule#geo}.

---

##### `lang`<sup>Optional</sup> <a name="lang" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUser.property.lang"></a>

```python
lang: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#lang PageRule#lang}.

---

### PageRuleActionsCacheTtlByStatus <a name="PageRuleActionsCacheTtlByStatus" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatus.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import page_rule

pageRule.PageRuleActionsCacheTtlByStatus(
  codes: str,
  ttl: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatus.property.codes">codes</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#codes PageRule#codes}. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatus.property.ttl">ttl</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#ttl PageRule#ttl}. |

---

##### `codes`<sup>Required</sup> <a name="codes" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatus.property.codes"></a>

```python
codes: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#codes PageRule#codes}.

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatus.property.ttl"></a>

```python
ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#ttl PageRule#ttl}.

---

### PageRuleActionsForwardingUrl <a name="PageRuleActionsForwardingUrl" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrl.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import page_rule

pageRule.PageRuleActionsForwardingUrl(
  status_code: typing.Union[int, float],
  url: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrl.property.statusCode">status_code</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#status_code PageRule#status_code}. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrl.property.url">url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#url PageRule#url}. |

---

##### `status_code`<sup>Required</sup> <a name="status_code" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrl.property.statusCode"></a>

```python
status_code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#status_code PageRule#status_code}.

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrl.property.url"></a>

```python
url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#url PageRule#url}.

---

### PageRuleActionsMinify <a name="PageRuleActionsMinify" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinify"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinify.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import page_rule

pageRule.PageRuleActionsMinify(
  css: str,
  html: str,
  js: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinify.property.css">css</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#css PageRule#css}. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinify.property.html">html</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#html PageRule#html}. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinify.property.js">js</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#js PageRule#js}. |

---

##### `css`<sup>Required</sup> <a name="css" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinify.property.css"></a>

```python
css: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#css PageRule#css}.

---

##### `html`<sup>Required</sup> <a name="html" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinify.property.html"></a>

```python
html: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#html PageRule#html}.

---

##### `js`<sup>Required</sup> <a name="js" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinify.property.js"></a>

```python
js: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#js PageRule#js}.

---

### PageRuleConfig <a name="PageRuleConfig" id="@cdktf/provider-cloudflare.pageRule.PageRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.pageRule.PageRuleConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import page_rule

pageRule.PageRuleConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  actions: PageRuleActions,
  target: str,
  zone_id: str,
  id: str = None,
  priority: typing.Union[int, float] = None,
  status: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleConfig.property.actions">actions</a></code> | <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActions">PageRuleActions</a></code> | actions block. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleConfig.property.target">target</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#target PageRule#target}. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleConfig.property.zoneId">zone_id</a></code> | <code>str</code> | The zone identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#id PageRule#id}. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleConfig.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | Defaults to `1`. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleConfig.property.status">status</a></code> | <code>str</code> | Defaults to `active`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.pageRule.PageRuleConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.pageRule.PageRuleConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.pageRule.PageRuleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.pageRule.PageRuleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.pageRule.PageRuleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.pageRule.PageRuleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.pageRule.PageRuleConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktf/provider-cloudflare.pageRule.PageRuleConfig.property.actions"></a>

```python
actions: PageRuleActions
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActions">PageRuleActions</a>

actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#actions PageRule#actions}

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-cloudflare.pageRule.PageRuleConfig.property.target"></a>

```python
target: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#target PageRule#target}.

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktf/provider-cloudflare.pageRule.PageRuleConfig.property.zoneId"></a>

```python
zone_id: str
```

- *Type:* str

The zone identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#zone_id PageRule#zone_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.pageRule.PageRuleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#id PageRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-cloudflare.pageRule.PageRuleConfig.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Defaults to `1`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#priority PageRule#priority}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-cloudflare.pageRule.PageRuleConfig.property.status"></a>

```python
status: str
```

- *Type:* str

Defaults to `active`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#status PageRule#status}

---

## Classes <a name="Classes" id="Classes"></a>

### PageRuleActionsCacheKeyFieldsCookieOutputReference <a name="PageRuleActionsCacheKeyFieldsCookieOutputReference" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import page_rule

pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.resetCheckPresence">reset_check_presence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.resetInclude">reset_include</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_check_presence` <a name="reset_check_presence" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.resetCheckPresence"></a>

```python
def reset_check_presence() -> None
```

##### `reset_include` <a name="reset_include" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.resetInclude"></a>

```python
def reset_include() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.property.checkPresenceInput">check_presence_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.property.includeInput">include_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.property.checkPresence">check_presence</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.property.include">include</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookie">PageRuleActionsCacheKeyFieldsCookie</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `check_presence_input`<sup>Optional</sup> <a name="check_presence_input" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.property.checkPresenceInput"></a>

```python
check_presence_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `include_input`<sup>Optional</sup> <a name="include_input" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.property.includeInput"></a>

```python
include_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `check_presence`<sup>Required</sup> <a name="check_presence" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.property.checkPresence"></a>

```python
check_presence: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `include`<sup>Required</sup> <a name="include" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.property.include"></a>

```python
include: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.property.internalValue"></a>

```python
internal_value: PageRuleActionsCacheKeyFieldsCookie
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookie">PageRuleActionsCacheKeyFieldsCookie</a>

---


### PageRuleActionsCacheKeyFieldsHeaderOutputReference <a name="PageRuleActionsCacheKeyFieldsHeaderOutputReference" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import page_rule

pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.resetCheckPresence">reset_check_presence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.resetExclude">reset_exclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.resetInclude">reset_include</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_check_presence` <a name="reset_check_presence" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.resetCheckPresence"></a>

```python
def reset_check_presence() -> None
```

##### `reset_exclude` <a name="reset_exclude" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.resetExclude"></a>

```python
def reset_exclude() -> None
```

##### `reset_include` <a name="reset_include" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.resetInclude"></a>

```python
def reset_include() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.property.checkPresenceInput">check_presence_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.property.excludeInput">exclude_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.property.includeInput">include_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.property.checkPresence">check_presence</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.property.exclude">exclude</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.property.include">include</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeader">PageRuleActionsCacheKeyFieldsHeader</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `check_presence_input`<sup>Optional</sup> <a name="check_presence_input" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.property.checkPresenceInput"></a>

```python
check_presence_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `exclude_input`<sup>Optional</sup> <a name="exclude_input" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.property.excludeInput"></a>

```python
exclude_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `include_input`<sup>Optional</sup> <a name="include_input" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.property.includeInput"></a>

```python
include_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `check_presence`<sup>Required</sup> <a name="check_presence" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.property.checkPresence"></a>

```python
check_presence: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `exclude`<sup>Required</sup> <a name="exclude" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.property.exclude"></a>

```python
exclude: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `include`<sup>Required</sup> <a name="include" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.property.include"></a>

```python
include: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.property.internalValue"></a>

```python
internal_value: PageRuleActionsCacheKeyFieldsHeader
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeader">PageRuleActionsCacheKeyFieldsHeader</a>

---


### PageRuleActionsCacheKeyFieldsHostOutputReference <a name="PageRuleActionsCacheKeyFieldsHostOutputReference" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHostOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHostOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import page_rule

pageRule.PageRuleActionsCacheKeyFieldsHostOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHostOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHostOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHostOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHostOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHostOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHostOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHostOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHostOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHostOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHostOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHostOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHostOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHostOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHostOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHostOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHostOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHostOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHostOutputReference.resetResolved">reset_resolved</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHostOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHostOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHostOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHostOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHostOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHostOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHostOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHostOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHostOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHostOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHostOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHostOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHostOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHostOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHostOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHostOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHostOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHostOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHostOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHostOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHostOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHostOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHostOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHostOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_resolved` <a name="reset_resolved" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHostOutputReference.resetResolved"></a>

```python
def reset_resolved() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHostOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHostOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHostOutputReference.property.resolvedInput">resolved_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHostOutputReference.property.resolved">resolved</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHostOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHost">PageRuleActionsCacheKeyFieldsHost</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHostOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHostOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `resolved_input`<sup>Optional</sup> <a name="resolved_input" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHostOutputReference.property.resolvedInput"></a>

```python
resolved_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `resolved`<sup>Required</sup> <a name="resolved" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHostOutputReference.property.resolved"></a>

```python
resolved: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHostOutputReference.property.internalValue"></a>

```python
internal_value: PageRuleActionsCacheKeyFieldsHost
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHost">PageRuleActionsCacheKeyFieldsHost</a>

---


### PageRuleActionsCacheKeyFieldsOutputReference <a name="PageRuleActionsCacheKeyFieldsOutputReference" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import page_rule

pageRule.PageRuleActionsCacheKeyFieldsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.putCookie">put_cookie</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.putHeader">put_header</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.putHost">put_host</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.putQueryString">put_query_string</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.putUser">put_user</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.resetCookie">reset_cookie</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.resetHeader">reset_header</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_cookie` <a name="put_cookie" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.putCookie"></a>

```python
def put_cookie(
  check_presence: typing.List[str] = None,
  include: typing.List[str] = None
) -> None
```

###### `check_presence`<sup>Optional</sup> <a name="check_presence" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.putCookie.parameter.checkPresence"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#check_presence PageRule#check_presence}.

---

###### `include`<sup>Optional</sup> <a name="include" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.putCookie.parameter.include"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#include PageRule#include}.

---

##### `put_header` <a name="put_header" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.putHeader"></a>

```python
def put_header(
  check_presence: typing.List[str] = None,
  exclude: typing.List[str] = None,
  include: typing.List[str] = None
) -> None
```

###### `check_presence`<sup>Optional</sup> <a name="check_presence" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.putHeader.parameter.checkPresence"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#check_presence PageRule#check_presence}.

---

###### `exclude`<sup>Optional</sup> <a name="exclude" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.putHeader.parameter.exclude"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#exclude PageRule#exclude}.

---

###### `include`<sup>Optional</sup> <a name="include" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.putHeader.parameter.include"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#include PageRule#include}.

---

##### `put_host` <a name="put_host" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.putHost"></a>

```python
def put_host(
  resolved: typing.Union[bool, IResolvable] = None
) -> None
```

###### `resolved`<sup>Optional</sup> <a name="resolved" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.putHost.parameter.resolved"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#resolved PageRule#resolved}

---

##### `put_query_string` <a name="put_query_string" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.putQueryString"></a>

```python
def put_query_string(
  exclude: typing.List[str] = None,
  ignore: typing.Union[bool, IResolvable] = None,
  include: typing.List[str] = None
) -> None
```

###### `exclude`<sup>Optional</sup> <a name="exclude" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.putQueryString.parameter.exclude"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#exclude PageRule#exclude}.

---

###### `ignore`<sup>Optional</sup> <a name="ignore" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.putQueryString.parameter.ignore"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#ignore PageRule#ignore}.

---

###### `include`<sup>Optional</sup> <a name="include" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.putQueryString.parameter.include"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#include PageRule#include}.

---

##### `put_user` <a name="put_user" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.putUser"></a>

```python
def put_user(
  device_type: typing.Union[bool, IResolvable] = None,
  geo: typing.Union[bool, IResolvable] = None,
  lang: typing.Union[bool, IResolvable] = None
) -> None
```

###### `device_type`<sup>Optional</sup> <a name="device_type" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.putUser.parameter.deviceType"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#device_type PageRule#device_type}.

---

###### `geo`<sup>Optional</sup> <a name="geo" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.putUser.parameter.geo"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#geo PageRule#geo}.

---

###### `lang`<sup>Optional</sup> <a name="lang" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.putUser.parameter.lang"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#lang PageRule#lang}.

---

##### `reset_cookie` <a name="reset_cookie" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.resetCookie"></a>

```python
def reset_cookie() -> None
```

##### `reset_header` <a name="reset_header" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.resetHeader"></a>

```python
def reset_header() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.property.cookie">cookie</a></code> | <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference">PageRuleActionsCacheKeyFieldsCookieOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.property.header">header</a></code> | <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference">PageRuleActionsCacheKeyFieldsHeaderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.property.host">host</a></code> | <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHostOutputReference">PageRuleActionsCacheKeyFieldsHostOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.property.queryString">query_string</a></code> | <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference">PageRuleActionsCacheKeyFieldsQueryStringOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.property.user">user</a></code> | <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference">PageRuleActionsCacheKeyFieldsUserOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.property.cookieInput">cookie_input</a></code> | <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookie">PageRuleActionsCacheKeyFieldsCookie</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.property.headerInput">header_input</a></code> | <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeader">PageRuleActionsCacheKeyFieldsHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.property.hostInput">host_input</a></code> | <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHost">PageRuleActionsCacheKeyFieldsHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.property.queryStringInput">query_string_input</a></code> | <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryString">PageRuleActionsCacheKeyFieldsQueryString</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.property.userInput">user_input</a></code> | <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUser">PageRuleActionsCacheKeyFieldsUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFields">PageRuleActionsCacheKeyFields</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cookie`<sup>Required</sup> <a name="cookie" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.property.cookie"></a>

```python
cookie: PageRuleActionsCacheKeyFieldsCookieOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference">PageRuleActionsCacheKeyFieldsCookieOutputReference</a>

---

##### `header`<sup>Required</sup> <a name="header" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.property.header"></a>

```python
header: PageRuleActionsCacheKeyFieldsHeaderOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference">PageRuleActionsCacheKeyFieldsHeaderOutputReference</a>

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.property.host"></a>

```python
host: PageRuleActionsCacheKeyFieldsHostOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHostOutputReference">PageRuleActionsCacheKeyFieldsHostOutputReference</a>

---

##### `query_string`<sup>Required</sup> <a name="query_string" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.property.queryString"></a>

```python
query_string: PageRuleActionsCacheKeyFieldsQueryStringOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference">PageRuleActionsCacheKeyFieldsQueryStringOutputReference</a>

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.property.user"></a>

```python
user: PageRuleActionsCacheKeyFieldsUserOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference">PageRuleActionsCacheKeyFieldsUserOutputReference</a>

---

##### `cookie_input`<sup>Optional</sup> <a name="cookie_input" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.property.cookieInput"></a>

```python
cookie_input: PageRuleActionsCacheKeyFieldsCookie
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookie">PageRuleActionsCacheKeyFieldsCookie</a>

---

##### `header_input`<sup>Optional</sup> <a name="header_input" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.property.headerInput"></a>

```python
header_input: PageRuleActionsCacheKeyFieldsHeader
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeader">PageRuleActionsCacheKeyFieldsHeader</a>

---

##### `host_input`<sup>Optional</sup> <a name="host_input" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.property.hostInput"></a>

```python
host_input: PageRuleActionsCacheKeyFieldsHost
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHost">PageRuleActionsCacheKeyFieldsHost</a>

---

##### `query_string_input`<sup>Optional</sup> <a name="query_string_input" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.property.queryStringInput"></a>

```python
query_string_input: PageRuleActionsCacheKeyFieldsQueryString
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryString">PageRuleActionsCacheKeyFieldsQueryString</a>

---

##### `user_input`<sup>Optional</sup> <a name="user_input" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.property.userInput"></a>

```python
user_input: PageRuleActionsCacheKeyFieldsUser
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUser">PageRuleActionsCacheKeyFieldsUser</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.property.internalValue"></a>

```python
internal_value: PageRuleActionsCacheKeyFields
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFields">PageRuleActionsCacheKeyFields</a>

---


### PageRuleActionsCacheKeyFieldsQueryStringOutputReference <a name="PageRuleActionsCacheKeyFieldsQueryStringOutputReference" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import page_rule

pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.resetExclude">reset_exclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.resetIgnore">reset_ignore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.resetInclude">reset_include</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_exclude` <a name="reset_exclude" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.resetExclude"></a>

```python
def reset_exclude() -> None
```

##### `reset_ignore` <a name="reset_ignore" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.resetIgnore"></a>

```python
def reset_ignore() -> None
```

##### `reset_include` <a name="reset_include" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.resetInclude"></a>

```python
def reset_include() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.property.excludeInput">exclude_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.property.ignoreInput">ignore_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.property.includeInput">include_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.property.exclude">exclude</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.property.ignore">ignore</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.property.include">include</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryString">PageRuleActionsCacheKeyFieldsQueryString</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `exclude_input`<sup>Optional</sup> <a name="exclude_input" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.property.excludeInput"></a>

```python
exclude_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ignore_input`<sup>Optional</sup> <a name="ignore_input" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.property.ignoreInput"></a>

```python
ignore_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `include_input`<sup>Optional</sup> <a name="include_input" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.property.includeInput"></a>

```python
include_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `exclude`<sup>Required</sup> <a name="exclude" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.property.exclude"></a>

```python
exclude: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ignore`<sup>Required</sup> <a name="ignore" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.property.ignore"></a>

```python
ignore: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `include`<sup>Required</sup> <a name="include" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.property.include"></a>

```python
include: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.property.internalValue"></a>

```python
internal_value: PageRuleActionsCacheKeyFieldsQueryString
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryString">PageRuleActionsCacheKeyFieldsQueryString</a>

---


### PageRuleActionsCacheKeyFieldsUserOutputReference <a name="PageRuleActionsCacheKeyFieldsUserOutputReference" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import page_rule

pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.resetDeviceType">reset_device_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.resetGeo">reset_geo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.resetLang">reset_lang</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_device_type` <a name="reset_device_type" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.resetDeviceType"></a>

```python
def reset_device_type() -> None
```

##### `reset_geo` <a name="reset_geo" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.resetGeo"></a>

```python
def reset_geo() -> None
```

##### `reset_lang` <a name="reset_lang" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.resetLang"></a>

```python
def reset_lang() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.property.deviceTypeInput">device_type_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.property.geoInput">geo_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.property.langInput">lang_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.property.deviceType">device_type</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.property.geo">geo</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.property.lang">lang</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUser">PageRuleActionsCacheKeyFieldsUser</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `device_type_input`<sup>Optional</sup> <a name="device_type_input" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.property.deviceTypeInput"></a>

```python
device_type_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `geo_input`<sup>Optional</sup> <a name="geo_input" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.property.geoInput"></a>

```python
geo_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `lang_input`<sup>Optional</sup> <a name="lang_input" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.property.langInput"></a>

```python
lang_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `device_type`<sup>Required</sup> <a name="device_type" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.property.deviceType"></a>

```python
device_type: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `geo`<sup>Required</sup> <a name="geo" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.property.geo"></a>

```python
geo: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `lang`<sup>Required</sup> <a name="lang" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.property.lang"></a>

```python
lang: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.property.internalValue"></a>

```python
internal_value: PageRuleActionsCacheKeyFieldsUser
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUser">PageRuleActionsCacheKeyFieldsUser</a>

---


### PageRuleActionsCacheTtlByStatusList <a name="PageRuleActionsCacheTtlByStatusList" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import page_rule

pageRule.PageRuleActionsCacheTtlByStatusList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> PageRuleActionsCacheTtlByStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatus">PageRuleActionsCacheTtlByStatus</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[PageRuleActionsCacheTtlByStatus]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatus">PageRuleActionsCacheTtlByStatus</a>]]

---


### PageRuleActionsCacheTtlByStatusOutputReference <a name="PageRuleActionsCacheTtlByStatusOutputReference" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import page_rule

pageRule.PageRuleActionsCacheTtlByStatusOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.property.codesInput">codes_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.property.ttlInput">ttl_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.property.codes">codes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.property.ttl">ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatus">PageRuleActionsCacheTtlByStatus</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `codes_input`<sup>Optional</sup> <a name="codes_input" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.property.codesInput"></a>

```python
codes_input: str
```

- *Type:* str

---

##### `ttl_input`<sup>Optional</sup> <a name="ttl_input" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.property.ttlInput"></a>

```python
ttl_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `codes`<sup>Required</sup> <a name="codes" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.property.codes"></a>

```python
codes: str
```

- *Type:* str

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.property.ttl"></a>

```python
ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, PageRuleActionsCacheTtlByStatus]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatus">PageRuleActionsCacheTtlByStatus</a>]

---


### PageRuleActionsForwardingUrlOutputReference <a name="PageRuleActionsForwardingUrlOutputReference" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrlOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import page_rule

pageRule.PageRuleActionsForwardingUrlOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrlOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrlOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrlOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrlOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrlOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrlOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrlOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrlOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrlOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrlOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrlOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrlOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrlOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrlOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrlOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrlOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrlOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrlOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrlOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrlOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrlOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrlOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrlOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrlOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrlOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrlOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrlOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrlOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrlOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrlOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrlOutputReference.property.statusCodeInput">status_code_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrlOutputReference.property.urlInput">url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrlOutputReference.property.statusCode">status_code</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrlOutputReference.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrlOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrl">PageRuleActionsForwardingUrl</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrlOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrlOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `status_code_input`<sup>Optional</sup> <a name="status_code_input" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrlOutputReference.property.statusCodeInput"></a>

```python
status_code_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `url_input`<sup>Optional</sup> <a name="url_input" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrlOutputReference.property.urlInput"></a>

```python
url_input: str
```

- *Type:* str

---

##### `status_code`<sup>Required</sup> <a name="status_code" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrlOutputReference.property.statusCode"></a>

```python
status_code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrlOutputReference.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrlOutputReference.property.internalValue"></a>

```python
internal_value: PageRuleActionsForwardingUrl
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrl">PageRuleActionsForwardingUrl</a>

---


### PageRuleActionsMinifyList <a name="PageRuleActionsMinifyList" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import page_rule

pageRule.PageRuleActionsMinifyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> PageRuleActionsMinifyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinify">PageRuleActionsMinify</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[PageRuleActionsMinify]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinify">PageRuleActionsMinify</a>]]

---


### PageRuleActionsMinifyOutputReference <a name="PageRuleActionsMinifyOutputReference" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import page_rule

pageRule.PageRuleActionsMinifyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.property.cssInput">css_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.property.htmlInput">html_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.property.jsInput">js_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.property.css">css</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.property.html">html</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.property.js">js</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinify">PageRuleActionsMinify</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `css_input`<sup>Optional</sup> <a name="css_input" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.property.cssInput"></a>

```python
css_input: str
```

- *Type:* str

---

##### `html_input`<sup>Optional</sup> <a name="html_input" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.property.htmlInput"></a>

```python
html_input: str
```

- *Type:* str

---

##### `js_input`<sup>Optional</sup> <a name="js_input" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.property.jsInput"></a>

```python
js_input: str
```

- *Type:* str

---

##### `css`<sup>Required</sup> <a name="css" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.property.css"></a>

```python
css: str
```

- *Type:* str

---

##### `html`<sup>Required</sup> <a name="html" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.property.html"></a>

```python
html: str
```

- *Type:* str

---

##### `js`<sup>Required</sup> <a name="js" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.property.js"></a>

```python
js: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, PageRuleActionsMinify]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinify">PageRuleActionsMinify</a>]

---


### PageRuleActionsOutputReference <a name="PageRuleActionsOutputReference" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import page_rule

pageRule.PageRuleActionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.putCacheKeyFields">put_cache_key_fields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.putCacheTtlByStatus">put_cache_ttl_by_status</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.putForwardingUrl">put_forwarding_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.putMinify">put_minify</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetAlwaysUseHttps">reset_always_use_https</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetAutomaticHttpsRewrites">reset_automatic_https_rewrites</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetBrowserCacheTtl">reset_browser_cache_ttl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetBrowserCheck">reset_browser_check</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetBypassCacheOnCookie">reset_bypass_cache_on_cookie</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetCacheByDeviceType">reset_cache_by_device_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetCacheDeceptionArmor">reset_cache_deception_armor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetCacheKeyFields">reset_cache_key_fields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetCacheLevel">reset_cache_level</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetCacheOnCookie">reset_cache_on_cookie</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetCacheTtlByStatus">reset_cache_ttl_by_status</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetDisableApps">reset_disable_apps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetDisablePerformance">reset_disable_performance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetDisableRailgun">reset_disable_railgun</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetDisableSecurity">reset_disable_security</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetDisableZaraz">reset_disable_zaraz</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetEdgeCacheTtl">reset_edge_cache_ttl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetEmailObfuscation">reset_email_obfuscation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetExplicitCacheControl">reset_explicit_cache_control</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetForwardingUrl">reset_forwarding_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetHostHeaderOverride">reset_host_header_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetIpGeolocation">reset_ip_geolocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetMinify">reset_minify</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetMirage">reset_mirage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetOpportunisticEncryption">reset_opportunistic_encryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetOriginErrorPagePassThru">reset_origin_error_page_pass_thru</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetPolish">reset_polish</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetResolveOverride">reset_resolve_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetRespectStrongEtag">reset_respect_strong_etag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetResponseBuffering">reset_response_buffering</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetRocketLoader">reset_rocket_loader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetSecurityLevel">reset_security_level</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetServerSideExclude">reset_server_side_exclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetSortQueryStringForCache">reset_sort_query_string_for_cache</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetSsl">reset_ssl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetTrueClientIpHeader">reset_true_client_ip_header</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetWaf">reset_waf</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_cache_key_fields` <a name="put_cache_key_fields" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.putCacheKeyFields"></a>

```python
def put_cache_key_fields(
  host: PageRuleActionsCacheKeyFieldsHost,
  query_string: PageRuleActionsCacheKeyFieldsQueryString,
  user: PageRuleActionsCacheKeyFieldsUser,
  cookie: PageRuleActionsCacheKeyFieldsCookie = None,
  header: PageRuleActionsCacheKeyFieldsHeader = None
) -> None
```

###### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.putCacheKeyFields.parameter.host"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHost">PageRuleActionsCacheKeyFieldsHost</a>

host block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#host PageRule#host}

---

###### `query_string`<sup>Required</sup> <a name="query_string" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.putCacheKeyFields.parameter.queryString"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryString">PageRuleActionsCacheKeyFieldsQueryString</a>

query_string block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#query_string PageRule#query_string}

---

###### `user`<sup>Required</sup> <a name="user" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.putCacheKeyFields.parameter.user"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUser">PageRuleActionsCacheKeyFieldsUser</a>

user block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#user PageRule#user}

---

###### `cookie`<sup>Optional</sup> <a name="cookie" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.putCacheKeyFields.parameter.cookie"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookie">PageRuleActionsCacheKeyFieldsCookie</a>

cookie block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#cookie PageRule#cookie}

---

###### `header`<sup>Optional</sup> <a name="header" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.putCacheKeyFields.parameter.header"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeader">PageRuleActionsCacheKeyFieldsHeader</a>

header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#header PageRule#header}

---

##### `put_cache_ttl_by_status` <a name="put_cache_ttl_by_status" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.putCacheTtlByStatus"></a>

```python
def put_cache_ttl_by_status(
  value: typing.Union[IResolvable, typing.List[PageRuleActionsCacheTtlByStatus]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.putCacheTtlByStatus.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatus">PageRuleActionsCacheTtlByStatus</a>]]

---

##### `put_forwarding_url` <a name="put_forwarding_url" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.putForwardingUrl"></a>

```python
def put_forwarding_url(
  status_code: typing.Union[int, float],
  url: str
) -> None
```

###### `status_code`<sup>Required</sup> <a name="status_code" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.putForwardingUrl.parameter.statusCode"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#status_code PageRule#status_code}.

---

###### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.putForwardingUrl.parameter.url"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/page_rule#url PageRule#url}.

---

##### `put_minify` <a name="put_minify" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.putMinify"></a>

```python
def put_minify(
  value: typing.Union[IResolvable, typing.List[PageRuleActionsMinify]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.putMinify.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinify">PageRuleActionsMinify</a>]]

---

##### `reset_always_use_https` <a name="reset_always_use_https" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetAlwaysUseHttps"></a>

```python
def reset_always_use_https() -> None
```

##### `reset_automatic_https_rewrites` <a name="reset_automatic_https_rewrites" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetAutomaticHttpsRewrites"></a>

```python
def reset_automatic_https_rewrites() -> None
```

##### `reset_browser_cache_ttl` <a name="reset_browser_cache_ttl" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetBrowserCacheTtl"></a>

```python
def reset_browser_cache_ttl() -> None
```

##### `reset_browser_check` <a name="reset_browser_check" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetBrowserCheck"></a>

```python
def reset_browser_check() -> None
```

##### `reset_bypass_cache_on_cookie` <a name="reset_bypass_cache_on_cookie" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetBypassCacheOnCookie"></a>

```python
def reset_bypass_cache_on_cookie() -> None
```

##### `reset_cache_by_device_type` <a name="reset_cache_by_device_type" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetCacheByDeviceType"></a>

```python
def reset_cache_by_device_type() -> None
```

##### `reset_cache_deception_armor` <a name="reset_cache_deception_armor" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetCacheDeceptionArmor"></a>

```python
def reset_cache_deception_armor() -> None
```

##### `reset_cache_key_fields` <a name="reset_cache_key_fields" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetCacheKeyFields"></a>

```python
def reset_cache_key_fields() -> None
```

##### `reset_cache_level` <a name="reset_cache_level" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetCacheLevel"></a>

```python
def reset_cache_level() -> None
```

##### `reset_cache_on_cookie` <a name="reset_cache_on_cookie" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetCacheOnCookie"></a>

```python
def reset_cache_on_cookie() -> None
```

##### `reset_cache_ttl_by_status` <a name="reset_cache_ttl_by_status" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetCacheTtlByStatus"></a>

```python
def reset_cache_ttl_by_status() -> None
```

##### `reset_disable_apps` <a name="reset_disable_apps" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetDisableApps"></a>

```python
def reset_disable_apps() -> None
```

##### `reset_disable_performance` <a name="reset_disable_performance" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetDisablePerformance"></a>

```python
def reset_disable_performance() -> None
```

##### `reset_disable_railgun` <a name="reset_disable_railgun" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetDisableRailgun"></a>

```python
def reset_disable_railgun() -> None
```

##### `reset_disable_security` <a name="reset_disable_security" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetDisableSecurity"></a>

```python
def reset_disable_security() -> None
```

##### `reset_disable_zaraz` <a name="reset_disable_zaraz" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetDisableZaraz"></a>

```python
def reset_disable_zaraz() -> None
```

##### `reset_edge_cache_ttl` <a name="reset_edge_cache_ttl" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetEdgeCacheTtl"></a>

```python
def reset_edge_cache_ttl() -> None
```

##### `reset_email_obfuscation` <a name="reset_email_obfuscation" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetEmailObfuscation"></a>

```python
def reset_email_obfuscation() -> None
```

##### `reset_explicit_cache_control` <a name="reset_explicit_cache_control" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetExplicitCacheControl"></a>

```python
def reset_explicit_cache_control() -> None
```

##### `reset_forwarding_url` <a name="reset_forwarding_url" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetForwardingUrl"></a>

```python
def reset_forwarding_url() -> None
```

##### `reset_host_header_override` <a name="reset_host_header_override" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetHostHeaderOverride"></a>

```python
def reset_host_header_override() -> None
```

##### `reset_ip_geolocation` <a name="reset_ip_geolocation" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetIpGeolocation"></a>

```python
def reset_ip_geolocation() -> None
```

##### `reset_minify` <a name="reset_minify" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetMinify"></a>

```python
def reset_minify() -> None
```

##### `reset_mirage` <a name="reset_mirage" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetMirage"></a>

```python
def reset_mirage() -> None
```

##### `reset_opportunistic_encryption` <a name="reset_opportunistic_encryption" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetOpportunisticEncryption"></a>

```python
def reset_opportunistic_encryption() -> None
```

##### `reset_origin_error_page_pass_thru` <a name="reset_origin_error_page_pass_thru" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetOriginErrorPagePassThru"></a>

```python
def reset_origin_error_page_pass_thru() -> None
```

##### `reset_polish` <a name="reset_polish" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetPolish"></a>

```python
def reset_polish() -> None
```

##### `reset_resolve_override` <a name="reset_resolve_override" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetResolveOverride"></a>

```python
def reset_resolve_override() -> None
```

##### `reset_respect_strong_etag` <a name="reset_respect_strong_etag" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetRespectStrongEtag"></a>

```python
def reset_respect_strong_etag() -> None
```

##### `reset_response_buffering` <a name="reset_response_buffering" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetResponseBuffering"></a>

```python
def reset_response_buffering() -> None
```

##### `reset_rocket_loader` <a name="reset_rocket_loader" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetRocketLoader"></a>

```python
def reset_rocket_loader() -> None
```

##### `reset_security_level` <a name="reset_security_level" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetSecurityLevel"></a>

```python
def reset_security_level() -> None
```

##### `reset_server_side_exclude` <a name="reset_server_side_exclude" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetServerSideExclude"></a>

```python
def reset_server_side_exclude() -> None
```

##### `reset_sort_query_string_for_cache` <a name="reset_sort_query_string_for_cache" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetSortQueryStringForCache"></a>

```python
def reset_sort_query_string_for_cache() -> None
```

##### `reset_ssl` <a name="reset_ssl" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetSsl"></a>

```python
def reset_ssl() -> None
```

##### `reset_true_client_ip_header` <a name="reset_true_client_ip_header" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetTrueClientIpHeader"></a>

```python
def reset_true_client_ip_header() -> None
```

##### `reset_waf` <a name="reset_waf" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetWaf"></a>

```python
def reset_waf() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.cacheKeyFields">cache_key_fields</a></code> | <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference">PageRuleActionsCacheKeyFieldsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.cacheTtlByStatus">cache_ttl_by_status</a></code> | <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusList">PageRuleActionsCacheTtlByStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.forwardingUrl">forwarding_url</a></code> | <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrlOutputReference">PageRuleActionsForwardingUrlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.minify">minify</a></code> | <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyList">PageRuleActionsMinifyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.alwaysUseHttpsInput">always_use_https_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.automaticHttpsRewritesInput">automatic_https_rewrites_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.browserCacheTtlInput">browser_cache_ttl_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.browserCheckInput">browser_check_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.bypassCacheOnCookieInput">bypass_cache_on_cookie_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.cacheByDeviceTypeInput">cache_by_device_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.cacheDeceptionArmorInput">cache_deception_armor_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.cacheKeyFieldsInput">cache_key_fields_input</a></code> | <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFields">PageRuleActionsCacheKeyFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.cacheLevelInput">cache_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.cacheOnCookieInput">cache_on_cookie_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.cacheTtlByStatusInput">cache_ttl_by_status_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatus">PageRuleActionsCacheTtlByStatus</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.disableAppsInput">disable_apps_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.disablePerformanceInput">disable_performance_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.disableRailgunInput">disable_railgun_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.disableSecurityInput">disable_security_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.disableZarazInput">disable_zaraz_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.edgeCacheTtlInput">edge_cache_ttl_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.emailObfuscationInput">email_obfuscation_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.explicitCacheControlInput">explicit_cache_control_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.forwardingUrlInput">forwarding_url_input</a></code> | <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrl">PageRuleActionsForwardingUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.hostHeaderOverrideInput">host_header_override_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.ipGeolocationInput">ip_geolocation_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.minifyInput">minify_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinify">PageRuleActionsMinify</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.mirageInput">mirage_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.opportunisticEncryptionInput">opportunistic_encryption_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.originErrorPagePassThruInput">origin_error_page_pass_thru_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.polishInput">polish_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.resolveOverrideInput">resolve_override_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.respectStrongEtagInput">respect_strong_etag_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.responseBufferingInput">response_buffering_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.rocketLoaderInput">rocket_loader_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.securityLevelInput">security_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.serverSideExcludeInput">server_side_exclude_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.sortQueryStringForCacheInput">sort_query_string_for_cache_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.sslInput">ssl_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.trueClientIpHeaderInput">true_client_ip_header_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.wafInput">waf_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.alwaysUseHttps">always_use_https</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.automaticHttpsRewrites">automatic_https_rewrites</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.browserCacheTtl">browser_cache_ttl</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.browserCheck">browser_check</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.bypassCacheOnCookie">bypass_cache_on_cookie</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.cacheByDeviceType">cache_by_device_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.cacheDeceptionArmor">cache_deception_armor</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.cacheLevel">cache_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.cacheOnCookie">cache_on_cookie</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.disableApps">disable_apps</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.disablePerformance">disable_performance</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.disableRailgun">disable_railgun</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.disableSecurity">disable_security</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.disableZaraz">disable_zaraz</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.edgeCacheTtl">edge_cache_ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.emailObfuscation">email_obfuscation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.explicitCacheControl">explicit_cache_control</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.hostHeaderOverride">host_header_override</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.ipGeolocation">ip_geolocation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.mirage">mirage</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.opportunisticEncryption">opportunistic_encryption</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.originErrorPagePassThru">origin_error_page_pass_thru</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.polish">polish</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.resolveOverride">resolve_override</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.respectStrongEtag">respect_strong_etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.responseBuffering">response_buffering</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.rocketLoader">rocket_loader</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.securityLevel">security_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.serverSideExclude">server_side_exclude</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.sortQueryStringForCache">sort_query_string_for_cache</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.ssl">ssl</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.trueClientIpHeader">true_client_ip_header</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.waf">waf</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActions">PageRuleActions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cache_key_fields`<sup>Required</sup> <a name="cache_key_fields" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.cacheKeyFields"></a>

```python
cache_key_fields: PageRuleActionsCacheKeyFieldsOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference">PageRuleActionsCacheKeyFieldsOutputReference</a>

---

##### `cache_ttl_by_status`<sup>Required</sup> <a name="cache_ttl_by_status" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.cacheTtlByStatus"></a>

```python
cache_ttl_by_status: PageRuleActionsCacheTtlByStatusList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusList">PageRuleActionsCacheTtlByStatusList</a>

---

##### `forwarding_url`<sup>Required</sup> <a name="forwarding_url" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.forwardingUrl"></a>

```python
forwarding_url: PageRuleActionsForwardingUrlOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrlOutputReference">PageRuleActionsForwardingUrlOutputReference</a>

---

##### `minify`<sup>Required</sup> <a name="minify" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.minify"></a>

```python
minify: PageRuleActionsMinifyList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyList">PageRuleActionsMinifyList</a>

---

##### `always_use_https_input`<sup>Optional</sup> <a name="always_use_https_input" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.alwaysUseHttpsInput"></a>

```python
always_use_https_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `automatic_https_rewrites_input`<sup>Optional</sup> <a name="automatic_https_rewrites_input" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.automaticHttpsRewritesInput"></a>

```python
automatic_https_rewrites_input: str
```

- *Type:* str

---

##### `browser_cache_ttl_input`<sup>Optional</sup> <a name="browser_cache_ttl_input" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.browserCacheTtlInput"></a>

```python
browser_cache_ttl_input: str
```

- *Type:* str

---

##### `browser_check_input`<sup>Optional</sup> <a name="browser_check_input" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.browserCheckInput"></a>

```python
browser_check_input: str
```

- *Type:* str

---

##### `bypass_cache_on_cookie_input`<sup>Optional</sup> <a name="bypass_cache_on_cookie_input" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.bypassCacheOnCookieInput"></a>

```python
bypass_cache_on_cookie_input: str
```

- *Type:* str

---

##### `cache_by_device_type_input`<sup>Optional</sup> <a name="cache_by_device_type_input" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.cacheByDeviceTypeInput"></a>

```python
cache_by_device_type_input: str
```

- *Type:* str

---

##### `cache_deception_armor_input`<sup>Optional</sup> <a name="cache_deception_armor_input" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.cacheDeceptionArmorInput"></a>

```python
cache_deception_armor_input: str
```

- *Type:* str

---

##### `cache_key_fields_input`<sup>Optional</sup> <a name="cache_key_fields_input" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.cacheKeyFieldsInput"></a>

```python
cache_key_fields_input: PageRuleActionsCacheKeyFields
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFields">PageRuleActionsCacheKeyFields</a>

---

##### `cache_level_input`<sup>Optional</sup> <a name="cache_level_input" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.cacheLevelInput"></a>

```python
cache_level_input: str
```

- *Type:* str

---

##### `cache_on_cookie_input`<sup>Optional</sup> <a name="cache_on_cookie_input" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.cacheOnCookieInput"></a>

```python
cache_on_cookie_input: str
```

- *Type:* str

---

##### `cache_ttl_by_status_input`<sup>Optional</sup> <a name="cache_ttl_by_status_input" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.cacheTtlByStatusInput"></a>

```python
cache_ttl_by_status_input: typing.Union[IResolvable, typing.List[PageRuleActionsCacheTtlByStatus]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatus">PageRuleActionsCacheTtlByStatus</a>]]

---

##### `disable_apps_input`<sup>Optional</sup> <a name="disable_apps_input" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.disableAppsInput"></a>

```python
disable_apps_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `disable_performance_input`<sup>Optional</sup> <a name="disable_performance_input" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.disablePerformanceInput"></a>

```python
disable_performance_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `disable_railgun_input`<sup>Optional</sup> <a name="disable_railgun_input" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.disableRailgunInput"></a>

```python
disable_railgun_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `disable_security_input`<sup>Optional</sup> <a name="disable_security_input" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.disableSecurityInput"></a>

```python
disable_security_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `disable_zaraz_input`<sup>Optional</sup> <a name="disable_zaraz_input" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.disableZarazInput"></a>

```python
disable_zaraz_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `edge_cache_ttl_input`<sup>Optional</sup> <a name="edge_cache_ttl_input" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.edgeCacheTtlInput"></a>

```python
edge_cache_ttl_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `email_obfuscation_input`<sup>Optional</sup> <a name="email_obfuscation_input" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.emailObfuscationInput"></a>

```python
email_obfuscation_input: str
```

- *Type:* str

---

##### `explicit_cache_control_input`<sup>Optional</sup> <a name="explicit_cache_control_input" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.explicitCacheControlInput"></a>

```python
explicit_cache_control_input: str
```

- *Type:* str

---

##### `forwarding_url_input`<sup>Optional</sup> <a name="forwarding_url_input" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.forwardingUrlInput"></a>

```python
forwarding_url_input: PageRuleActionsForwardingUrl
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrl">PageRuleActionsForwardingUrl</a>

---

##### `host_header_override_input`<sup>Optional</sup> <a name="host_header_override_input" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.hostHeaderOverrideInput"></a>

```python
host_header_override_input: str
```

- *Type:* str

---

##### `ip_geolocation_input`<sup>Optional</sup> <a name="ip_geolocation_input" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.ipGeolocationInput"></a>

```python
ip_geolocation_input: str
```

- *Type:* str

---

##### `minify_input`<sup>Optional</sup> <a name="minify_input" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.minifyInput"></a>

```python
minify_input: typing.Union[IResolvable, typing.List[PageRuleActionsMinify]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinify">PageRuleActionsMinify</a>]]

---

##### `mirage_input`<sup>Optional</sup> <a name="mirage_input" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.mirageInput"></a>

```python
mirage_input: str
```

- *Type:* str

---

##### `opportunistic_encryption_input`<sup>Optional</sup> <a name="opportunistic_encryption_input" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.opportunisticEncryptionInput"></a>

```python
opportunistic_encryption_input: str
```

- *Type:* str

---

##### `origin_error_page_pass_thru_input`<sup>Optional</sup> <a name="origin_error_page_pass_thru_input" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.originErrorPagePassThruInput"></a>

```python
origin_error_page_pass_thru_input: str
```

- *Type:* str

---

##### `polish_input`<sup>Optional</sup> <a name="polish_input" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.polishInput"></a>

```python
polish_input: str
```

- *Type:* str

---

##### `resolve_override_input`<sup>Optional</sup> <a name="resolve_override_input" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.resolveOverrideInput"></a>

```python
resolve_override_input: str
```

- *Type:* str

---

##### `respect_strong_etag_input`<sup>Optional</sup> <a name="respect_strong_etag_input" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.respectStrongEtagInput"></a>

```python
respect_strong_etag_input: str
```

- *Type:* str

---

##### `response_buffering_input`<sup>Optional</sup> <a name="response_buffering_input" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.responseBufferingInput"></a>

```python
response_buffering_input: str
```

- *Type:* str

---

##### `rocket_loader_input`<sup>Optional</sup> <a name="rocket_loader_input" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.rocketLoaderInput"></a>

```python
rocket_loader_input: str
```

- *Type:* str

---

##### `security_level_input`<sup>Optional</sup> <a name="security_level_input" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.securityLevelInput"></a>

```python
security_level_input: str
```

- *Type:* str

---

##### `server_side_exclude_input`<sup>Optional</sup> <a name="server_side_exclude_input" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.serverSideExcludeInput"></a>

```python
server_side_exclude_input: str
```

- *Type:* str

---

##### `sort_query_string_for_cache_input`<sup>Optional</sup> <a name="sort_query_string_for_cache_input" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.sortQueryStringForCacheInput"></a>

```python
sort_query_string_for_cache_input: str
```

- *Type:* str

---

##### `ssl_input`<sup>Optional</sup> <a name="ssl_input" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.sslInput"></a>

```python
ssl_input: str
```

- *Type:* str

---

##### `true_client_ip_header_input`<sup>Optional</sup> <a name="true_client_ip_header_input" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.trueClientIpHeaderInput"></a>

```python
true_client_ip_header_input: str
```

- *Type:* str

---

##### `waf_input`<sup>Optional</sup> <a name="waf_input" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.wafInput"></a>

```python
waf_input: str
```

- *Type:* str

---

##### `always_use_https`<sup>Required</sup> <a name="always_use_https" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.alwaysUseHttps"></a>

```python
always_use_https: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `automatic_https_rewrites`<sup>Required</sup> <a name="automatic_https_rewrites" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.automaticHttpsRewrites"></a>

```python
automatic_https_rewrites: str
```

- *Type:* str

---

##### `browser_cache_ttl`<sup>Required</sup> <a name="browser_cache_ttl" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.browserCacheTtl"></a>

```python
browser_cache_ttl: str
```

- *Type:* str

---

##### `browser_check`<sup>Required</sup> <a name="browser_check" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.browserCheck"></a>

```python
browser_check: str
```

- *Type:* str

---

##### `bypass_cache_on_cookie`<sup>Required</sup> <a name="bypass_cache_on_cookie" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.bypassCacheOnCookie"></a>

```python
bypass_cache_on_cookie: str
```

- *Type:* str

---

##### `cache_by_device_type`<sup>Required</sup> <a name="cache_by_device_type" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.cacheByDeviceType"></a>

```python
cache_by_device_type: str
```

- *Type:* str

---

##### `cache_deception_armor`<sup>Required</sup> <a name="cache_deception_armor" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.cacheDeceptionArmor"></a>

```python
cache_deception_armor: str
```

- *Type:* str

---

##### `cache_level`<sup>Required</sup> <a name="cache_level" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.cacheLevel"></a>

```python
cache_level: str
```

- *Type:* str

---

##### `cache_on_cookie`<sup>Required</sup> <a name="cache_on_cookie" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.cacheOnCookie"></a>

```python
cache_on_cookie: str
```

- *Type:* str

---

##### `disable_apps`<sup>Required</sup> <a name="disable_apps" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.disableApps"></a>

```python
disable_apps: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `disable_performance`<sup>Required</sup> <a name="disable_performance" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.disablePerformance"></a>

```python
disable_performance: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `disable_railgun`<sup>Required</sup> <a name="disable_railgun" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.disableRailgun"></a>

```python
disable_railgun: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `disable_security`<sup>Required</sup> <a name="disable_security" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.disableSecurity"></a>

```python
disable_security: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `disable_zaraz`<sup>Required</sup> <a name="disable_zaraz" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.disableZaraz"></a>

```python
disable_zaraz: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `edge_cache_ttl`<sup>Required</sup> <a name="edge_cache_ttl" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.edgeCacheTtl"></a>

```python
edge_cache_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `email_obfuscation`<sup>Required</sup> <a name="email_obfuscation" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.emailObfuscation"></a>

```python
email_obfuscation: str
```

- *Type:* str

---

##### `explicit_cache_control`<sup>Required</sup> <a name="explicit_cache_control" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.explicitCacheControl"></a>

```python
explicit_cache_control: str
```

- *Type:* str

---

##### `host_header_override`<sup>Required</sup> <a name="host_header_override" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.hostHeaderOverride"></a>

```python
host_header_override: str
```

- *Type:* str

---

##### `ip_geolocation`<sup>Required</sup> <a name="ip_geolocation" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.ipGeolocation"></a>

```python
ip_geolocation: str
```

- *Type:* str

---

##### `mirage`<sup>Required</sup> <a name="mirage" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.mirage"></a>

```python
mirage: str
```

- *Type:* str

---

##### `opportunistic_encryption`<sup>Required</sup> <a name="opportunistic_encryption" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.opportunisticEncryption"></a>

```python
opportunistic_encryption: str
```

- *Type:* str

---

##### `origin_error_page_pass_thru`<sup>Required</sup> <a name="origin_error_page_pass_thru" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.originErrorPagePassThru"></a>

```python
origin_error_page_pass_thru: str
```

- *Type:* str

---

##### `polish`<sup>Required</sup> <a name="polish" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.polish"></a>

```python
polish: str
```

- *Type:* str

---

##### `resolve_override`<sup>Required</sup> <a name="resolve_override" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.resolveOverride"></a>

```python
resolve_override: str
```

- *Type:* str

---

##### `respect_strong_etag`<sup>Required</sup> <a name="respect_strong_etag" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.respectStrongEtag"></a>

```python
respect_strong_etag: str
```

- *Type:* str

---

##### `response_buffering`<sup>Required</sup> <a name="response_buffering" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.responseBuffering"></a>

```python
response_buffering: str
```

- *Type:* str

---

##### `rocket_loader`<sup>Required</sup> <a name="rocket_loader" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.rocketLoader"></a>

```python
rocket_loader: str
```

- *Type:* str

---

##### `security_level`<sup>Required</sup> <a name="security_level" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.securityLevel"></a>

```python
security_level: str
```

- *Type:* str

---

##### `server_side_exclude`<sup>Required</sup> <a name="server_side_exclude" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.serverSideExclude"></a>

```python
server_side_exclude: str
```

- *Type:* str

---

##### `sort_query_string_for_cache`<sup>Required</sup> <a name="sort_query_string_for_cache" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.sortQueryStringForCache"></a>

```python
sort_query_string_for_cache: str
```

- *Type:* str

---

##### `ssl`<sup>Required</sup> <a name="ssl" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.ssl"></a>

```python
ssl: str
```

- *Type:* str

---

##### `true_client_ip_header`<sup>Required</sup> <a name="true_client_ip_header" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.trueClientIpHeader"></a>

```python
true_client_ip_header: str
```

- *Type:* str

---

##### `waf`<sup>Required</sup> <a name="waf" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.waf"></a>

```python
waf: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.internalValue"></a>

```python
internal_value: PageRuleActions
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActions">PageRuleActions</a>

---



