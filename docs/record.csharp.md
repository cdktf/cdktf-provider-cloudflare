# `cloudflare_record`

Refer to the Terraform Registory for docs: [`cloudflare_record`](https://registry.terraform.io/providers/cloudflare/cloudflare/4.4.0/docs/resources/record).

# `record` Submodule <a name="`record` Submodule" id="@cdktf/provider-cloudflare.record"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Record <a name="Record" id="@cdktf/provider-cloudflare.record.Record"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.4.0/docs/resources/record cloudflare_record}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.record.Record.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new Record(Construct Scope, string Id, RecordConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-cloudflare.record.RecordConfig">RecordConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.record.Record.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.record.Record.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-cloudflare.record.Record.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.record.RecordConfig">RecordConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.putData">PutData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.resetAllowOverwrite">ResetAllowOverwrite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.resetData">ResetData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.resetPriority">ResetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.resetProxied">ResetProxied</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.resetTtl">ResetTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.record.Record.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.record.Record.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-cloudflare.record.Record.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.record.Record.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.record.Record.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-cloudflare.record.Record.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.record.Record.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.record.Record.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.record.Record.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.record.Record.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.record.Record.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.record.Record.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.record.Record.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.record.Record.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.record.Record.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.record.Record.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.record.Record.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.record.Record.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.record.Record.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.record.Record.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.record.Record.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.record.Record.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.record.Record.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.record.Record.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.record.Record.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.record.Record.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.record.Record.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.record.Record.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.record.Record.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutData` <a name="PutData" id="@cdktf/provider-cloudflare.record.Record.putData"></a>

```csharp
private void PutData(RecordData Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.record.Record.putData.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.record.RecordData">RecordData</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-cloudflare.record.Record.putTimeouts"></a>

```csharp
private void PutTimeouts(RecordTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.record.Record.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.record.RecordTimeouts">RecordTimeouts</a>

---

##### `ResetAllowOverwrite` <a name="ResetAllowOverwrite" id="@cdktf/provider-cloudflare.record.Record.resetAllowOverwrite"></a>

```csharp
private void ResetAllowOverwrite()
```

##### `ResetComment` <a name="ResetComment" id="@cdktf/provider-cloudflare.record.Record.resetComment"></a>

```csharp
private void ResetComment()
```

##### `ResetData` <a name="ResetData" id="@cdktf/provider-cloudflare.record.Record.resetData"></a>

```csharp
private void ResetData()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-cloudflare.record.Record.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPriority` <a name="ResetPriority" id="@cdktf/provider-cloudflare.record.Record.resetPriority"></a>

```csharp
private void ResetPriority()
```

##### `ResetProxied` <a name="ResetProxied" id="@cdktf/provider-cloudflare.record.Record.resetProxied"></a>

```csharp
private void ResetProxied()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-cloudflare.record.Record.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-cloudflare.record.Record.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetTtl` <a name="ResetTtl" id="@cdktf/provider-cloudflare.record.Record.resetTtl"></a>

```csharp
private void ResetTtl()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-cloudflare.record.Record.resetValue"></a>

```csharp
private void ResetValue()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.record.Record.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

Record.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.record.Record.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.record.Record.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

Record.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.record.Record.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-cloudflare.record.Record.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

Record.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.record.Record.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.createdOn">CreatedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.data">Data</a></code> | <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference">RecordDataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.hostname">Hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.metadata">Metadata</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.modifiedOn">ModifiedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.proxiable">Proxiable</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference">RecordTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.allowOverwriteInput">AllowOverwriteInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.commentInput">CommentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.dataInput">DataInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.record.RecordData">RecordData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.priorityInput">PriorityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.proxiedInput">ProxiedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.tagsInput">TagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.ttlInput">TtlInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.zoneIdInput">ZoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.allowOverwrite">AllowOverwrite</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.priority">Priority</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.proxied">Proxied</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.tags">Tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.ttl">Ttl</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.zoneId">ZoneId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.record.Record.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.record.Record.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.record.Record.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.record.Record.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.record.Record.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.record.Record.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.record.Record.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.record.Record.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.record.Record.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.record.Record.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.record.Record.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.record.Record.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.record.Record.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.record.Record.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktf/provider-cloudflare.record.Record.property.createdOn"></a>

```csharp
public string CreatedOn { get; }
```

- *Type:* string

---

##### `Data`<sup>Required</sup> <a name="Data" id="@cdktf/provider-cloudflare.record.Record.property.data"></a>

```csharp
public RecordDataOutputReference Data { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference">RecordDataOutputReference</a>

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktf/provider-cloudflare.record.Record.property.hostname"></a>

```csharp
public string Hostname { get; }
```

- *Type:* string

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-cloudflare.record.Record.property.metadata"></a>

```csharp
public StringMap Metadata { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `ModifiedOn`<sup>Required</sup> <a name="ModifiedOn" id="@cdktf/provider-cloudflare.record.Record.property.modifiedOn"></a>

```csharp
public string ModifiedOn { get; }
```

- *Type:* string

---

##### `Proxiable`<sup>Required</sup> <a name="Proxiable" id="@cdktf/provider-cloudflare.record.Record.property.proxiable"></a>

```csharp
public IResolvable Proxiable { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-cloudflare.record.Record.property.timeouts"></a>

```csharp
public RecordTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference">RecordTimeoutsOutputReference</a>

---

##### `AllowOverwriteInput`<sup>Optional</sup> <a name="AllowOverwriteInput" id="@cdktf/provider-cloudflare.record.Record.property.allowOverwriteInput"></a>

```csharp
public object AllowOverwriteInput { get; }
```

- *Type:* object

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktf/provider-cloudflare.record.Record.property.commentInput"></a>

```csharp
public string CommentInput { get; }
```

- *Type:* string

---

##### `DataInput`<sup>Optional</sup> <a name="DataInput" id="@cdktf/provider-cloudflare.record.Record.property.dataInput"></a>

```csharp
public RecordData DataInput { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.record.RecordData">RecordData</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-cloudflare.record.Record.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.record.Record.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktf/provider-cloudflare.record.Record.property.priorityInput"></a>

```csharp
public double PriorityInput { get; }
```

- *Type:* double

---

##### `ProxiedInput`<sup>Optional</sup> <a name="ProxiedInput" id="@cdktf/provider-cloudflare.record.Record.property.proxiedInput"></a>

```csharp
public object ProxiedInput { get; }
```

- *Type:* object

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-cloudflare.record.Record.property.tagsInput"></a>

```csharp
public string[] TagsInput { get; }
```

- *Type:* string[]

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-cloudflare.record.Record.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `TtlInput`<sup>Optional</sup> <a name="TtlInput" id="@cdktf/provider-cloudflare.record.Record.property.ttlInput"></a>

```csharp
public double TtlInput { get; }
```

- *Type:* double

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-cloudflare.record.Record.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-cloudflare.record.Record.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `ZoneIdInput`<sup>Optional</sup> <a name="ZoneIdInput" id="@cdktf/provider-cloudflare.record.Record.property.zoneIdInput"></a>

```csharp
public string ZoneIdInput { get; }
```

- *Type:* string

---

##### `AllowOverwrite`<sup>Required</sup> <a name="AllowOverwrite" id="@cdktf/provider-cloudflare.record.Record.property.allowOverwrite"></a>

```csharp
public object AllowOverwrite { get; }
```

- *Type:* object

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-cloudflare.record.Record.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.record.Record.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.record.Record.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-cloudflare.record.Record.property.priority"></a>

```csharp
public double Priority { get; }
```

- *Type:* double

---

##### `Proxied`<sup>Required</sup> <a name="Proxied" id="@cdktf/provider-cloudflare.record.Record.property.proxied"></a>

```csharp
public object Proxied { get; }
```

- *Type:* object

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-cloudflare.record.Record.property.tags"></a>

```csharp
public string[] Tags { get; }
```

- *Type:* string[]

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktf/provider-cloudflare.record.Record.property.ttl"></a>

```csharp
public double Ttl { get; }
```

- *Type:* double

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-cloudflare.record.Record.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.record.Record.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.record.Record.property.zoneId"></a>

```csharp
public string ZoneId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.record.Record.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RecordConfig <a name="RecordConfig" id="@cdktf/provider-cloudflare.record.RecordConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.record.RecordConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new RecordConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string Type,
    string ZoneId,
    object AllowOverwrite = null,
    string Comment = null,
    RecordData Data = null,
    string Id = null,
    double Priority = null,
    object Proxied = null,
    string[] Tags = null,
    RecordTimeouts Timeouts = null,
    double Ttl = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordConfig.property.name">Name</a></code> | <code>string</code> | The name of the record. **Modifying this attribute will force creation of a new resource.**. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordConfig.property.type">Type</a></code> | <code>string</code> | The type of the record. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordConfig.property.zoneId">ZoneId</a></code> | <code>string</code> | The zone identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordConfig.property.allowOverwrite">AllowOverwrite</a></code> | <code>object</code> | Allow creation of this record in Terraform to overwrite an existing record, if any. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordConfig.property.comment">Comment</a></code> | <code>string</code> | Comments or notes about the DNS record. This field has no effect on DNS responses. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordConfig.property.data">Data</a></code> | <code><a href="#@cdktf/provider-cloudflare.record.RecordData">RecordData</a></code> | data block. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.4.0/docs/resources/record#id Record#id}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordConfig.property.priority">Priority</a></code> | <code>double</code> | The priority of the record. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordConfig.property.proxied">Proxied</a></code> | <code>object</code> | Whether the record gets Cloudflare's origin protection. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordConfig.property.tags">Tags</a></code> | <code>string[]</code> | Custom tags for the DNS record. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-cloudflare.record.RecordTimeouts">RecordTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordConfig.property.ttl">Ttl</a></code> | <code>double</code> | The TTL of the record. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordConfig.property.value">Value</a></code> | <code>string</code> | The value of the record. Conflicts with `data`. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.record.RecordConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.record.RecordConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.record.RecordConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.record.RecordConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.record.RecordConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.record.RecordConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.record.RecordConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.record.RecordConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the record. **Modifying this attribute will force creation of a new resource.**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.4.0/docs/resources/record#name Record#name}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-cloudflare.record.RecordConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The type of the record.

Available values: `A`, `AAAA`, `CAA`, `CNAME`, `TXT`, `SRV`, `LOC`, `MX`, `NS`, `SPF`, `CERT`, `DNSKEY`, `DS`, `NAPTR`, `SMIMEA`, `SSHFP`, `TLSA`, `URI`, `PTR`, `HTTPS`. **Modifying this attribute will force creation of a new resource.**

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.4.0/docs/resources/record#type Record#type}

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.record.RecordConfig.property.zoneId"></a>

```csharp
public string ZoneId { get; set; }
```

- *Type:* string

The zone identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.4.0/docs/resources/record#zone_id Record#zone_id}

---

##### `AllowOverwrite`<sup>Optional</sup> <a name="AllowOverwrite" id="@cdktf/provider-cloudflare.record.RecordConfig.property.allowOverwrite"></a>

```csharp
public object AllowOverwrite { get; set; }
```

- *Type:* object

Allow creation of this record in Terraform to overwrite an existing record, if any.

This does not affect the ability to update the record in Terraform and does not prevent other resources within Terraform or manual changes outside Terraform from overwriting this record. **This configuration is not recommended for most environments**. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.4.0/docs/resources/record#allow_overwrite Record#allow_overwrite}

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktf/provider-cloudflare.record.RecordConfig.property.comment"></a>

```csharp
public string Comment { get; set; }
```

- *Type:* string

Comments or notes about the DNS record. This field has no effect on DNS responses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.4.0/docs/resources/record#comment Record#comment}

---

##### `Data`<sup>Optional</sup> <a name="Data" id="@cdktf/provider-cloudflare.record.RecordConfig.property.data"></a>

```csharp
public RecordData Data { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.record.RecordData">RecordData</a>

data block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.4.0/docs/resources/record#data Record#data}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-cloudflare.record.RecordConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.4.0/docs/resources/record#id Record#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Priority`<sup>Optional</sup> <a name="Priority" id="@cdktf/provider-cloudflare.record.RecordConfig.property.priority"></a>

```csharp
public double Priority { get; set; }
```

- *Type:* double

The priority of the record.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.4.0/docs/resources/record#priority Record#priority}

---

##### `Proxied`<sup>Optional</sup> <a name="Proxied" id="@cdktf/provider-cloudflare.record.RecordConfig.property.proxied"></a>

```csharp
public object Proxied { get; set; }
```

- *Type:* object

Whether the record gets Cloudflare's origin protection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.4.0/docs/resources/record#proxied Record#proxied}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-cloudflare.record.RecordConfig.property.tags"></a>

```csharp
public string[] Tags { get; set; }
```

- *Type:* string[]

Custom tags for the DNS record.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.4.0/docs/resources/record#tags Record#tags}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-cloudflare.record.RecordConfig.property.timeouts"></a>

```csharp
public RecordTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.record.RecordTimeouts">RecordTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.4.0/docs/resources/record#timeouts Record#timeouts}

---

##### `Ttl`<sup>Optional</sup> <a name="Ttl" id="@cdktf/provider-cloudflare.record.RecordConfig.property.ttl"></a>

```csharp
public double Ttl { get; set; }
```

- *Type:* double

The TTL of the record.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.4.0/docs/resources/record#ttl Record#ttl}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-cloudflare.record.RecordConfig.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value of the record. Conflicts with `data`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.4.0/docs/resources/record#value Record#value}

---

### RecordData <a name="RecordData" id="@cdktf/provider-cloudflare.record.RecordData"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.record.RecordData.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new RecordData {
    double Algorithm = null,
    double Altitude = null,
    string Certificate = null,
    string Content = null,
    string Digest = null,
    double DigestType = null,
    string Fingerprint = null,
    string Flags = null,
    double KeyTag = null,
    double LatDegrees = null,
    string LatDirection = null,
    double LatMinutes = null,
    double LatSeconds = null,
    double LongDegrees = null,
    string LongDirection = null,
    double LongMinutes = null,
    double LongSeconds = null,
    double MatchingType = null,
    string Name = null,
    double Order = null,
    double Port = null,
    double PrecisionHorz = null,
    double PrecisionVert = null,
    double Preference = null,
    double Priority = null,
    string Proto = null,
    double Protocol = null,
    string PublicKey = null,
    string Regex = null,
    string Replacement = null,
    double Selector = null,
    string Service = null,
    double Size = null,
    string Tag = null,
    string Target = null,
    double Type = null,
    double Usage = null,
    string Value = null,
    double Weight = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.algorithm">Algorithm</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.4.0/docs/resources/record#algorithm Record#algorithm}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.altitude">Altitude</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.4.0/docs/resources/record#altitude Record#altitude}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.certificate">Certificate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.4.0/docs/resources/record#certificate Record#certificate}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.content">Content</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.4.0/docs/resources/record#content Record#content}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.digest">Digest</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.4.0/docs/resources/record#digest Record#digest}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.digestType">DigestType</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.4.0/docs/resources/record#digest_type Record#digest_type}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.fingerprint">Fingerprint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.4.0/docs/resources/record#fingerprint Record#fingerprint}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.flags">Flags</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.4.0/docs/resources/record#flags Record#flags}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.keyTag">KeyTag</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.4.0/docs/resources/record#key_tag Record#key_tag}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.latDegrees">LatDegrees</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.4.0/docs/resources/record#lat_degrees Record#lat_degrees}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.latDirection">LatDirection</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.4.0/docs/resources/record#lat_direction Record#lat_direction}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.latMinutes">LatMinutes</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.4.0/docs/resources/record#lat_minutes Record#lat_minutes}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.latSeconds">LatSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.4.0/docs/resources/record#lat_seconds Record#lat_seconds}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.longDegrees">LongDegrees</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.4.0/docs/resources/record#long_degrees Record#long_degrees}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.longDirection">LongDirection</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.4.0/docs/resources/record#long_direction Record#long_direction}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.longMinutes">LongMinutes</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.4.0/docs/resources/record#long_minutes Record#long_minutes}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.longSeconds">LongSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.4.0/docs/resources/record#long_seconds Record#long_seconds}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.matchingType">MatchingType</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.4.0/docs/resources/record#matching_type Record#matching_type}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.4.0/docs/resources/record#name Record#name}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.order">Order</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.4.0/docs/resources/record#order Record#order}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.port">Port</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.4.0/docs/resources/record#port Record#port}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.precisionHorz">PrecisionHorz</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.4.0/docs/resources/record#precision_horz Record#precision_horz}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.precisionVert">PrecisionVert</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.4.0/docs/resources/record#precision_vert Record#precision_vert}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.preference">Preference</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.4.0/docs/resources/record#preference Record#preference}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.priority">Priority</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.4.0/docs/resources/record#priority Record#priority}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.proto">Proto</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.4.0/docs/resources/record#proto Record#proto}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.protocol">Protocol</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.4.0/docs/resources/record#protocol Record#protocol}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.publicKey">PublicKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.4.0/docs/resources/record#public_key Record#public_key}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.regex">Regex</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.4.0/docs/resources/record#regex Record#regex}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.replacement">Replacement</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.4.0/docs/resources/record#replacement Record#replacement}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.selector">Selector</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.4.0/docs/resources/record#selector Record#selector}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.service">Service</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.4.0/docs/resources/record#service Record#service}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.size">Size</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.4.0/docs/resources/record#size Record#size}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.tag">Tag</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.4.0/docs/resources/record#tag Record#tag}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.target">Target</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.4.0/docs/resources/record#target Record#target}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.type">Type</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.4.0/docs/resources/record#type Record#type}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.usage">Usage</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.4.0/docs/resources/record#usage Record#usage}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.4.0/docs/resources/record#value Record#value}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.weight">Weight</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.4.0/docs/resources/record#weight Record#weight}. |

---

##### `Algorithm`<sup>Optional</sup> <a name="Algorithm" id="@cdktf/provider-cloudflare.record.RecordData.property.algorithm"></a>

```csharp
public double Algorithm { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.4.0/docs/resources/record#algorithm Record#algorithm}.

---

##### `Altitude`<sup>Optional</sup> <a name="Altitude" id="@cdktf/provider-cloudflare.record.RecordData.property.altitude"></a>

```csharp
public double Altitude { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.4.0/docs/resources/record#altitude Record#altitude}.

---

##### `Certificate`<sup>Optional</sup> <a name="Certificate" id="@cdktf/provider-cloudflare.record.RecordData.property.certificate"></a>

```csharp
public string Certificate { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.4.0/docs/resources/record#certificate Record#certificate}.

---

##### `Content`<sup>Optional</sup> <a name="Content" id="@cdktf/provider-cloudflare.record.RecordData.property.content"></a>

```csharp
public string Content { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.4.0/docs/resources/record#content Record#content}.

---

##### `Digest`<sup>Optional</sup> <a name="Digest" id="@cdktf/provider-cloudflare.record.RecordData.property.digest"></a>

```csharp
public string Digest { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.4.0/docs/resources/record#digest Record#digest}.

---

##### `DigestType`<sup>Optional</sup> <a name="DigestType" id="@cdktf/provider-cloudflare.record.RecordData.property.digestType"></a>

```csharp
public double DigestType { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.4.0/docs/resources/record#digest_type Record#digest_type}.

---

##### `Fingerprint`<sup>Optional</sup> <a name="Fingerprint" id="@cdktf/provider-cloudflare.record.RecordData.property.fingerprint"></a>

```csharp
public string Fingerprint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.4.0/docs/resources/record#fingerprint Record#fingerprint}.

---

##### `Flags`<sup>Optional</sup> <a name="Flags" id="@cdktf/provider-cloudflare.record.RecordData.property.flags"></a>

```csharp
public string Flags { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.4.0/docs/resources/record#flags Record#flags}.

---

##### `KeyTag`<sup>Optional</sup> <a name="KeyTag" id="@cdktf/provider-cloudflare.record.RecordData.property.keyTag"></a>

```csharp
public double KeyTag { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.4.0/docs/resources/record#key_tag Record#key_tag}.

---

##### `LatDegrees`<sup>Optional</sup> <a name="LatDegrees" id="@cdktf/provider-cloudflare.record.RecordData.property.latDegrees"></a>

```csharp
public double LatDegrees { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.4.0/docs/resources/record#lat_degrees Record#lat_degrees}.

---

##### `LatDirection`<sup>Optional</sup> <a name="LatDirection" id="@cdktf/provider-cloudflare.record.RecordData.property.latDirection"></a>

```csharp
public string LatDirection { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.4.0/docs/resources/record#lat_direction Record#lat_direction}.

---

##### `LatMinutes`<sup>Optional</sup> <a name="LatMinutes" id="@cdktf/provider-cloudflare.record.RecordData.property.latMinutes"></a>

```csharp
public double LatMinutes { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.4.0/docs/resources/record#lat_minutes Record#lat_minutes}.

---

##### `LatSeconds`<sup>Optional</sup> <a name="LatSeconds" id="@cdktf/provider-cloudflare.record.RecordData.property.latSeconds"></a>

```csharp
public double LatSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.4.0/docs/resources/record#lat_seconds Record#lat_seconds}.

---

##### `LongDegrees`<sup>Optional</sup> <a name="LongDegrees" id="@cdktf/provider-cloudflare.record.RecordData.property.longDegrees"></a>

```csharp
public double LongDegrees { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.4.0/docs/resources/record#long_degrees Record#long_degrees}.

---

##### `LongDirection`<sup>Optional</sup> <a name="LongDirection" id="@cdktf/provider-cloudflare.record.RecordData.property.longDirection"></a>

```csharp
public string LongDirection { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.4.0/docs/resources/record#long_direction Record#long_direction}.

---

##### `LongMinutes`<sup>Optional</sup> <a name="LongMinutes" id="@cdktf/provider-cloudflare.record.RecordData.property.longMinutes"></a>

```csharp
public double LongMinutes { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.4.0/docs/resources/record#long_minutes Record#long_minutes}.

---

##### `LongSeconds`<sup>Optional</sup> <a name="LongSeconds" id="@cdktf/provider-cloudflare.record.RecordData.property.longSeconds"></a>

```csharp
public double LongSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.4.0/docs/resources/record#long_seconds Record#long_seconds}.

---

##### `MatchingType`<sup>Optional</sup> <a name="MatchingType" id="@cdktf/provider-cloudflare.record.RecordData.property.matchingType"></a>

```csharp
public double MatchingType { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.4.0/docs/resources/record#matching_type Record#matching_type}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-cloudflare.record.RecordData.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.4.0/docs/resources/record#name Record#name}.

---

##### `Order`<sup>Optional</sup> <a name="Order" id="@cdktf/provider-cloudflare.record.RecordData.property.order"></a>

```csharp
public double Order { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.4.0/docs/resources/record#order Record#order}.

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-cloudflare.record.RecordData.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.4.0/docs/resources/record#port Record#port}.

---

##### `PrecisionHorz`<sup>Optional</sup> <a name="PrecisionHorz" id="@cdktf/provider-cloudflare.record.RecordData.property.precisionHorz"></a>

```csharp
public double PrecisionHorz { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.4.0/docs/resources/record#precision_horz Record#precision_horz}.

---

##### `PrecisionVert`<sup>Optional</sup> <a name="PrecisionVert" id="@cdktf/provider-cloudflare.record.RecordData.property.precisionVert"></a>

```csharp
public double PrecisionVert { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.4.0/docs/resources/record#precision_vert Record#precision_vert}.

---

##### `Preference`<sup>Optional</sup> <a name="Preference" id="@cdktf/provider-cloudflare.record.RecordData.property.preference"></a>

```csharp
public double Preference { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.4.0/docs/resources/record#preference Record#preference}.

---

##### `Priority`<sup>Optional</sup> <a name="Priority" id="@cdktf/provider-cloudflare.record.RecordData.property.priority"></a>

```csharp
public double Priority { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.4.0/docs/resources/record#priority Record#priority}.

---

##### `Proto`<sup>Optional</sup> <a name="Proto" id="@cdktf/provider-cloudflare.record.RecordData.property.proto"></a>

```csharp
public string Proto { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.4.0/docs/resources/record#proto Record#proto}.

---

##### `Protocol`<sup>Optional</sup> <a name="Protocol" id="@cdktf/provider-cloudflare.record.RecordData.property.protocol"></a>

```csharp
public double Protocol { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.4.0/docs/resources/record#protocol Record#protocol}.

---

##### `PublicKey`<sup>Optional</sup> <a name="PublicKey" id="@cdktf/provider-cloudflare.record.RecordData.property.publicKey"></a>

```csharp
public string PublicKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.4.0/docs/resources/record#public_key Record#public_key}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="@cdktf/provider-cloudflare.record.RecordData.property.regex"></a>

```csharp
public string Regex { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.4.0/docs/resources/record#regex Record#regex}.

---

##### `Replacement`<sup>Optional</sup> <a name="Replacement" id="@cdktf/provider-cloudflare.record.RecordData.property.replacement"></a>

```csharp
public string Replacement { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.4.0/docs/resources/record#replacement Record#replacement}.

---

##### `Selector`<sup>Optional</sup> <a name="Selector" id="@cdktf/provider-cloudflare.record.RecordData.property.selector"></a>

```csharp
public double Selector { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.4.0/docs/resources/record#selector Record#selector}.

---

##### `Service`<sup>Optional</sup> <a name="Service" id="@cdktf/provider-cloudflare.record.RecordData.property.service"></a>

```csharp
public string Service { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.4.0/docs/resources/record#service Record#service}.

---

##### `Size`<sup>Optional</sup> <a name="Size" id="@cdktf/provider-cloudflare.record.RecordData.property.size"></a>

```csharp
public double Size { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.4.0/docs/resources/record#size Record#size}.

---

##### `Tag`<sup>Optional</sup> <a name="Tag" id="@cdktf/provider-cloudflare.record.RecordData.property.tag"></a>

```csharp
public string Tag { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.4.0/docs/resources/record#tag Record#tag}.

---

##### `Target`<sup>Optional</sup> <a name="Target" id="@cdktf/provider-cloudflare.record.RecordData.property.target"></a>

```csharp
public string Target { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.4.0/docs/resources/record#target Record#target}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-cloudflare.record.RecordData.property.type"></a>

```csharp
public double Type { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.4.0/docs/resources/record#type Record#type}.

---

##### `Usage`<sup>Optional</sup> <a name="Usage" id="@cdktf/provider-cloudflare.record.RecordData.property.usage"></a>

```csharp
public double Usage { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.4.0/docs/resources/record#usage Record#usage}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-cloudflare.record.RecordData.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.4.0/docs/resources/record#value Record#value}.

---

##### `Weight`<sup>Optional</sup> <a name="Weight" id="@cdktf/provider-cloudflare.record.RecordData.property.weight"></a>

```csharp
public double Weight { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.4.0/docs/resources/record#weight Record#weight}.

---

### RecordTimeouts <a name="RecordTimeouts" id="@cdktf/provider-cloudflare.record.RecordTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.record.RecordTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new RecordTimeouts {
    string Create = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.4.0/docs/resources/record#create Record#create}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.4.0/docs/resources/record#update Record#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-cloudflare.record.RecordTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.4.0/docs/resources/record#create Record#create}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-cloudflare.record.RecordTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.4.0/docs/resources/record#update Record#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### RecordDataOutputReference <a name="RecordDataOutputReference" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new RecordDataOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetAlgorithm">ResetAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetAltitude">ResetAltitude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetCertificate">ResetCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetContent">ResetContent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetDigest">ResetDigest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetDigestType">ResetDigestType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetFingerprint">ResetFingerprint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetFlags">ResetFlags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetKeyTag">ResetKeyTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetLatDegrees">ResetLatDegrees</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetLatDirection">ResetLatDirection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetLatMinutes">ResetLatMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetLatSeconds">ResetLatSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetLongDegrees">ResetLongDegrees</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetLongDirection">ResetLongDirection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetLongMinutes">ResetLongMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetLongSeconds">ResetLongSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetMatchingType">ResetMatchingType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetOrder">ResetOrder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetPrecisionHorz">ResetPrecisionHorz</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetPrecisionVert">ResetPrecisionVert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetPreference">ResetPreference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetPriority">ResetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetProto">ResetProto</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetProtocol">ResetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetPublicKey">ResetPublicKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetReplacement">ResetReplacement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetSelector">ResetSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetService">ResetService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetSize">ResetSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetTag">ResetTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetTarget">ResetTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetType">ResetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetUsage">ResetUsage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetValue">ResetValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetWeight">ResetWeight</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAlgorithm` <a name="ResetAlgorithm" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetAlgorithm"></a>

```csharp
private void ResetAlgorithm()
```

##### `ResetAltitude` <a name="ResetAltitude" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetAltitude"></a>

```csharp
private void ResetAltitude()
```

##### `ResetCertificate` <a name="ResetCertificate" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetCertificate"></a>

```csharp
private void ResetCertificate()
```

##### `ResetContent` <a name="ResetContent" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetContent"></a>

```csharp
private void ResetContent()
```

##### `ResetDigest` <a name="ResetDigest" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetDigest"></a>

```csharp
private void ResetDigest()
```

##### `ResetDigestType` <a name="ResetDigestType" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetDigestType"></a>

```csharp
private void ResetDigestType()
```

##### `ResetFingerprint` <a name="ResetFingerprint" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetFingerprint"></a>

```csharp
private void ResetFingerprint()
```

##### `ResetFlags` <a name="ResetFlags" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetFlags"></a>

```csharp
private void ResetFlags()
```

##### `ResetKeyTag` <a name="ResetKeyTag" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetKeyTag"></a>

```csharp
private void ResetKeyTag()
```

##### `ResetLatDegrees` <a name="ResetLatDegrees" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetLatDegrees"></a>

```csharp
private void ResetLatDegrees()
```

##### `ResetLatDirection` <a name="ResetLatDirection" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetLatDirection"></a>

```csharp
private void ResetLatDirection()
```

##### `ResetLatMinutes` <a name="ResetLatMinutes" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetLatMinutes"></a>

```csharp
private void ResetLatMinutes()
```

##### `ResetLatSeconds` <a name="ResetLatSeconds" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetLatSeconds"></a>

```csharp
private void ResetLatSeconds()
```

##### `ResetLongDegrees` <a name="ResetLongDegrees" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetLongDegrees"></a>

```csharp
private void ResetLongDegrees()
```

##### `ResetLongDirection` <a name="ResetLongDirection" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetLongDirection"></a>

```csharp
private void ResetLongDirection()
```

##### `ResetLongMinutes` <a name="ResetLongMinutes" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetLongMinutes"></a>

```csharp
private void ResetLongMinutes()
```

##### `ResetLongSeconds` <a name="ResetLongSeconds" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetLongSeconds"></a>

```csharp
private void ResetLongSeconds()
```

##### `ResetMatchingType` <a name="ResetMatchingType" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetMatchingType"></a>

```csharp
private void ResetMatchingType()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetOrder` <a name="ResetOrder" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetOrder"></a>

```csharp
private void ResetOrder()
```

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetPort"></a>

```csharp
private void ResetPort()
```

##### `ResetPrecisionHorz` <a name="ResetPrecisionHorz" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetPrecisionHorz"></a>

```csharp
private void ResetPrecisionHorz()
```

##### `ResetPrecisionVert` <a name="ResetPrecisionVert" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetPrecisionVert"></a>

```csharp
private void ResetPrecisionVert()
```

##### `ResetPreference` <a name="ResetPreference" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetPreference"></a>

```csharp
private void ResetPreference()
```

##### `ResetPriority` <a name="ResetPriority" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetPriority"></a>

```csharp
private void ResetPriority()
```

##### `ResetProto` <a name="ResetProto" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetProto"></a>

```csharp
private void ResetProto()
```

##### `ResetProtocol` <a name="ResetProtocol" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetProtocol"></a>

```csharp
private void ResetProtocol()
```

##### `ResetPublicKey` <a name="ResetPublicKey" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetPublicKey"></a>

```csharp
private void ResetPublicKey()
```

##### `ResetRegex` <a name="ResetRegex" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```

##### `ResetReplacement` <a name="ResetReplacement" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetReplacement"></a>

```csharp
private void ResetReplacement()
```

##### `ResetSelector` <a name="ResetSelector" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetSelector"></a>

```csharp
private void ResetSelector()
```

##### `ResetService` <a name="ResetService" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetService"></a>

```csharp
private void ResetService()
```

##### `ResetSize` <a name="ResetSize" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetSize"></a>

```csharp
private void ResetSize()
```

##### `ResetTag` <a name="ResetTag" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetTag"></a>

```csharp
private void ResetTag()
```

##### `ResetTarget` <a name="ResetTarget" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetTarget"></a>

```csharp
private void ResetTarget()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetType"></a>

```csharp
private void ResetType()
```

##### `ResetUsage` <a name="ResetUsage" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetUsage"></a>

```csharp
private void ResetUsage()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```

##### `ResetWeight` <a name="ResetWeight" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetWeight"></a>

```csharp
private void ResetWeight()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.algorithmInput">AlgorithmInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.altitudeInput">AltitudeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.certificateInput">CertificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.contentInput">ContentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.digestInput">DigestInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.digestTypeInput">DigestTypeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.fingerprintInput">FingerprintInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.flagsInput">FlagsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.keyTagInput">KeyTagInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.latDegreesInput">LatDegreesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.latDirectionInput">LatDirectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.latMinutesInput">LatMinutesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.latSecondsInput">LatSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.longDegreesInput">LongDegreesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.longDirectionInput">LongDirectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.longMinutesInput">LongMinutesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.longSecondsInput">LongSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.matchingTypeInput">MatchingTypeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.orderInput">OrderInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.precisionHorzInput">PrecisionHorzInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.precisionVertInput">PrecisionVertInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.preferenceInput">PreferenceInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.priorityInput">PriorityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.protoInput">ProtoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.publicKeyInput">PublicKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.regexInput">RegexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.replacementInput">ReplacementInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.selectorInput">SelectorInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.serviceInput">ServiceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.sizeInput">SizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.tagInput">TagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.targetInput">TargetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.typeInput">TypeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.usageInput">UsageInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.weightInput">WeightInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.algorithm">Algorithm</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.altitude">Altitude</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.certificate">Certificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.content">Content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.digest">Digest</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.digestType">DigestType</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.fingerprint">Fingerprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.flags">Flags</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.keyTag">KeyTag</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.latDegrees">LatDegrees</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.latDirection">LatDirection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.latMinutes">LatMinutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.latSeconds">LatSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.longDegrees">LongDegrees</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.longDirection">LongDirection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.longMinutes">LongMinutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.longSeconds">LongSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.matchingType">MatchingType</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.order">Order</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.precisionHorz">PrecisionHorz</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.precisionVert">PrecisionVert</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.preference">Preference</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.priority">Priority</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.proto">Proto</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.protocol">Protocol</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.publicKey">PublicKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.regex">Regex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.replacement">Replacement</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.selector">Selector</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.service">Service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.size">Size</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.tag">Tag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.target">Target</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.type">Type</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.usage">Usage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.weight">Weight</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.record.RecordData">RecordData</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AlgorithmInput`<sup>Optional</sup> <a name="AlgorithmInput" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.algorithmInput"></a>

```csharp
public double AlgorithmInput { get; }
```

- *Type:* double

---

##### `AltitudeInput`<sup>Optional</sup> <a name="AltitudeInput" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.altitudeInput"></a>

```csharp
public double AltitudeInput { get; }
```

- *Type:* double

---

##### `CertificateInput`<sup>Optional</sup> <a name="CertificateInput" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.certificateInput"></a>

```csharp
public string CertificateInput { get; }
```

- *Type:* string

---

##### `ContentInput`<sup>Optional</sup> <a name="ContentInput" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.contentInput"></a>

```csharp
public string ContentInput { get; }
```

- *Type:* string

---

##### `DigestInput`<sup>Optional</sup> <a name="DigestInput" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.digestInput"></a>

```csharp
public string DigestInput { get; }
```

- *Type:* string

---

##### `DigestTypeInput`<sup>Optional</sup> <a name="DigestTypeInput" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.digestTypeInput"></a>

```csharp
public double DigestTypeInput { get; }
```

- *Type:* double

---

##### `FingerprintInput`<sup>Optional</sup> <a name="FingerprintInput" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.fingerprintInput"></a>

```csharp
public string FingerprintInput { get; }
```

- *Type:* string

---

##### `FlagsInput`<sup>Optional</sup> <a name="FlagsInput" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.flagsInput"></a>

```csharp
public string FlagsInput { get; }
```

- *Type:* string

---

##### `KeyTagInput`<sup>Optional</sup> <a name="KeyTagInput" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.keyTagInput"></a>

```csharp
public double KeyTagInput { get; }
```

- *Type:* double

---

##### `LatDegreesInput`<sup>Optional</sup> <a name="LatDegreesInput" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.latDegreesInput"></a>

```csharp
public double LatDegreesInput { get; }
```

- *Type:* double

---

##### `LatDirectionInput`<sup>Optional</sup> <a name="LatDirectionInput" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.latDirectionInput"></a>

```csharp
public string LatDirectionInput { get; }
```

- *Type:* string

---

##### `LatMinutesInput`<sup>Optional</sup> <a name="LatMinutesInput" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.latMinutesInput"></a>

```csharp
public double LatMinutesInput { get; }
```

- *Type:* double

---

##### `LatSecondsInput`<sup>Optional</sup> <a name="LatSecondsInput" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.latSecondsInput"></a>

```csharp
public double LatSecondsInput { get; }
```

- *Type:* double

---

##### `LongDegreesInput`<sup>Optional</sup> <a name="LongDegreesInput" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.longDegreesInput"></a>

```csharp
public double LongDegreesInput { get; }
```

- *Type:* double

---

##### `LongDirectionInput`<sup>Optional</sup> <a name="LongDirectionInput" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.longDirectionInput"></a>

```csharp
public string LongDirectionInput { get; }
```

- *Type:* string

---

##### `LongMinutesInput`<sup>Optional</sup> <a name="LongMinutesInput" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.longMinutesInput"></a>

```csharp
public double LongMinutesInput { get; }
```

- *Type:* double

---

##### `LongSecondsInput`<sup>Optional</sup> <a name="LongSecondsInput" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.longSecondsInput"></a>

```csharp
public double LongSecondsInput { get; }
```

- *Type:* double

---

##### `MatchingTypeInput`<sup>Optional</sup> <a name="MatchingTypeInput" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.matchingTypeInput"></a>

```csharp
public double MatchingTypeInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OrderInput`<sup>Optional</sup> <a name="OrderInput" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.orderInput"></a>

```csharp
public double OrderInput { get; }
```

- *Type:* double

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `PrecisionHorzInput`<sup>Optional</sup> <a name="PrecisionHorzInput" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.precisionHorzInput"></a>

```csharp
public double PrecisionHorzInput { get; }
```

- *Type:* double

---

##### `PrecisionVertInput`<sup>Optional</sup> <a name="PrecisionVertInput" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.precisionVertInput"></a>

```csharp
public double PrecisionVertInput { get; }
```

- *Type:* double

---

##### `PreferenceInput`<sup>Optional</sup> <a name="PreferenceInput" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.preferenceInput"></a>

```csharp
public double PreferenceInput { get; }
```

- *Type:* double

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.priorityInput"></a>

```csharp
public double PriorityInput { get; }
```

- *Type:* double

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.protocolInput"></a>

```csharp
public double ProtocolInput { get; }
```

- *Type:* double

---

##### `ProtoInput`<sup>Optional</sup> <a name="ProtoInput" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.protoInput"></a>

```csharp
public string ProtoInput { get; }
```

- *Type:* string

---

##### `PublicKeyInput`<sup>Optional</sup> <a name="PublicKeyInput" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.publicKeyInput"></a>

```csharp
public string PublicKeyInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.regexInput"></a>

```csharp
public string RegexInput { get; }
```

- *Type:* string

---

##### `ReplacementInput`<sup>Optional</sup> <a name="ReplacementInput" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.replacementInput"></a>

```csharp
public string ReplacementInput { get; }
```

- *Type:* string

---

##### `SelectorInput`<sup>Optional</sup> <a name="SelectorInput" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.selectorInput"></a>

```csharp
public double SelectorInput { get; }
```

- *Type:* double

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.serviceInput"></a>

```csharp
public string ServiceInput { get; }
```

- *Type:* string

---

##### `SizeInput`<sup>Optional</sup> <a name="SizeInput" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.sizeInput"></a>

```csharp
public double SizeInput { get; }
```

- *Type:* double

---

##### `TagInput`<sup>Optional</sup> <a name="TagInput" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.tagInput"></a>

```csharp
public string TagInput { get; }
```

- *Type:* string

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.targetInput"></a>

```csharp
public string TargetInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.typeInput"></a>

```csharp
public double TypeInput { get; }
```

- *Type:* double

---

##### `UsageInput`<sup>Optional</sup> <a name="UsageInput" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.usageInput"></a>

```csharp
public double UsageInput { get; }
```

- *Type:* double

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `WeightInput`<sup>Optional</sup> <a name="WeightInput" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.weightInput"></a>

```csharp
public double WeightInput { get; }
```

- *Type:* double

---

##### `Algorithm`<sup>Required</sup> <a name="Algorithm" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.algorithm"></a>

```csharp
public double Algorithm { get; }
```

- *Type:* double

---

##### `Altitude`<sup>Required</sup> <a name="Altitude" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.altitude"></a>

```csharp
public double Altitude { get; }
```

- *Type:* double

---

##### `Certificate`<sup>Required</sup> <a name="Certificate" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.certificate"></a>

```csharp
public string Certificate { get; }
```

- *Type:* string

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.content"></a>

```csharp
public string Content { get; }
```

- *Type:* string

---

##### `Digest`<sup>Required</sup> <a name="Digest" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.digest"></a>

```csharp
public string Digest { get; }
```

- *Type:* string

---

##### `DigestType`<sup>Required</sup> <a name="DigestType" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.digestType"></a>

```csharp
public double DigestType { get; }
```

- *Type:* double

---

##### `Fingerprint`<sup>Required</sup> <a name="Fingerprint" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.fingerprint"></a>

```csharp
public string Fingerprint { get; }
```

- *Type:* string

---

##### `Flags`<sup>Required</sup> <a name="Flags" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.flags"></a>

```csharp
public string Flags { get; }
```

- *Type:* string

---

##### `KeyTag`<sup>Required</sup> <a name="KeyTag" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.keyTag"></a>

```csharp
public double KeyTag { get; }
```

- *Type:* double

---

##### `LatDegrees`<sup>Required</sup> <a name="LatDegrees" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.latDegrees"></a>

```csharp
public double LatDegrees { get; }
```

- *Type:* double

---

##### `LatDirection`<sup>Required</sup> <a name="LatDirection" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.latDirection"></a>

```csharp
public string LatDirection { get; }
```

- *Type:* string

---

##### `LatMinutes`<sup>Required</sup> <a name="LatMinutes" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.latMinutes"></a>

```csharp
public double LatMinutes { get; }
```

- *Type:* double

---

##### `LatSeconds`<sup>Required</sup> <a name="LatSeconds" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.latSeconds"></a>

```csharp
public double LatSeconds { get; }
```

- *Type:* double

---

##### `LongDegrees`<sup>Required</sup> <a name="LongDegrees" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.longDegrees"></a>

```csharp
public double LongDegrees { get; }
```

- *Type:* double

---

##### `LongDirection`<sup>Required</sup> <a name="LongDirection" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.longDirection"></a>

```csharp
public string LongDirection { get; }
```

- *Type:* string

---

##### `LongMinutes`<sup>Required</sup> <a name="LongMinutes" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.longMinutes"></a>

```csharp
public double LongMinutes { get; }
```

- *Type:* double

---

##### `LongSeconds`<sup>Required</sup> <a name="LongSeconds" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.longSeconds"></a>

```csharp
public double LongSeconds { get; }
```

- *Type:* double

---

##### `MatchingType`<sup>Required</sup> <a name="MatchingType" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.matchingType"></a>

```csharp
public double MatchingType { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Order`<sup>Required</sup> <a name="Order" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.order"></a>

```csharp
public double Order { get; }
```

- *Type:* double

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `PrecisionHorz`<sup>Required</sup> <a name="PrecisionHorz" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.precisionHorz"></a>

```csharp
public double PrecisionHorz { get; }
```

- *Type:* double

---

##### `PrecisionVert`<sup>Required</sup> <a name="PrecisionVert" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.precisionVert"></a>

```csharp
public double PrecisionVert { get; }
```

- *Type:* double

---

##### `Preference`<sup>Required</sup> <a name="Preference" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.preference"></a>

```csharp
public double Preference { get; }
```

- *Type:* double

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.priority"></a>

```csharp
public double Priority { get; }
```

- *Type:* double

---

##### `Proto`<sup>Required</sup> <a name="Proto" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.proto"></a>

```csharp
public string Proto { get; }
```

- *Type:* string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.protocol"></a>

```csharp
public double Protocol { get; }
```

- *Type:* double

---

##### `PublicKey`<sup>Required</sup> <a name="PublicKey" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.publicKey"></a>

```csharp
public string PublicKey { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.regex"></a>

```csharp
public string Regex { get; }
```

- *Type:* string

---

##### `Replacement`<sup>Required</sup> <a name="Replacement" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.replacement"></a>

```csharp
public string Replacement { get; }
```

- *Type:* string

---

##### `Selector`<sup>Required</sup> <a name="Selector" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.selector"></a>

```csharp
public double Selector { get; }
```

- *Type:* double

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.service"></a>

```csharp
public string Service { get; }
```

- *Type:* string

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.size"></a>

```csharp
public double Size { get; }
```

- *Type:* double

---

##### `Tag`<sup>Required</sup> <a name="Tag" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.tag"></a>

```csharp
public string Tag { get; }
```

- *Type:* string

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.target"></a>

```csharp
public string Target { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.type"></a>

```csharp
public double Type { get; }
```

- *Type:* double

---

##### `Usage`<sup>Required</sup> <a name="Usage" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.usage"></a>

```csharp
public double Usage { get; }
```

- *Type:* double

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.weight"></a>

```csharp
public double Weight { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.internalValue"></a>

```csharp
public RecordData InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.record.RecordData">RecordData</a>

---


### RecordTimeoutsOutputReference <a name="RecordTimeoutsOutputReference" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new RecordTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



