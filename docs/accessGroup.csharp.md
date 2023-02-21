# `accessGroup` Submodule <a name="`accessGroup` Submodule" id="@cdktf/provider-cloudflare.accessGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AccessGroup <a name="AccessGroup" id="@cdktf/provider-cloudflare.accessGroup.AccessGroup"></a>

Represents a {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group cloudflare_access_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessGroup.AccessGroup.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new AccessGroup(Construct Scope, string Id, AccessGroupConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroup.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroup.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroup.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupConfig">AccessGroupConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.accessGroup.AccessGroup.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.accessGroup.AccessGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-cloudflare.accessGroup.AccessGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupConfig">AccessGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroup.putExclude">PutExclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroup.putInclude">PutInclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroup.putRequire">PutRequire</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroup.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroup.resetExclude">ResetExclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroup.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroup.resetRequire">ResetRequire</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroup.resetZoneId">ResetZoneId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.accessGroup.AccessGroup.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.accessGroup.AccessGroup.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-cloudflare.accessGroup.AccessGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.accessGroup.AccessGroup.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.accessGroup.AccessGroup.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-cloudflare.accessGroup.AccessGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.accessGroup.AccessGroup.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.accessGroup.AccessGroup.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.accessGroup.AccessGroup.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroup.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroup.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroup.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroup.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroup.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroup.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroup.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroup.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroup.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroup.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutExclude` <a name="PutExclude" id="@cdktf/provider-cloudflare.accessGroup.AccessGroup.putExclude"></a>

```csharp
private void PutExclude(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.accessGroup.AccessGroup.putExclude.parameter.value"></a>

- *Type:* object

---

##### `PutInclude` <a name="PutInclude" id="@cdktf/provider-cloudflare.accessGroup.AccessGroup.putInclude"></a>

```csharp
private void PutInclude(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.accessGroup.AccessGroup.putInclude.parameter.value"></a>

- *Type:* object

---

##### `PutRequire` <a name="PutRequire" id="@cdktf/provider-cloudflare.accessGroup.AccessGroup.putRequire"></a>

```csharp
private void PutRequire(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.accessGroup.AccessGroup.putRequire.parameter.value"></a>

- *Type:* object

---

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktf/provider-cloudflare.accessGroup.AccessGroup.resetAccountId"></a>

```csharp
private void ResetAccountId()
```

##### `ResetExclude` <a name="ResetExclude" id="@cdktf/provider-cloudflare.accessGroup.AccessGroup.resetExclude"></a>

```csharp
private void ResetExclude()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-cloudflare.accessGroup.AccessGroup.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRequire` <a name="ResetRequire" id="@cdktf/provider-cloudflare.accessGroup.AccessGroup.resetRequire"></a>

```csharp
private void ResetRequire()
```

##### `ResetZoneId` <a name="ResetZoneId" id="@cdktf/provider-cloudflare.accessGroup.AccessGroup.resetZoneId"></a>

```csharp
private void ResetZoneId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroup.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.accessGroup.AccessGroup.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

AccessGroup.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.accessGroup.AccessGroup.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.accessGroup.AccessGroup.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

AccessGroup.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.accessGroup.AccessGroup.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-cloudflare.accessGroup.AccessGroup.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

AccessGroup.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.accessGroup.AccessGroup.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroup.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroup.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroup.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroup.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroup.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroup.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroup.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroup.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroup.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroup.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroup.property.exclude">Exclude</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeList">AccessGroupExcludeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroup.property.include">Include</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeList">AccessGroupIncludeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroup.property.require">Require</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireList">AccessGroupRequireList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroup.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroup.property.excludeInput">ExcludeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroup.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroup.property.includeInput">IncludeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroup.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroup.property.requireInput">RequireInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroup.property.zoneIdInput">ZoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroup.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroup.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroup.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroup.property.zoneId">ZoneId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.accessGroup.AccessGroup.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.accessGroup.AccessGroup.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.accessGroup.AccessGroup.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.accessGroup.AccessGroup.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.accessGroup.AccessGroup.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.accessGroup.AccessGroup.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.accessGroup.AccessGroup.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.accessGroup.AccessGroup.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.accessGroup.AccessGroup.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.accessGroup.AccessGroup.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.accessGroup.AccessGroup.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.accessGroup.AccessGroup.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.accessGroup.AccessGroup.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.accessGroup.AccessGroup.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Exclude`<sup>Required</sup> <a name="Exclude" id="@cdktf/provider-cloudflare.accessGroup.AccessGroup.property.exclude"></a>

```csharp
public AccessGroupExcludeList Exclude { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeList">AccessGroupExcludeList</a>

---

##### `Include`<sup>Required</sup> <a name="Include" id="@cdktf/provider-cloudflare.accessGroup.AccessGroup.property.include"></a>

```csharp
public AccessGroupIncludeList Include { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeList">AccessGroupIncludeList</a>

---

##### `Require`<sup>Required</sup> <a name="Require" id="@cdktf/provider-cloudflare.accessGroup.AccessGroup.property.require"></a>

```csharp
public AccessGroupRequireList Require { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireList">AccessGroupRequireList</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.accessGroup.AccessGroup.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `ExcludeInput`<sup>Optional</sup> <a name="ExcludeInput" id="@cdktf/provider-cloudflare.accessGroup.AccessGroup.property.excludeInput"></a>

```csharp
public object ExcludeInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-cloudflare.accessGroup.AccessGroup.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IncludeInput`<sup>Optional</sup> <a name="IncludeInput" id="@cdktf/provider-cloudflare.accessGroup.AccessGroup.property.includeInput"></a>

```csharp
public object IncludeInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.accessGroup.AccessGroup.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RequireInput`<sup>Optional</sup> <a name="RequireInput" id="@cdktf/provider-cloudflare.accessGroup.AccessGroup.property.requireInput"></a>

```csharp
public object RequireInput { get; }
```

- *Type:* object

---

##### `ZoneIdInput`<sup>Optional</sup> <a name="ZoneIdInput" id="@cdktf/provider-cloudflare.accessGroup.AccessGroup.property.zoneIdInput"></a>

```csharp
public string ZoneIdInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.accessGroup.AccessGroup.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.accessGroup.AccessGroup.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.accessGroup.AccessGroup.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.accessGroup.AccessGroup.property.zoneId"></a>

```csharp
public string ZoneId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroup.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.accessGroup.AccessGroup.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AccessGroupConfig <a name="AccessGroupConfig" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new AccessGroupConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    object Include,
    string Name,
    string AccountId = null,
    object Exclude = null,
    string Id = null,
    object Require = null,
    string ZoneId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupConfig.property.include">Include</a></code> | <code>object</code> | include block. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#name AccessGroup#name}. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupConfig.property.accountId">AccountId</a></code> | <code>string</code> | The account identifier to target for the resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupConfig.property.exclude">Exclude</a></code> | <code>object</code> | exclude block. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#id AccessGroup#id}. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupConfig.property.require">Require</a></code> | <code>object</code> | require block. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupConfig.property.zoneId">ZoneId</a></code> | <code>string</code> | The zone identifier to target for the resource. Conflicts with `account_id`. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Include`<sup>Required</sup> <a name="Include" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupConfig.property.include"></a>

```csharp
public object Include { get; set; }
```

- *Type:* object

include block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#include AccessGroup#include}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#name AccessGroup#name}.

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

The account identifier to target for the resource.

Conflicts with `zone_id`. **Modifying this attribute will force creation of a new resource.**

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#account_id AccessGroup#account_id}

---

##### `Exclude`<sup>Optional</sup> <a name="Exclude" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupConfig.property.exclude"></a>

```csharp
public object Exclude { get; set; }
```

- *Type:* object

exclude block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#exclude AccessGroup#exclude}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#id AccessGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Require`<sup>Optional</sup> <a name="Require" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupConfig.property.require"></a>

```csharp
public object Require { get; set; }
```

- *Type:* object

require block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#require AccessGroup#require}

---

##### `ZoneId`<sup>Optional</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupConfig.property.zoneId"></a>

```csharp
public string ZoneId { get; set; }
```

- *Type:* string

The zone identifier to target for the resource. Conflicts with `account_id`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#zone_id AccessGroup#zone_id}

---

### AccessGroupExclude <a name="AccessGroupExclude" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExclude"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExclude.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new AccessGroupExclude {
    object AnyValidServiceToken = null,
    string AuthMethod = null,
    object Azure = null,
    object Certificate = null,
    string CommonName = null,
    string[] DevicePosture = null,
    string[] Email = null,
    string[] EmailDomain = null,
    object Everyone = null,
    AccessGroupExcludeExternalEvaluation ExternalEvaluation = null,
    string[] Geo = null,
    object Github = null,
    string[] Group = null,
    object Gsuite = null,
    string[] Ip = null,
    string[] IpList = null,
    string[] LoginMethod = null,
    object Okta = null,
    object Saml = null,
    string[] ServiceToken = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExclude.property.anyValidServiceToken">AnyValidServiceToken</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#any_valid_service_token AccessGroup#any_valid_service_token}. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExclude.property.authMethod">AuthMethod</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#auth_method AccessGroup#auth_method}. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExclude.property.azure">Azure</a></code> | <code>object</code> | azure block. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExclude.property.certificate">Certificate</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#certificate AccessGroup#certificate}. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExclude.property.commonName">CommonName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#common_name AccessGroup#common_name}. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExclude.property.devicePosture">DevicePosture</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#device_posture AccessGroup#device_posture}. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExclude.property.email">Email</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#email AccessGroup#email}. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExclude.property.emailDomain">EmailDomain</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#email_domain AccessGroup#email_domain}. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExclude.property.everyone">Everyone</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#everyone AccessGroup#everyone}. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExclude.property.externalEvaluation">ExternalEvaluation</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeExternalEvaluation">AccessGroupExcludeExternalEvaluation</a></code> | external_evaluation block. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExclude.property.geo">Geo</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#geo AccessGroup#geo}. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExclude.property.github">Github</a></code> | <code>object</code> | github block. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExclude.property.group">Group</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#group AccessGroup#group}. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExclude.property.gsuite">Gsuite</a></code> | <code>object</code> | gsuite block. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExclude.property.ip">Ip</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#ip AccessGroup#ip}. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExclude.property.ipList">IpList</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#ip_list AccessGroup#ip_list}. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExclude.property.loginMethod">LoginMethod</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#login_method AccessGroup#login_method}. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExclude.property.okta">Okta</a></code> | <code>object</code> | okta block. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExclude.property.saml">Saml</a></code> | <code>object</code> | saml block. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExclude.property.serviceToken">ServiceToken</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#service_token AccessGroup#service_token}. |

---

##### `AnyValidServiceToken`<sup>Optional</sup> <a name="AnyValidServiceToken" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExclude.property.anyValidServiceToken"></a>

```csharp
public object AnyValidServiceToken { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#any_valid_service_token AccessGroup#any_valid_service_token}.

---

##### `AuthMethod`<sup>Optional</sup> <a name="AuthMethod" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExclude.property.authMethod"></a>

```csharp
public string AuthMethod { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#auth_method AccessGroup#auth_method}.

---

##### `Azure`<sup>Optional</sup> <a name="Azure" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExclude.property.azure"></a>

```csharp
public object Azure { get; set; }
```

- *Type:* object

azure block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#azure AccessGroup#azure}

---

##### `Certificate`<sup>Optional</sup> <a name="Certificate" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExclude.property.certificate"></a>

```csharp
public object Certificate { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#certificate AccessGroup#certificate}.

---

##### `CommonName`<sup>Optional</sup> <a name="CommonName" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExclude.property.commonName"></a>

```csharp
public string CommonName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#common_name AccessGroup#common_name}.

---

##### `DevicePosture`<sup>Optional</sup> <a name="DevicePosture" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExclude.property.devicePosture"></a>

```csharp
public string[] DevicePosture { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#device_posture AccessGroup#device_posture}.

---

##### `Email`<sup>Optional</sup> <a name="Email" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExclude.property.email"></a>

```csharp
public string[] Email { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#email AccessGroup#email}.

---

##### `EmailDomain`<sup>Optional</sup> <a name="EmailDomain" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExclude.property.emailDomain"></a>

```csharp
public string[] EmailDomain { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#email_domain AccessGroup#email_domain}.

---

##### `Everyone`<sup>Optional</sup> <a name="Everyone" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExclude.property.everyone"></a>

```csharp
public object Everyone { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#everyone AccessGroup#everyone}.

---

##### `ExternalEvaluation`<sup>Optional</sup> <a name="ExternalEvaluation" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExclude.property.externalEvaluation"></a>

```csharp
public AccessGroupExcludeExternalEvaluation ExternalEvaluation { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeExternalEvaluation">AccessGroupExcludeExternalEvaluation</a>

external_evaluation block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#external_evaluation AccessGroup#external_evaluation}

---

##### `Geo`<sup>Optional</sup> <a name="Geo" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExclude.property.geo"></a>

```csharp
public string[] Geo { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#geo AccessGroup#geo}.

---

##### `Github`<sup>Optional</sup> <a name="Github" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExclude.property.github"></a>

```csharp
public object Github { get; set; }
```

- *Type:* object

github block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#github AccessGroup#github}

---

##### `Group`<sup>Optional</sup> <a name="Group" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExclude.property.group"></a>

```csharp
public string[] Group { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#group AccessGroup#group}.

---

##### `Gsuite`<sup>Optional</sup> <a name="Gsuite" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExclude.property.gsuite"></a>

```csharp
public object Gsuite { get; set; }
```

- *Type:* object

gsuite block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#gsuite AccessGroup#gsuite}

---

##### `Ip`<sup>Optional</sup> <a name="Ip" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExclude.property.ip"></a>

```csharp
public string[] Ip { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#ip AccessGroup#ip}.

---

##### `IpList`<sup>Optional</sup> <a name="IpList" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExclude.property.ipList"></a>

```csharp
public string[] IpList { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#ip_list AccessGroup#ip_list}.

---

##### `LoginMethod`<sup>Optional</sup> <a name="LoginMethod" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExclude.property.loginMethod"></a>

```csharp
public string[] LoginMethod { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#login_method AccessGroup#login_method}.

---

##### `Okta`<sup>Optional</sup> <a name="Okta" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExclude.property.okta"></a>

```csharp
public object Okta { get; set; }
```

- *Type:* object

okta block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#okta AccessGroup#okta}

---

##### `Saml`<sup>Optional</sup> <a name="Saml" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExclude.property.saml"></a>

```csharp
public object Saml { get; set; }
```

- *Type:* object

saml block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#saml AccessGroup#saml}

---

##### `ServiceToken`<sup>Optional</sup> <a name="ServiceToken" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExclude.property.serviceToken"></a>

```csharp
public string[] ServiceToken { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#service_token AccessGroup#service_token}.

---

### AccessGroupExcludeAzure <a name="AccessGroupExcludeAzure" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeAzure"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeAzure.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new AccessGroupExcludeAzure {
    string[] Id = null,
    string IdentityProviderId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeAzure.property.id">Id</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#id AccessGroup#id}. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeAzure.property.identityProviderId">IdentityProviderId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#identity_provider_id AccessGroup#identity_provider_id}. |

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeAzure.property.id"></a>

```csharp
public string[] Id { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#id AccessGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IdentityProviderId`<sup>Optional</sup> <a name="IdentityProviderId" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeAzure.property.identityProviderId"></a>

```csharp
public string IdentityProviderId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#identity_provider_id AccessGroup#identity_provider_id}.

---

### AccessGroupExcludeExternalEvaluation <a name="AccessGroupExcludeExternalEvaluation" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeExternalEvaluation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeExternalEvaluation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new AccessGroupExcludeExternalEvaluation {
    string EvaluateUrl = null,
    string KeysUrl = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeExternalEvaluation.property.evaluateUrl">EvaluateUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#evaluate_url AccessGroup#evaluate_url}. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeExternalEvaluation.property.keysUrl">KeysUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#keys_url AccessGroup#keys_url}. |

---

##### `EvaluateUrl`<sup>Optional</sup> <a name="EvaluateUrl" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeExternalEvaluation.property.evaluateUrl"></a>

```csharp
public string EvaluateUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#evaluate_url AccessGroup#evaluate_url}.

---

##### `KeysUrl`<sup>Optional</sup> <a name="KeysUrl" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeExternalEvaluation.property.keysUrl"></a>

```csharp
public string KeysUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#keys_url AccessGroup#keys_url}.

---

### AccessGroupExcludeGithub <a name="AccessGroupExcludeGithub" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGithub"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGithub.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new AccessGroupExcludeGithub {
    string IdentityProviderId = null,
    string Name = null,
    string[] Teams = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGithub.property.identityProviderId">IdentityProviderId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#identity_provider_id AccessGroup#identity_provider_id}. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGithub.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#name AccessGroup#name}. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGithub.property.teams">Teams</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#teams AccessGroup#teams}. |

---

##### `IdentityProviderId`<sup>Optional</sup> <a name="IdentityProviderId" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGithub.property.identityProviderId"></a>

```csharp
public string IdentityProviderId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#identity_provider_id AccessGroup#identity_provider_id}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGithub.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#name AccessGroup#name}.

---

##### `Teams`<sup>Optional</sup> <a name="Teams" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGithub.property.teams"></a>

```csharp
public string[] Teams { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#teams AccessGroup#teams}.

---

### AccessGroupExcludeGsuite <a name="AccessGroupExcludeGsuite" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGsuite"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGsuite.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new AccessGroupExcludeGsuite {
    string[] Email = null,
    string IdentityProviderId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGsuite.property.email">Email</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#email AccessGroup#email}. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGsuite.property.identityProviderId">IdentityProviderId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#identity_provider_id AccessGroup#identity_provider_id}. |

---

##### `Email`<sup>Optional</sup> <a name="Email" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGsuite.property.email"></a>

```csharp
public string[] Email { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#email AccessGroup#email}.

---

##### `IdentityProviderId`<sup>Optional</sup> <a name="IdentityProviderId" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGsuite.property.identityProviderId"></a>

```csharp
public string IdentityProviderId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#identity_provider_id AccessGroup#identity_provider_id}.

---

### AccessGroupExcludeOkta <a name="AccessGroupExcludeOkta" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOkta"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOkta.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new AccessGroupExcludeOkta {
    string IdentityProviderId = null,
    string[] Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOkta.property.identityProviderId">IdentityProviderId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#identity_provider_id AccessGroup#identity_provider_id}. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOkta.property.name">Name</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#name AccessGroup#name}. |

---

##### `IdentityProviderId`<sup>Optional</sup> <a name="IdentityProviderId" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOkta.property.identityProviderId"></a>

```csharp
public string IdentityProviderId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#identity_provider_id AccessGroup#identity_provider_id}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOkta.property.name"></a>

```csharp
public string[] Name { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#name AccessGroup#name}.

---

### AccessGroupExcludeSaml <a name="AccessGroupExcludeSaml" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeSaml"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeSaml.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new AccessGroupExcludeSaml {
    string AttributeName = null,
    string AttributeValue = null,
    string IdentityProviderId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeSaml.property.attributeName">AttributeName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#attribute_name AccessGroup#attribute_name}. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeSaml.property.attributeValue">AttributeValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#attribute_value AccessGroup#attribute_value}. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeSaml.property.identityProviderId">IdentityProviderId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#identity_provider_id AccessGroup#identity_provider_id}. |

---

##### `AttributeName`<sup>Optional</sup> <a name="AttributeName" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeSaml.property.attributeName"></a>

```csharp
public string AttributeName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#attribute_name AccessGroup#attribute_name}.

---

##### `AttributeValue`<sup>Optional</sup> <a name="AttributeValue" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeSaml.property.attributeValue"></a>

```csharp
public string AttributeValue { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#attribute_value AccessGroup#attribute_value}.

---

##### `IdentityProviderId`<sup>Optional</sup> <a name="IdentityProviderId" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeSaml.property.identityProviderId"></a>

```csharp
public string IdentityProviderId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#identity_provider_id AccessGroup#identity_provider_id}.

---

### AccessGroupInclude <a name="AccessGroupInclude" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupInclude"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupInclude.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new AccessGroupInclude {
    object AnyValidServiceToken = null,
    string AuthMethod = null,
    object Azure = null,
    object Certificate = null,
    string CommonName = null,
    string[] DevicePosture = null,
    string[] Email = null,
    string[] EmailDomain = null,
    object Everyone = null,
    AccessGroupIncludeExternalEvaluation ExternalEvaluation = null,
    string[] Geo = null,
    object Github = null,
    string[] Group = null,
    object Gsuite = null,
    string[] Ip = null,
    string[] IpList = null,
    string[] LoginMethod = null,
    object Okta = null,
    object Saml = null,
    string[] ServiceToken = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupInclude.property.anyValidServiceToken">AnyValidServiceToken</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#any_valid_service_token AccessGroup#any_valid_service_token}. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupInclude.property.authMethod">AuthMethod</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#auth_method AccessGroup#auth_method}. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupInclude.property.azure">Azure</a></code> | <code>object</code> | azure block. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupInclude.property.certificate">Certificate</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#certificate AccessGroup#certificate}. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupInclude.property.commonName">CommonName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#common_name AccessGroup#common_name}. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupInclude.property.devicePosture">DevicePosture</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#device_posture AccessGroup#device_posture}. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupInclude.property.email">Email</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#email AccessGroup#email}. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupInclude.property.emailDomain">EmailDomain</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#email_domain AccessGroup#email_domain}. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupInclude.property.everyone">Everyone</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#everyone AccessGroup#everyone}. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupInclude.property.externalEvaluation">ExternalEvaluation</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeExternalEvaluation">AccessGroupIncludeExternalEvaluation</a></code> | external_evaluation block. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupInclude.property.geo">Geo</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#geo AccessGroup#geo}. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupInclude.property.github">Github</a></code> | <code>object</code> | github block. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupInclude.property.group">Group</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#group AccessGroup#group}. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupInclude.property.gsuite">Gsuite</a></code> | <code>object</code> | gsuite block. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupInclude.property.ip">Ip</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#ip AccessGroup#ip}. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupInclude.property.ipList">IpList</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#ip_list AccessGroup#ip_list}. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupInclude.property.loginMethod">LoginMethod</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#login_method AccessGroup#login_method}. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupInclude.property.okta">Okta</a></code> | <code>object</code> | okta block. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupInclude.property.saml">Saml</a></code> | <code>object</code> | saml block. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupInclude.property.serviceToken">ServiceToken</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#service_token AccessGroup#service_token}. |

---

##### `AnyValidServiceToken`<sup>Optional</sup> <a name="AnyValidServiceToken" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupInclude.property.anyValidServiceToken"></a>

```csharp
public object AnyValidServiceToken { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#any_valid_service_token AccessGroup#any_valid_service_token}.

---

##### `AuthMethod`<sup>Optional</sup> <a name="AuthMethod" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupInclude.property.authMethod"></a>

```csharp
public string AuthMethod { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#auth_method AccessGroup#auth_method}.

---

##### `Azure`<sup>Optional</sup> <a name="Azure" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupInclude.property.azure"></a>

```csharp
public object Azure { get; set; }
```

- *Type:* object

azure block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#azure AccessGroup#azure}

---

##### `Certificate`<sup>Optional</sup> <a name="Certificate" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupInclude.property.certificate"></a>

```csharp
public object Certificate { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#certificate AccessGroup#certificate}.

---

##### `CommonName`<sup>Optional</sup> <a name="CommonName" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupInclude.property.commonName"></a>

```csharp
public string CommonName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#common_name AccessGroup#common_name}.

---

##### `DevicePosture`<sup>Optional</sup> <a name="DevicePosture" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupInclude.property.devicePosture"></a>

```csharp
public string[] DevicePosture { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#device_posture AccessGroup#device_posture}.

---

##### `Email`<sup>Optional</sup> <a name="Email" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupInclude.property.email"></a>

```csharp
public string[] Email { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#email AccessGroup#email}.

---

##### `EmailDomain`<sup>Optional</sup> <a name="EmailDomain" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupInclude.property.emailDomain"></a>

```csharp
public string[] EmailDomain { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#email_domain AccessGroup#email_domain}.

---

##### `Everyone`<sup>Optional</sup> <a name="Everyone" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupInclude.property.everyone"></a>

```csharp
public object Everyone { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#everyone AccessGroup#everyone}.

---

##### `ExternalEvaluation`<sup>Optional</sup> <a name="ExternalEvaluation" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupInclude.property.externalEvaluation"></a>

```csharp
public AccessGroupIncludeExternalEvaluation ExternalEvaluation { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeExternalEvaluation">AccessGroupIncludeExternalEvaluation</a>

external_evaluation block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#external_evaluation AccessGroup#external_evaluation}

---

##### `Geo`<sup>Optional</sup> <a name="Geo" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupInclude.property.geo"></a>

```csharp
public string[] Geo { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#geo AccessGroup#geo}.

---

##### `Github`<sup>Optional</sup> <a name="Github" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupInclude.property.github"></a>

```csharp
public object Github { get; set; }
```

- *Type:* object

github block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#github AccessGroup#github}

---

##### `Group`<sup>Optional</sup> <a name="Group" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupInclude.property.group"></a>

```csharp
public string[] Group { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#group AccessGroup#group}.

---

##### `Gsuite`<sup>Optional</sup> <a name="Gsuite" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupInclude.property.gsuite"></a>

```csharp
public object Gsuite { get; set; }
```

- *Type:* object

gsuite block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#gsuite AccessGroup#gsuite}

---

##### `Ip`<sup>Optional</sup> <a name="Ip" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupInclude.property.ip"></a>

```csharp
public string[] Ip { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#ip AccessGroup#ip}.

---

##### `IpList`<sup>Optional</sup> <a name="IpList" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupInclude.property.ipList"></a>

```csharp
public string[] IpList { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#ip_list AccessGroup#ip_list}.

---

##### `LoginMethod`<sup>Optional</sup> <a name="LoginMethod" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupInclude.property.loginMethod"></a>

```csharp
public string[] LoginMethod { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#login_method AccessGroup#login_method}.

---

##### `Okta`<sup>Optional</sup> <a name="Okta" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupInclude.property.okta"></a>

```csharp
public object Okta { get; set; }
```

- *Type:* object

okta block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#okta AccessGroup#okta}

---

##### `Saml`<sup>Optional</sup> <a name="Saml" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupInclude.property.saml"></a>

```csharp
public object Saml { get; set; }
```

- *Type:* object

saml block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#saml AccessGroup#saml}

---

##### `ServiceToken`<sup>Optional</sup> <a name="ServiceToken" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupInclude.property.serviceToken"></a>

```csharp
public string[] ServiceToken { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#service_token AccessGroup#service_token}.

---

### AccessGroupIncludeAzure <a name="AccessGroupIncludeAzure" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeAzure"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeAzure.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new AccessGroupIncludeAzure {
    string[] Id = null,
    string IdentityProviderId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeAzure.property.id">Id</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#id AccessGroup#id}. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeAzure.property.identityProviderId">IdentityProviderId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#identity_provider_id AccessGroup#identity_provider_id}. |

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeAzure.property.id"></a>

```csharp
public string[] Id { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#id AccessGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IdentityProviderId`<sup>Optional</sup> <a name="IdentityProviderId" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeAzure.property.identityProviderId"></a>

```csharp
public string IdentityProviderId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#identity_provider_id AccessGroup#identity_provider_id}.

---

### AccessGroupIncludeExternalEvaluation <a name="AccessGroupIncludeExternalEvaluation" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeExternalEvaluation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeExternalEvaluation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new AccessGroupIncludeExternalEvaluation {
    string EvaluateUrl = null,
    string KeysUrl = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeExternalEvaluation.property.evaluateUrl">EvaluateUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#evaluate_url AccessGroup#evaluate_url}. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeExternalEvaluation.property.keysUrl">KeysUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#keys_url AccessGroup#keys_url}. |

---

##### `EvaluateUrl`<sup>Optional</sup> <a name="EvaluateUrl" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeExternalEvaluation.property.evaluateUrl"></a>

```csharp
public string EvaluateUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#evaluate_url AccessGroup#evaluate_url}.

---

##### `KeysUrl`<sup>Optional</sup> <a name="KeysUrl" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeExternalEvaluation.property.keysUrl"></a>

```csharp
public string KeysUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#keys_url AccessGroup#keys_url}.

---

### AccessGroupIncludeGithub <a name="AccessGroupIncludeGithub" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGithub"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGithub.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new AccessGroupIncludeGithub {
    string IdentityProviderId = null,
    string Name = null,
    string[] Teams = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGithub.property.identityProviderId">IdentityProviderId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#identity_provider_id AccessGroup#identity_provider_id}. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGithub.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#name AccessGroup#name}. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGithub.property.teams">Teams</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#teams AccessGroup#teams}. |

---

##### `IdentityProviderId`<sup>Optional</sup> <a name="IdentityProviderId" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGithub.property.identityProviderId"></a>

```csharp
public string IdentityProviderId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#identity_provider_id AccessGroup#identity_provider_id}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGithub.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#name AccessGroup#name}.

---

##### `Teams`<sup>Optional</sup> <a name="Teams" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGithub.property.teams"></a>

```csharp
public string[] Teams { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#teams AccessGroup#teams}.

---

### AccessGroupIncludeGsuite <a name="AccessGroupIncludeGsuite" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGsuite"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGsuite.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new AccessGroupIncludeGsuite {
    string[] Email = null,
    string IdentityProviderId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGsuite.property.email">Email</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#email AccessGroup#email}. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGsuite.property.identityProviderId">IdentityProviderId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#identity_provider_id AccessGroup#identity_provider_id}. |

---

##### `Email`<sup>Optional</sup> <a name="Email" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGsuite.property.email"></a>

```csharp
public string[] Email { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#email AccessGroup#email}.

---

##### `IdentityProviderId`<sup>Optional</sup> <a name="IdentityProviderId" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGsuite.property.identityProviderId"></a>

```csharp
public string IdentityProviderId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#identity_provider_id AccessGroup#identity_provider_id}.

---

### AccessGroupIncludeOkta <a name="AccessGroupIncludeOkta" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOkta"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOkta.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new AccessGroupIncludeOkta {
    string IdentityProviderId = null,
    string[] Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOkta.property.identityProviderId">IdentityProviderId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#identity_provider_id AccessGroup#identity_provider_id}. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOkta.property.name">Name</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#name AccessGroup#name}. |

---

##### `IdentityProviderId`<sup>Optional</sup> <a name="IdentityProviderId" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOkta.property.identityProviderId"></a>

```csharp
public string IdentityProviderId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#identity_provider_id AccessGroup#identity_provider_id}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOkta.property.name"></a>

```csharp
public string[] Name { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#name AccessGroup#name}.

---

### AccessGroupIncludeSaml <a name="AccessGroupIncludeSaml" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeSaml"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeSaml.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new AccessGroupIncludeSaml {
    string AttributeName = null,
    string AttributeValue = null,
    string IdentityProviderId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeSaml.property.attributeName">AttributeName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#attribute_name AccessGroup#attribute_name}. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeSaml.property.attributeValue">AttributeValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#attribute_value AccessGroup#attribute_value}. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeSaml.property.identityProviderId">IdentityProviderId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#identity_provider_id AccessGroup#identity_provider_id}. |

---

##### `AttributeName`<sup>Optional</sup> <a name="AttributeName" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeSaml.property.attributeName"></a>

```csharp
public string AttributeName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#attribute_name AccessGroup#attribute_name}.

---

##### `AttributeValue`<sup>Optional</sup> <a name="AttributeValue" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeSaml.property.attributeValue"></a>

```csharp
public string AttributeValue { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#attribute_value AccessGroup#attribute_value}.

---

##### `IdentityProviderId`<sup>Optional</sup> <a name="IdentityProviderId" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeSaml.property.identityProviderId"></a>

```csharp
public string IdentityProviderId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#identity_provider_id AccessGroup#identity_provider_id}.

---

### AccessGroupRequire <a name="AccessGroupRequire" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequire"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequire.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new AccessGroupRequire {
    object AnyValidServiceToken = null,
    string AuthMethod = null,
    object Azure = null,
    object Certificate = null,
    string CommonName = null,
    string[] DevicePosture = null,
    string[] Email = null,
    string[] EmailDomain = null,
    object Everyone = null,
    AccessGroupRequireExternalEvaluation ExternalEvaluation = null,
    string[] Geo = null,
    object Github = null,
    string[] Group = null,
    object Gsuite = null,
    string[] Ip = null,
    string[] IpList = null,
    string[] LoginMethod = null,
    object Okta = null,
    object Saml = null,
    string[] ServiceToken = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequire.property.anyValidServiceToken">AnyValidServiceToken</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#any_valid_service_token AccessGroup#any_valid_service_token}. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequire.property.authMethod">AuthMethod</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#auth_method AccessGroup#auth_method}. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequire.property.azure">Azure</a></code> | <code>object</code> | azure block. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequire.property.certificate">Certificate</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#certificate AccessGroup#certificate}. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequire.property.commonName">CommonName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#common_name AccessGroup#common_name}. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequire.property.devicePosture">DevicePosture</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#device_posture AccessGroup#device_posture}. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequire.property.email">Email</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#email AccessGroup#email}. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequire.property.emailDomain">EmailDomain</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#email_domain AccessGroup#email_domain}. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequire.property.everyone">Everyone</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#everyone AccessGroup#everyone}. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequire.property.externalEvaluation">ExternalEvaluation</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireExternalEvaluation">AccessGroupRequireExternalEvaluation</a></code> | external_evaluation block. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequire.property.geo">Geo</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#geo AccessGroup#geo}. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequire.property.github">Github</a></code> | <code>object</code> | github block. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequire.property.group">Group</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#group AccessGroup#group}. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequire.property.gsuite">Gsuite</a></code> | <code>object</code> | gsuite block. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequire.property.ip">Ip</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#ip AccessGroup#ip}. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequire.property.ipList">IpList</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#ip_list AccessGroup#ip_list}. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequire.property.loginMethod">LoginMethod</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#login_method AccessGroup#login_method}. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequire.property.okta">Okta</a></code> | <code>object</code> | okta block. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequire.property.saml">Saml</a></code> | <code>object</code> | saml block. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequire.property.serviceToken">ServiceToken</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#service_token AccessGroup#service_token}. |

---

##### `AnyValidServiceToken`<sup>Optional</sup> <a name="AnyValidServiceToken" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequire.property.anyValidServiceToken"></a>

```csharp
public object AnyValidServiceToken { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#any_valid_service_token AccessGroup#any_valid_service_token}.

---

##### `AuthMethod`<sup>Optional</sup> <a name="AuthMethod" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequire.property.authMethod"></a>

```csharp
public string AuthMethod { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#auth_method AccessGroup#auth_method}.

---

##### `Azure`<sup>Optional</sup> <a name="Azure" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequire.property.azure"></a>

```csharp
public object Azure { get; set; }
```

- *Type:* object

azure block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#azure AccessGroup#azure}

---

##### `Certificate`<sup>Optional</sup> <a name="Certificate" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequire.property.certificate"></a>

```csharp
public object Certificate { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#certificate AccessGroup#certificate}.

---

##### `CommonName`<sup>Optional</sup> <a name="CommonName" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequire.property.commonName"></a>

```csharp
public string CommonName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#common_name AccessGroup#common_name}.

---

##### `DevicePosture`<sup>Optional</sup> <a name="DevicePosture" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequire.property.devicePosture"></a>

```csharp
public string[] DevicePosture { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#device_posture AccessGroup#device_posture}.

---

##### `Email`<sup>Optional</sup> <a name="Email" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequire.property.email"></a>

```csharp
public string[] Email { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#email AccessGroup#email}.

---

##### `EmailDomain`<sup>Optional</sup> <a name="EmailDomain" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequire.property.emailDomain"></a>

```csharp
public string[] EmailDomain { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#email_domain AccessGroup#email_domain}.

---

##### `Everyone`<sup>Optional</sup> <a name="Everyone" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequire.property.everyone"></a>

```csharp
public object Everyone { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#everyone AccessGroup#everyone}.

---

##### `ExternalEvaluation`<sup>Optional</sup> <a name="ExternalEvaluation" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequire.property.externalEvaluation"></a>

```csharp
public AccessGroupRequireExternalEvaluation ExternalEvaluation { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireExternalEvaluation">AccessGroupRequireExternalEvaluation</a>

external_evaluation block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#external_evaluation AccessGroup#external_evaluation}

---

##### `Geo`<sup>Optional</sup> <a name="Geo" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequire.property.geo"></a>

```csharp
public string[] Geo { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#geo AccessGroup#geo}.

---

##### `Github`<sup>Optional</sup> <a name="Github" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequire.property.github"></a>

```csharp
public object Github { get; set; }
```

- *Type:* object

github block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#github AccessGroup#github}

---

##### `Group`<sup>Optional</sup> <a name="Group" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequire.property.group"></a>

```csharp
public string[] Group { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#group AccessGroup#group}.

---

##### `Gsuite`<sup>Optional</sup> <a name="Gsuite" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequire.property.gsuite"></a>

```csharp
public object Gsuite { get; set; }
```

- *Type:* object

gsuite block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#gsuite AccessGroup#gsuite}

---

##### `Ip`<sup>Optional</sup> <a name="Ip" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequire.property.ip"></a>

```csharp
public string[] Ip { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#ip AccessGroup#ip}.

---

##### `IpList`<sup>Optional</sup> <a name="IpList" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequire.property.ipList"></a>

```csharp
public string[] IpList { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#ip_list AccessGroup#ip_list}.

---

##### `LoginMethod`<sup>Optional</sup> <a name="LoginMethod" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequire.property.loginMethod"></a>

```csharp
public string[] LoginMethod { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#login_method AccessGroup#login_method}.

---

##### `Okta`<sup>Optional</sup> <a name="Okta" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequire.property.okta"></a>

```csharp
public object Okta { get; set; }
```

- *Type:* object

okta block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#okta AccessGroup#okta}

---

##### `Saml`<sup>Optional</sup> <a name="Saml" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequire.property.saml"></a>

```csharp
public object Saml { get; set; }
```

- *Type:* object

saml block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#saml AccessGroup#saml}

---

##### `ServiceToken`<sup>Optional</sup> <a name="ServiceToken" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequire.property.serviceToken"></a>

```csharp
public string[] ServiceToken { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#service_token AccessGroup#service_token}.

---

### AccessGroupRequireAzure <a name="AccessGroupRequireAzure" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireAzure"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireAzure.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new AccessGroupRequireAzure {
    string[] Id = null,
    string IdentityProviderId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireAzure.property.id">Id</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#id AccessGroup#id}. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireAzure.property.identityProviderId">IdentityProviderId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#identity_provider_id AccessGroup#identity_provider_id}. |

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireAzure.property.id"></a>

```csharp
public string[] Id { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#id AccessGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IdentityProviderId`<sup>Optional</sup> <a name="IdentityProviderId" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireAzure.property.identityProviderId"></a>

```csharp
public string IdentityProviderId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#identity_provider_id AccessGroup#identity_provider_id}.

---

### AccessGroupRequireExternalEvaluation <a name="AccessGroupRequireExternalEvaluation" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireExternalEvaluation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireExternalEvaluation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new AccessGroupRequireExternalEvaluation {
    string EvaluateUrl = null,
    string KeysUrl = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireExternalEvaluation.property.evaluateUrl">EvaluateUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#evaluate_url AccessGroup#evaluate_url}. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireExternalEvaluation.property.keysUrl">KeysUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#keys_url AccessGroup#keys_url}. |

---

##### `EvaluateUrl`<sup>Optional</sup> <a name="EvaluateUrl" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireExternalEvaluation.property.evaluateUrl"></a>

```csharp
public string EvaluateUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#evaluate_url AccessGroup#evaluate_url}.

---

##### `KeysUrl`<sup>Optional</sup> <a name="KeysUrl" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireExternalEvaluation.property.keysUrl"></a>

```csharp
public string KeysUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#keys_url AccessGroup#keys_url}.

---

### AccessGroupRequireGithub <a name="AccessGroupRequireGithub" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGithub"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGithub.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new AccessGroupRequireGithub {
    string IdentityProviderId = null,
    string Name = null,
    string[] Teams = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGithub.property.identityProviderId">IdentityProviderId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#identity_provider_id AccessGroup#identity_provider_id}. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGithub.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#name AccessGroup#name}. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGithub.property.teams">Teams</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#teams AccessGroup#teams}. |

---

##### `IdentityProviderId`<sup>Optional</sup> <a name="IdentityProviderId" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGithub.property.identityProviderId"></a>

```csharp
public string IdentityProviderId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#identity_provider_id AccessGroup#identity_provider_id}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGithub.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#name AccessGroup#name}.

---

##### `Teams`<sup>Optional</sup> <a name="Teams" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGithub.property.teams"></a>

```csharp
public string[] Teams { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#teams AccessGroup#teams}.

---

### AccessGroupRequireGsuite <a name="AccessGroupRequireGsuite" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGsuite"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGsuite.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new AccessGroupRequireGsuite {
    string[] Email = null,
    string IdentityProviderId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGsuite.property.email">Email</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#email AccessGroup#email}. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGsuite.property.identityProviderId">IdentityProviderId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#identity_provider_id AccessGroup#identity_provider_id}. |

---

##### `Email`<sup>Optional</sup> <a name="Email" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGsuite.property.email"></a>

```csharp
public string[] Email { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#email AccessGroup#email}.

---

##### `IdentityProviderId`<sup>Optional</sup> <a name="IdentityProviderId" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGsuite.property.identityProviderId"></a>

```csharp
public string IdentityProviderId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#identity_provider_id AccessGroup#identity_provider_id}.

---

### AccessGroupRequireOkta <a name="AccessGroupRequireOkta" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOkta"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOkta.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new AccessGroupRequireOkta {
    string IdentityProviderId = null,
    string[] Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOkta.property.identityProviderId">IdentityProviderId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#identity_provider_id AccessGroup#identity_provider_id}. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOkta.property.name">Name</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#name AccessGroup#name}. |

---

##### `IdentityProviderId`<sup>Optional</sup> <a name="IdentityProviderId" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOkta.property.identityProviderId"></a>

```csharp
public string IdentityProviderId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#identity_provider_id AccessGroup#identity_provider_id}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOkta.property.name"></a>

```csharp
public string[] Name { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#name AccessGroup#name}.

---

### AccessGroupRequireSaml <a name="AccessGroupRequireSaml" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireSaml"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireSaml.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new AccessGroupRequireSaml {
    string AttributeName = null,
    string AttributeValue = null,
    string IdentityProviderId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireSaml.property.attributeName">AttributeName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#attribute_name AccessGroup#attribute_name}. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireSaml.property.attributeValue">AttributeValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#attribute_value AccessGroup#attribute_value}. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireSaml.property.identityProviderId">IdentityProviderId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#identity_provider_id AccessGroup#identity_provider_id}. |

---

##### `AttributeName`<sup>Optional</sup> <a name="AttributeName" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireSaml.property.attributeName"></a>

```csharp
public string AttributeName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#attribute_name AccessGroup#attribute_name}.

---

##### `AttributeValue`<sup>Optional</sup> <a name="AttributeValue" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireSaml.property.attributeValue"></a>

```csharp
public string AttributeValue { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#attribute_value AccessGroup#attribute_value}.

---

##### `IdentityProviderId`<sup>Optional</sup> <a name="IdentityProviderId" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireSaml.property.identityProviderId"></a>

```csharp
public string IdentityProviderId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#identity_provider_id AccessGroup#identity_provider_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### AccessGroupExcludeAzureList <a name="AccessGroupExcludeAzureList" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeAzureList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeAzureList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new AccessGroupExcludeAzureList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeAzureList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeAzureList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeAzureList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeAzureList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeAzureList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeAzureList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeAzureList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeAzureList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeAzureList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeAzureList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeAzureList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeAzureList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeAzureList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeAzureList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeAzureList.get"></a>

```csharp
private AccessGroupExcludeAzureOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeAzureList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeAzureList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeAzureList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeAzureList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeAzureList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeAzureList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeAzureList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AccessGroupExcludeAzureOutputReference <a name="AccessGroupExcludeAzureOutputReference" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeAzureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeAzureOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new AccessGroupExcludeAzureOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeAzureOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeAzureOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeAzureOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeAzureOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeAzureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeAzureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeAzureOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeAzureOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeAzureOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeAzureOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeAzureOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeAzureOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeAzureOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeAzureOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeAzureOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeAzureOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeAzureOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeAzureOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeAzureOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeAzureOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeAzureOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeAzureOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeAzureOutputReference.resetIdentityProviderId">ResetIdentityProviderId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeAzureOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeAzureOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeAzureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeAzureOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeAzureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeAzureOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeAzureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeAzureOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeAzureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeAzureOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeAzureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeAzureOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeAzureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeAzureOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeAzureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeAzureOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeAzureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeAzureOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeAzureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeAzureOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeAzureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeAzureOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeAzureOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeAzureOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetId` <a name="ResetId" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeAzureOutputReference.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIdentityProviderId` <a name="ResetIdentityProviderId" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeAzureOutputReference.resetIdentityProviderId"></a>

```csharp
private void ResetIdentityProviderId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeAzureOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeAzureOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeAzureOutputReference.property.identityProviderIdInput">IdentityProviderIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeAzureOutputReference.property.idInput">IdInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeAzureOutputReference.property.id">Id</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeAzureOutputReference.property.identityProviderId">IdentityProviderId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeAzureOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeAzureOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeAzureOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdentityProviderIdInput`<sup>Optional</sup> <a name="IdentityProviderIdInput" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeAzureOutputReference.property.identityProviderIdInput"></a>

```csharp
public string IdentityProviderIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeAzureOutputReference.property.idInput"></a>

```csharp
public string[] IdInput { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeAzureOutputReference.property.id"></a>

```csharp
public string[] Id { get; }
```

- *Type:* string[]

---

##### `IdentityProviderId`<sup>Required</sup> <a name="IdentityProviderId" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeAzureOutputReference.property.identityProviderId"></a>

```csharp
public string IdentityProviderId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeAzureOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AccessGroupExcludeExternalEvaluationOutputReference <a name="AccessGroupExcludeExternalEvaluationOutputReference" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeExternalEvaluationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeExternalEvaluationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new AccessGroupExcludeExternalEvaluationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeExternalEvaluationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeExternalEvaluationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeExternalEvaluationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeExternalEvaluationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeExternalEvaluationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeExternalEvaluationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeExternalEvaluationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeExternalEvaluationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeExternalEvaluationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeExternalEvaluationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeExternalEvaluationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeExternalEvaluationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeExternalEvaluationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeExternalEvaluationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeExternalEvaluationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeExternalEvaluationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeExternalEvaluationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeExternalEvaluationOutputReference.resetEvaluateUrl">ResetEvaluateUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeExternalEvaluationOutputReference.resetKeysUrl">ResetKeysUrl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeExternalEvaluationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeExternalEvaluationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeExternalEvaluationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeExternalEvaluationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeExternalEvaluationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeExternalEvaluationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeExternalEvaluationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeExternalEvaluationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeExternalEvaluationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeExternalEvaluationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeExternalEvaluationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeExternalEvaluationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeExternalEvaluationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeExternalEvaluationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeExternalEvaluationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeExternalEvaluationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeExternalEvaluationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeExternalEvaluationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeExternalEvaluationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeExternalEvaluationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeExternalEvaluationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeExternalEvaluationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeExternalEvaluationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeExternalEvaluationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEvaluateUrl` <a name="ResetEvaluateUrl" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeExternalEvaluationOutputReference.resetEvaluateUrl"></a>

```csharp
private void ResetEvaluateUrl()
```

##### `ResetKeysUrl` <a name="ResetKeysUrl" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeExternalEvaluationOutputReference.resetKeysUrl"></a>

```csharp
private void ResetKeysUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeExternalEvaluationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeExternalEvaluationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeExternalEvaluationOutputReference.property.evaluateUrlInput">EvaluateUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeExternalEvaluationOutputReference.property.keysUrlInput">KeysUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeExternalEvaluationOutputReference.property.evaluateUrl">EvaluateUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeExternalEvaluationOutputReference.property.keysUrl">KeysUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeExternalEvaluationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeExternalEvaluation">AccessGroupExcludeExternalEvaluation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeExternalEvaluationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeExternalEvaluationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EvaluateUrlInput`<sup>Optional</sup> <a name="EvaluateUrlInput" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeExternalEvaluationOutputReference.property.evaluateUrlInput"></a>

```csharp
public string EvaluateUrlInput { get; }
```

- *Type:* string

---

##### `KeysUrlInput`<sup>Optional</sup> <a name="KeysUrlInput" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeExternalEvaluationOutputReference.property.keysUrlInput"></a>

```csharp
public string KeysUrlInput { get; }
```

- *Type:* string

---

##### `EvaluateUrl`<sup>Required</sup> <a name="EvaluateUrl" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeExternalEvaluationOutputReference.property.evaluateUrl"></a>

```csharp
public string EvaluateUrl { get; }
```

- *Type:* string

---

##### `KeysUrl`<sup>Required</sup> <a name="KeysUrl" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeExternalEvaluationOutputReference.property.keysUrl"></a>

```csharp
public string KeysUrl { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeExternalEvaluationOutputReference.property.internalValue"></a>

```csharp
public AccessGroupExcludeExternalEvaluation InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeExternalEvaluation">AccessGroupExcludeExternalEvaluation</a>

---


### AccessGroupExcludeGithubList <a name="AccessGroupExcludeGithubList" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGithubList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGithubList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new AccessGroupExcludeGithubList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGithubList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGithubList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGithubList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGithubList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGithubList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGithubList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGithubList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGithubList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGithubList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGithubList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGithubList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGithubList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGithubList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGithubList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGithubList.get"></a>

```csharp
private AccessGroupExcludeGithubOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGithubList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGithubList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGithubList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGithubList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGithubList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGithubList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGithubList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AccessGroupExcludeGithubOutputReference <a name="AccessGroupExcludeGithubOutputReference" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGithubOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGithubOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new AccessGroupExcludeGithubOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGithubOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGithubOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGithubOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGithubOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGithubOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGithubOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGithubOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGithubOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGithubOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGithubOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGithubOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGithubOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGithubOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGithubOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGithubOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGithubOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGithubOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGithubOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGithubOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGithubOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGithubOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGithubOutputReference.resetIdentityProviderId">ResetIdentityProviderId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGithubOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGithubOutputReference.resetTeams">ResetTeams</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGithubOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGithubOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGithubOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGithubOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGithubOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGithubOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGithubOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGithubOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGithubOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGithubOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGithubOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGithubOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGithubOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGithubOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGithubOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGithubOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGithubOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGithubOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGithubOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGithubOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGithubOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGithubOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGithubOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGithubOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIdentityProviderId` <a name="ResetIdentityProviderId" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGithubOutputReference.resetIdentityProviderId"></a>

```csharp
private void ResetIdentityProviderId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGithubOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetTeams` <a name="ResetTeams" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGithubOutputReference.resetTeams"></a>

```csharp
private void ResetTeams()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGithubOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGithubOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGithubOutputReference.property.identityProviderIdInput">IdentityProviderIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGithubOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGithubOutputReference.property.teamsInput">TeamsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGithubOutputReference.property.identityProviderId">IdentityProviderId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGithubOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGithubOutputReference.property.teams">Teams</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGithubOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGithubOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGithubOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdentityProviderIdInput`<sup>Optional</sup> <a name="IdentityProviderIdInput" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGithubOutputReference.property.identityProviderIdInput"></a>

```csharp
public string IdentityProviderIdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGithubOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TeamsInput`<sup>Optional</sup> <a name="TeamsInput" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGithubOutputReference.property.teamsInput"></a>

```csharp
public string[] TeamsInput { get; }
```

- *Type:* string[]

---

##### `IdentityProviderId`<sup>Required</sup> <a name="IdentityProviderId" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGithubOutputReference.property.identityProviderId"></a>

```csharp
public string IdentityProviderId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGithubOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Teams`<sup>Required</sup> <a name="Teams" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGithubOutputReference.property.teams"></a>

```csharp
public string[] Teams { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGithubOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AccessGroupExcludeGsuiteList <a name="AccessGroupExcludeGsuiteList" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGsuiteList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGsuiteList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new AccessGroupExcludeGsuiteList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGsuiteList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGsuiteList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGsuiteList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGsuiteList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGsuiteList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGsuiteList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGsuiteList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGsuiteList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGsuiteList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGsuiteList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGsuiteList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGsuiteList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGsuiteList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGsuiteList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGsuiteList.get"></a>

```csharp
private AccessGroupExcludeGsuiteOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGsuiteList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGsuiteList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGsuiteList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGsuiteList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGsuiteList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGsuiteList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGsuiteList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AccessGroupExcludeGsuiteOutputReference <a name="AccessGroupExcludeGsuiteOutputReference" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGsuiteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGsuiteOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new AccessGroupExcludeGsuiteOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGsuiteOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGsuiteOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGsuiteOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGsuiteOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGsuiteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGsuiteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGsuiteOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGsuiteOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGsuiteOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGsuiteOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGsuiteOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGsuiteOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGsuiteOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGsuiteOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGsuiteOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGsuiteOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGsuiteOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGsuiteOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGsuiteOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGsuiteOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGsuiteOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGsuiteOutputReference.resetEmail">ResetEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGsuiteOutputReference.resetIdentityProviderId">ResetIdentityProviderId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGsuiteOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGsuiteOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGsuiteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGsuiteOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGsuiteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGsuiteOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGsuiteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGsuiteOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGsuiteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGsuiteOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGsuiteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGsuiteOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGsuiteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGsuiteOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGsuiteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGsuiteOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGsuiteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGsuiteOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGsuiteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGsuiteOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGsuiteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGsuiteOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGsuiteOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGsuiteOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEmail` <a name="ResetEmail" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGsuiteOutputReference.resetEmail"></a>

```csharp
private void ResetEmail()
```

##### `ResetIdentityProviderId` <a name="ResetIdentityProviderId" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGsuiteOutputReference.resetIdentityProviderId"></a>

```csharp
private void ResetIdentityProviderId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGsuiteOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGsuiteOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGsuiteOutputReference.property.emailInput">EmailInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGsuiteOutputReference.property.identityProviderIdInput">IdentityProviderIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGsuiteOutputReference.property.email">Email</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGsuiteOutputReference.property.identityProviderId">IdentityProviderId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGsuiteOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGsuiteOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGsuiteOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGsuiteOutputReference.property.emailInput"></a>

```csharp
public string[] EmailInput { get; }
```

- *Type:* string[]

---

##### `IdentityProviderIdInput`<sup>Optional</sup> <a name="IdentityProviderIdInput" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGsuiteOutputReference.property.identityProviderIdInput"></a>

```csharp
public string IdentityProviderIdInput { get; }
```

- *Type:* string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGsuiteOutputReference.property.email"></a>

```csharp
public string[] Email { get; }
```

- *Type:* string[]

---

##### `IdentityProviderId`<sup>Required</sup> <a name="IdentityProviderId" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGsuiteOutputReference.property.identityProviderId"></a>

```csharp
public string IdentityProviderId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGsuiteOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AccessGroupExcludeList <a name="AccessGroupExcludeList" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new AccessGroupExcludeList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeList.get"></a>

```csharp
private AccessGroupExcludeOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AccessGroupExcludeOktaList <a name="AccessGroupExcludeOktaList" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOktaList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOktaList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new AccessGroupExcludeOktaList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOktaList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOktaList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOktaList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOktaList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOktaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOktaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOktaList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOktaList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOktaList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOktaList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOktaList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOktaList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOktaList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOktaList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOktaList.get"></a>

```csharp
private AccessGroupExcludeOktaOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOktaList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOktaList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOktaList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOktaList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOktaList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOktaList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOktaList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AccessGroupExcludeOktaOutputReference <a name="AccessGroupExcludeOktaOutputReference" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOktaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOktaOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new AccessGroupExcludeOktaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOktaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOktaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOktaOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOktaOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOktaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOktaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOktaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOktaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOktaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOktaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOktaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOktaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOktaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOktaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOktaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOktaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOktaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOktaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOktaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOktaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOktaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOktaOutputReference.resetIdentityProviderId">ResetIdentityProviderId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOktaOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOktaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOktaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOktaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOktaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOktaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOktaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOktaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOktaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOktaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOktaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOktaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOktaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOktaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOktaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOktaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOktaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOktaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOktaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOktaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOktaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOktaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOktaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOktaOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOktaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIdentityProviderId` <a name="ResetIdentityProviderId" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOktaOutputReference.resetIdentityProviderId"></a>

```csharp
private void ResetIdentityProviderId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOktaOutputReference.resetName"></a>

```csharp
private void ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOktaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOktaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOktaOutputReference.property.identityProviderIdInput">IdentityProviderIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOktaOutputReference.property.nameInput">NameInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOktaOutputReference.property.identityProviderId">IdentityProviderId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOktaOutputReference.property.name">Name</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOktaOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOktaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOktaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdentityProviderIdInput`<sup>Optional</sup> <a name="IdentityProviderIdInput" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOktaOutputReference.property.identityProviderIdInput"></a>

```csharp
public string IdentityProviderIdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOktaOutputReference.property.nameInput"></a>

```csharp
public string[] NameInput { get; }
```

- *Type:* string[]

---

##### `IdentityProviderId`<sup>Required</sup> <a name="IdentityProviderId" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOktaOutputReference.property.identityProviderId"></a>

```csharp
public string IdentityProviderId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOktaOutputReference.property.name"></a>

```csharp
public string[] Name { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOktaOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AccessGroupExcludeOutputReference <a name="AccessGroupExcludeOutputReference" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new AccessGroupExcludeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.putAzure">PutAzure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.putExternalEvaluation">PutExternalEvaluation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.putGithub">PutGithub</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.putGsuite">PutGsuite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.putOkta">PutOkta</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.putSaml">PutSaml</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.resetAnyValidServiceToken">ResetAnyValidServiceToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.resetAuthMethod">ResetAuthMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.resetAzure">ResetAzure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.resetCertificate">ResetCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.resetCommonName">ResetCommonName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.resetDevicePosture">ResetDevicePosture</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.resetEmail">ResetEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.resetEmailDomain">ResetEmailDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.resetEveryone">ResetEveryone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.resetExternalEvaluation">ResetExternalEvaluation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.resetGeo">ResetGeo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.resetGithub">ResetGithub</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.resetGroup">ResetGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.resetGsuite">ResetGsuite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.resetIp">ResetIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.resetIpList">ResetIpList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.resetLoginMethod">ResetLoginMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.resetOkta">ResetOkta</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.resetSaml">ResetSaml</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.resetServiceToken">ResetServiceToken</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAzure` <a name="PutAzure" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.putAzure"></a>

```csharp
private void PutAzure(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.putAzure.parameter.value"></a>

- *Type:* object

---

##### `PutExternalEvaluation` <a name="PutExternalEvaluation" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.putExternalEvaluation"></a>

```csharp
private void PutExternalEvaluation(AccessGroupExcludeExternalEvaluation Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.putExternalEvaluation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeExternalEvaluation">AccessGroupExcludeExternalEvaluation</a>

---

##### `PutGithub` <a name="PutGithub" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.putGithub"></a>

```csharp
private void PutGithub(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.putGithub.parameter.value"></a>

- *Type:* object

---

##### `PutGsuite` <a name="PutGsuite" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.putGsuite"></a>

```csharp
private void PutGsuite(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.putGsuite.parameter.value"></a>

- *Type:* object

---

##### `PutOkta` <a name="PutOkta" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.putOkta"></a>

```csharp
private void PutOkta(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.putOkta.parameter.value"></a>

- *Type:* object

---

##### `PutSaml` <a name="PutSaml" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.putSaml"></a>

```csharp
private void PutSaml(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.putSaml.parameter.value"></a>

- *Type:* object

---

##### `ResetAnyValidServiceToken` <a name="ResetAnyValidServiceToken" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.resetAnyValidServiceToken"></a>

```csharp
private void ResetAnyValidServiceToken()
```

##### `ResetAuthMethod` <a name="ResetAuthMethod" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.resetAuthMethod"></a>

```csharp
private void ResetAuthMethod()
```

##### `ResetAzure` <a name="ResetAzure" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.resetAzure"></a>

```csharp
private void ResetAzure()
```

##### `ResetCertificate` <a name="ResetCertificate" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.resetCertificate"></a>

```csharp
private void ResetCertificate()
```

##### `ResetCommonName` <a name="ResetCommonName" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.resetCommonName"></a>

```csharp
private void ResetCommonName()
```

##### `ResetDevicePosture` <a name="ResetDevicePosture" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.resetDevicePosture"></a>

```csharp
private void ResetDevicePosture()
```

##### `ResetEmail` <a name="ResetEmail" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.resetEmail"></a>

```csharp
private void ResetEmail()
```

##### `ResetEmailDomain` <a name="ResetEmailDomain" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.resetEmailDomain"></a>

```csharp
private void ResetEmailDomain()
```

##### `ResetEveryone` <a name="ResetEveryone" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.resetEveryone"></a>

```csharp
private void ResetEveryone()
```

##### `ResetExternalEvaluation` <a name="ResetExternalEvaluation" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.resetExternalEvaluation"></a>

```csharp
private void ResetExternalEvaluation()
```

##### `ResetGeo` <a name="ResetGeo" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.resetGeo"></a>

```csharp
private void ResetGeo()
```

##### `ResetGithub` <a name="ResetGithub" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.resetGithub"></a>

```csharp
private void ResetGithub()
```

##### `ResetGroup` <a name="ResetGroup" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.resetGroup"></a>

```csharp
private void ResetGroup()
```

##### `ResetGsuite` <a name="ResetGsuite" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.resetGsuite"></a>

```csharp
private void ResetGsuite()
```

##### `ResetIp` <a name="ResetIp" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.resetIp"></a>

```csharp
private void ResetIp()
```

##### `ResetIpList` <a name="ResetIpList" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.resetIpList"></a>

```csharp
private void ResetIpList()
```

##### `ResetLoginMethod` <a name="ResetLoginMethod" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.resetLoginMethod"></a>

```csharp
private void ResetLoginMethod()
```

##### `ResetOkta` <a name="ResetOkta" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.resetOkta"></a>

```csharp
private void ResetOkta()
```

##### `ResetSaml` <a name="ResetSaml" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.resetSaml"></a>

```csharp
private void ResetSaml()
```

##### `ResetServiceToken` <a name="ResetServiceToken" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.resetServiceToken"></a>

```csharp
private void ResetServiceToken()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.property.azure">Azure</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeAzureList">AccessGroupExcludeAzureList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.property.externalEvaluation">ExternalEvaluation</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeExternalEvaluationOutputReference">AccessGroupExcludeExternalEvaluationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.property.github">Github</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGithubList">AccessGroupExcludeGithubList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.property.gsuite">Gsuite</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGsuiteList">AccessGroupExcludeGsuiteList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.property.okta">Okta</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOktaList">AccessGroupExcludeOktaList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.property.saml">Saml</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeSamlList">AccessGroupExcludeSamlList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.property.anyValidServiceTokenInput">AnyValidServiceTokenInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.property.authMethodInput">AuthMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.property.azureInput">AzureInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.property.certificateInput">CertificateInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.property.commonNameInput">CommonNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.property.devicePostureInput">DevicePostureInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.property.emailDomainInput">EmailDomainInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.property.emailInput">EmailInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.property.everyoneInput">EveryoneInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.property.externalEvaluationInput">ExternalEvaluationInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeExternalEvaluation">AccessGroupExcludeExternalEvaluation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.property.geoInput">GeoInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.property.githubInput">GithubInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.property.groupInput">GroupInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.property.gsuiteInput">GsuiteInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.property.ipInput">IpInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.property.ipListInput">IpListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.property.loginMethodInput">LoginMethodInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.property.oktaInput">OktaInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.property.samlInput">SamlInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.property.serviceTokenInput">ServiceTokenInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.property.anyValidServiceToken">AnyValidServiceToken</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.property.authMethod">AuthMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.property.certificate">Certificate</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.property.commonName">CommonName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.property.devicePosture">DevicePosture</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.property.email">Email</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.property.emailDomain">EmailDomain</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.property.everyone">Everyone</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.property.geo">Geo</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.property.group">Group</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.property.ip">Ip</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.property.ipList">IpList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.property.loginMethod">LoginMethod</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.property.serviceToken">ServiceToken</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Azure`<sup>Required</sup> <a name="Azure" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.property.azure"></a>

```csharp
public AccessGroupExcludeAzureList Azure { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeAzureList">AccessGroupExcludeAzureList</a>

---

##### `ExternalEvaluation`<sup>Required</sup> <a name="ExternalEvaluation" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.property.externalEvaluation"></a>

```csharp
public AccessGroupExcludeExternalEvaluationOutputReference ExternalEvaluation { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeExternalEvaluationOutputReference">AccessGroupExcludeExternalEvaluationOutputReference</a>

---

##### `Github`<sup>Required</sup> <a name="Github" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.property.github"></a>

```csharp
public AccessGroupExcludeGithubList Github { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGithubList">AccessGroupExcludeGithubList</a>

---

##### `Gsuite`<sup>Required</sup> <a name="Gsuite" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.property.gsuite"></a>

```csharp
public AccessGroupExcludeGsuiteList Gsuite { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeGsuiteList">AccessGroupExcludeGsuiteList</a>

---

##### `Okta`<sup>Required</sup> <a name="Okta" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.property.okta"></a>

```csharp
public AccessGroupExcludeOktaList Okta { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOktaList">AccessGroupExcludeOktaList</a>

---

##### `Saml`<sup>Required</sup> <a name="Saml" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.property.saml"></a>

```csharp
public AccessGroupExcludeSamlList Saml { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeSamlList">AccessGroupExcludeSamlList</a>

---

##### `AnyValidServiceTokenInput`<sup>Optional</sup> <a name="AnyValidServiceTokenInput" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.property.anyValidServiceTokenInput"></a>

```csharp
public object AnyValidServiceTokenInput { get; }
```

- *Type:* object

---

##### `AuthMethodInput`<sup>Optional</sup> <a name="AuthMethodInput" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.property.authMethodInput"></a>

```csharp
public string AuthMethodInput { get; }
```

- *Type:* string

---

##### `AzureInput`<sup>Optional</sup> <a name="AzureInput" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.property.azureInput"></a>

```csharp
public object AzureInput { get; }
```

- *Type:* object

---

##### `CertificateInput`<sup>Optional</sup> <a name="CertificateInput" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.property.certificateInput"></a>

```csharp
public object CertificateInput { get; }
```

- *Type:* object

---

##### `CommonNameInput`<sup>Optional</sup> <a name="CommonNameInput" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.property.commonNameInput"></a>

```csharp
public string CommonNameInput { get; }
```

- *Type:* string

---

##### `DevicePostureInput`<sup>Optional</sup> <a name="DevicePostureInput" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.property.devicePostureInput"></a>

```csharp
public string[] DevicePostureInput { get; }
```

- *Type:* string[]

---

##### `EmailDomainInput`<sup>Optional</sup> <a name="EmailDomainInput" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.property.emailDomainInput"></a>

```csharp
public string[] EmailDomainInput { get; }
```

- *Type:* string[]

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.property.emailInput"></a>

```csharp
public string[] EmailInput { get; }
```

- *Type:* string[]

---

##### `EveryoneInput`<sup>Optional</sup> <a name="EveryoneInput" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.property.everyoneInput"></a>

```csharp
public object EveryoneInput { get; }
```

- *Type:* object

---

##### `ExternalEvaluationInput`<sup>Optional</sup> <a name="ExternalEvaluationInput" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.property.externalEvaluationInput"></a>

```csharp
public AccessGroupExcludeExternalEvaluation ExternalEvaluationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeExternalEvaluation">AccessGroupExcludeExternalEvaluation</a>

---

##### `GeoInput`<sup>Optional</sup> <a name="GeoInput" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.property.geoInput"></a>

```csharp
public string[] GeoInput { get; }
```

- *Type:* string[]

---

##### `GithubInput`<sup>Optional</sup> <a name="GithubInput" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.property.githubInput"></a>

```csharp
public object GithubInput { get; }
```

- *Type:* object

---

##### `GroupInput`<sup>Optional</sup> <a name="GroupInput" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.property.groupInput"></a>

```csharp
public string[] GroupInput { get; }
```

- *Type:* string[]

---

##### `GsuiteInput`<sup>Optional</sup> <a name="GsuiteInput" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.property.gsuiteInput"></a>

```csharp
public object GsuiteInput { get; }
```

- *Type:* object

---

##### `IpInput`<sup>Optional</sup> <a name="IpInput" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.property.ipInput"></a>

```csharp
public string[] IpInput { get; }
```

- *Type:* string[]

---

##### `IpListInput`<sup>Optional</sup> <a name="IpListInput" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.property.ipListInput"></a>

```csharp
public string[] IpListInput { get; }
```

- *Type:* string[]

---

##### `LoginMethodInput`<sup>Optional</sup> <a name="LoginMethodInput" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.property.loginMethodInput"></a>

```csharp
public string[] LoginMethodInput { get; }
```

- *Type:* string[]

---

##### `OktaInput`<sup>Optional</sup> <a name="OktaInput" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.property.oktaInput"></a>

```csharp
public object OktaInput { get; }
```

- *Type:* object

---

##### `SamlInput`<sup>Optional</sup> <a name="SamlInput" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.property.samlInput"></a>

```csharp
public object SamlInput { get; }
```

- *Type:* object

---

##### `ServiceTokenInput`<sup>Optional</sup> <a name="ServiceTokenInput" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.property.serviceTokenInput"></a>

```csharp
public string[] ServiceTokenInput { get; }
```

- *Type:* string[]

---

##### `AnyValidServiceToken`<sup>Required</sup> <a name="AnyValidServiceToken" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.property.anyValidServiceToken"></a>

```csharp
public object AnyValidServiceToken { get; }
```

- *Type:* object

---

##### `AuthMethod`<sup>Required</sup> <a name="AuthMethod" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.property.authMethod"></a>

```csharp
public string AuthMethod { get; }
```

- *Type:* string

---

##### `Certificate`<sup>Required</sup> <a name="Certificate" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.property.certificate"></a>

```csharp
public object Certificate { get; }
```

- *Type:* object

---

##### `CommonName`<sup>Required</sup> <a name="CommonName" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.property.commonName"></a>

```csharp
public string CommonName { get; }
```

- *Type:* string

---

##### `DevicePosture`<sup>Required</sup> <a name="DevicePosture" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.property.devicePosture"></a>

```csharp
public string[] DevicePosture { get; }
```

- *Type:* string[]

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.property.email"></a>

```csharp
public string[] Email { get; }
```

- *Type:* string[]

---

##### `EmailDomain`<sup>Required</sup> <a name="EmailDomain" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.property.emailDomain"></a>

```csharp
public string[] EmailDomain { get; }
```

- *Type:* string[]

---

##### `Everyone`<sup>Required</sup> <a name="Everyone" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.property.everyone"></a>

```csharp
public object Everyone { get; }
```

- *Type:* object

---

##### `Geo`<sup>Required</sup> <a name="Geo" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.property.geo"></a>

```csharp
public string[] Geo { get; }
```

- *Type:* string[]

---

##### `Group`<sup>Required</sup> <a name="Group" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.property.group"></a>

```csharp
public string[] Group { get; }
```

- *Type:* string[]

---

##### `Ip`<sup>Required</sup> <a name="Ip" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.property.ip"></a>

```csharp
public string[] Ip { get; }
```

- *Type:* string[]

---

##### `IpList`<sup>Required</sup> <a name="IpList" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.property.ipList"></a>

```csharp
public string[] IpList { get; }
```

- *Type:* string[]

---

##### `LoginMethod`<sup>Required</sup> <a name="LoginMethod" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.property.loginMethod"></a>

```csharp
public string[] LoginMethod { get; }
```

- *Type:* string[]

---

##### `ServiceToken`<sup>Required</sup> <a name="ServiceToken" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.property.serviceToken"></a>

```csharp
public string[] ServiceToken { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AccessGroupExcludeSamlList <a name="AccessGroupExcludeSamlList" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeSamlList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeSamlList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new AccessGroupExcludeSamlList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeSamlList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeSamlList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeSamlList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeSamlList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeSamlList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeSamlList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeSamlList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeSamlList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeSamlList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeSamlList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeSamlList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeSamlList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeSamlList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeSamlList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeSamlList.get"></a>

```csharp
private AccessGroupExcludeSamlOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeSamlList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeSamlList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeSamlList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeSamlList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeSamlList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeSamlList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeSamlList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AccessGroupExcludeSamlOutputReference <a name="AccessGroupExcludeSamlOutputReference" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeSamlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeSamlOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new AccessGroupExcludeSamlOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeSamlOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeSamlOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeSamlOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeSamlOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeSamlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeSamlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeSamlOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeSamlOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeSamlOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeSamlOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeSamlOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeSamlOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeSamlOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeSamlOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeSamlOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeSamlOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeSamlOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeSamlOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeSamlOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeSamlOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeSamlOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeSamlOutputReference.resetAttributeName">ResetAttributeName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeSamlOutputReference.resetAttributeValue">ResetAttributeValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeSamlOutputReference.resetIdentityProviderId">ResetIdentityProviderId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeSamlOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeSamlOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeSamlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeSamlOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeSamlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeSamlOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeSamlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeSamlOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeSamlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeSamlOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeSamlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeSamlOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeSamlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeSamlOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeSamlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeSamlOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeSamlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeSamlOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeSamlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeSamlOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeSamlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeSamlOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeSamlOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeSamlOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAttributeName` <a name="ResetAttributeName" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeSamlOutputReference.resetAttributeName"></a>

```csharp
private void ResetAttributeName()
```

##### `ResetAttributeValue` <a name="ResetAttributeValue" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeSamlOutputReference.resetAttributeValue"></a>

```csharp
private void ResetAttributeValue()
```

##### `ResetIdentityProviderId` <a name="ResetIdentityProviderId" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeSamlOutputReference.resetIdentityProviderId"></a>

```csharp
private void ResetIdentityProviderId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeSamlOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeSamlOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeSamlOutputReference.property.attributeNameInput">AttributeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeSamlOutputReference.property.attributeValueInput">AttributeValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeSamlOutputReference.property.identityProviderIdInput">IdentityProviderIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeSamlOutputReference.property.attributeName">AttributeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeSamlOutputReference.property.attributeValue">AttributeValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeSamlOutputReference.property.identityProviderId">IdentityProviderId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeSamlOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeSamlOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeSamlOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AttributeNameInput`<sup>Optional</sup> <a name="AttributeNameInput" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeSamlOutputReference.property.attributeNameInput"></a>

```csharp
public string AttributeNameInput { get; }
```

- *Type:* string

---

##### `AttributeValueInput`<sup>Optional</sup> <a name="AttributeValueInput" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeSamlOutputReference.property.attributeValueInput"></a>

```csharp
public string AttributeValueInput { get; }
```

- *Type:* string

---

##### `IdentityProviderIdInput`<sup>Optional</sup> <a name="IdentityProviderIdInput" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeSamlOutputReference.property.identityProviderIdInput"></a>

```csharp
public string IdentityProviderIdInput { get; }
```

- *Type:* string

---

##### `AttributeName`<sup>Required</sup> <a name="AttributeName" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeSamlOutputReference.property.attributeName"></a>

```csharp
public string AttributeName { get; }
```

- *Type:* string

---

##### `AttributeValue`<sup>Required</sup> <a name="AttributeValue" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeSamlOutputReference.property.attributeValue"></a>

```csharp
public string AttributeValue { get; }
```

- *Type:* string

---

##### `IdentityProviderId`<sup>Required</sup> <a name="IdentityProviderId" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeSamlOutputReference.property.identityProviderId"></a>

```csharp
public string IdentityProviderId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupExcludeSamlOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AccessGroupIncludeAzureList <a name="AccessGroupIncludeAzureList" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeAzureList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeAzureList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new AccessGroupIncludeAzureList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeAzureList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeAzureList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeAzureList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeAzureList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeAzureList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeAzureList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeAzureList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeAzureList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeAzureList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeAzureList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeAzureList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeAzureList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeAzureList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeAzureList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeAzureList.get"></a>

```csharp
private AccessGroupIncludeAzureOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeAzureList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeAzureList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeAzureList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeAzureList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeAzureList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeAzureList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeAzureList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AccessGroupIncludeAzureOutputReference <a name="AccessGroupIncludeAzureOutputReference" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeAzureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeAzureOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new AccessGroupIncludeAzureOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeAzureOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeAzureOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeAzureOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeAzureOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeAzureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeAzureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeAzureOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeAzureOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeAzureOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeAzureOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeAzureOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeAzureOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeAzureOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeAzureOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeAzureOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeAzureOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeAzureOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeAzureOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeAzureOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeAzureOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeAzureOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeAzureOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeAzureOutputReference.resetIdentityProviderId">ResetIdentityProviderId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeAzureOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeAzureOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeAzureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeAzureOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeAzureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeAzureOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeAzureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeAzureOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeAzureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeAzureOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeAzureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeAzureOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeAzureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeAzureOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeAzureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeAzureOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeAzureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeAzureOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeAzureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeAzureOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeAzureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeAzureOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeAzureOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeAzureOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetId` <a name="ResetId" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeAzureOutputReference.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIdentityProviderId` <a name="ResetIdentityProviderId" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeAzureOutputReference.resetIdentityProviderId"></a>

```csharp
private void ResetIdentityProviderId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeAzureOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeAzureOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeAzureOutputReference.property.identityProviderIdInput">IdentityProviderIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeAzureOutputReference.property.idInput">IdInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeAzureOutputReference.property.id">Id</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeAzureOutputReference.property.identityProviderId">IdentityProviderId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeAzureOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeAzureOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeAzureOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdentityProviderIdInput`<sup>Optional</sup> <a name="IdentityProviderIdInput" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeAzureOutputReference.property.identityProviderIdInput"></a>

```csharp
public string IdentityProviderIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeAzureOutputReference.property.idInput"></a>

```csharp
public string[] IdInput { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeAzureOutputReference.property.id"></a>

```csharp
public string[] Id { get; }
```

- *Type:* string[]

---

##### `IdentityProviderId`<sup>Required</sup> <a name="IdentityProviderId" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeAzureOutputReference.property.identityProviderId"></a>

```csharp
public string IdentityProviderId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeAzureOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AccessGroupIncludeExternalEvaluationOutputReference <a name="AccessGroupIncludeExternalEvaluationOutputReference" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeExternalEvaluationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeExternalEvaluationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new AccessGroupIncludeExternalEvaluationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeExternalEvaluationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeExternalEvaluationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeExternalEvaluationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeExternalEvaluationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeExternalEvaluationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeExternalEvaluationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeExternalEvaluationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeExternalEvaluationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeExternalEvaluationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeExternalEvaluationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeExternalEvaluationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeExternalEvaluationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeExternalEvaluationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeExternalEvaluationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeExternalEvaluationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeExternalEvaluationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeExternalEvaluationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeExternalEvaluationOutputReference.resetEvaluateUrl">ResetEvaluateUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeExternalEvaluationOutputReference.resetKeysUrl">ResetKeysUrl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeExternalEvaluationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeExternalEvaluationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeExternalEvaluationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeExternalEvaluationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeExternalEvaluationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeExternalEvaluationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeExternalEvaluationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeExternalEvaluationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeExternalEvaluationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeExternalEvaluationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeExternalEvaluationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeExternalEvaluationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeExternalEvaluationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeExternalEvaluationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeExternalEvaluationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeExternalEvaluationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeExternalEvaluationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeExternalEvaluationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeExternalEvaluationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeExternalEvaluationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeExternalEvaluationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeExternalEvaluationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeExternalEvaluationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeExternalEvaluationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEvaluateUrl` <a name="ResetEvaluateUrl" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeExternalEvaluationOutputReference.resetEvaluateUrl"></a>

```csharp
private void ResetEvaluateUrl()
```

##### `ResetKeysUrl` <a name="ResetKeysUrl" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeExternalEvaluationOutputReference.resetKeysUrl"></a>

```csharp
private void ResetKeysUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeExternalEvaluationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeExternalEvaluationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeExternalEvaluationOutputReference.property.evaluateUrlInput">EvaluateUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeExternalEvaluationOutputReference.property.keysUrlInput">KeysUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeExternalEvaluationOutputReference.property.evaluateUrl">EvaluateUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeExternalEvaluationOutputReference.property.keysUrl">KeysUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeExternalEvaluationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeExternalEvaluation">AccessGroupIncludeExternalEvaluation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeExternalEvaluationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeExternalEvaluationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EvaluateUrlInput`<sup>Optional</sup> <a name="EvaluateUrlInput" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeExternalEvaluationOutputReference.property.evaluateUrlInput"></a>

```csharp
public string EvaluateUrlInput { get; }
```

- *Type:* string

---

##### `KeysUrlInput`<sup>Optional</sup> <a name="KeysUrlInput" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeExternalEvaluationOutputReference.property.keysUrlInput"></a>

```csharp
public string KeysUrlInput { get; }
```

- *Type:* string

---

##### `EvaluateUrl`<sup>Required</sup> <a name="EvaluateUrl" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeExternalEvaluationOutputReference.property.evaluateUrl"></a>

```csharp
public string EvaluateUrl { get; }
```

- *Type:* string

---

##### `KeysUrl`<sup>Required</sup> <a name="KeysUrl" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeExternalEvaluationOutputReference.property.keysUrl"></a>

```csharp
public string KeysUrl { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeExternalEvaluationOutputReference.property.internalValue"></a>

```csharp
public AccessGroupIncludeExternalEvaluation InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeExternalEvaluation">AccessGroupIncludeExternalEvaluation</a>

---


### AccessGroupIncludeGithubList <a name="AccessGroupIncludeGithubList" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGithubList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGithubList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new AccessGroupIncludeGithubList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGithubList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGithubList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGithubList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGithubList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGithubList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGithubList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGithubList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGithubList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGithubList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGithubList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGithubList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGithubList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGithubList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGithubList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGithubList.get"></a>

```csharp
private AccessGroupIncludeGithubOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGithubList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGithubList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGithubList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGithubList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGithubList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGithubList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGithubList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AccessGroupIncludeGithubOutputReference <a name="AccessGroupIncludeGithubOutputReference" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGithubOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGithubOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new AccessGroupIncludeGithubOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGithubOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGithubOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGithubOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGithubOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGithubOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGithubOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGithubOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGithubOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGithubOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGithubOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGithubOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGithubOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGithubOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGithubOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGithubOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGithubOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGithubOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGithubOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGithubOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGithubOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGithubOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGithubOutputReference.resetIdentityProviderId">ResetIdentityProviderId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGithubOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGithubOutputReference.resetTeams">ResetTeams</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGithubOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGithubOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGithubOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGithubOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGithubOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGithubOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGithubOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGithubOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGithubOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGithubOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGithubOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGithubOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGithubOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGithubOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGithubOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGithubOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGithubOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGithubOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGithubOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGithubOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGithubOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGithubOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGithubOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGithubOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIdentityProviderId` <a name="ResetIdentityProviderId" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGithubOutputReference.resetIdentityProviderId"></a>

```csharp
private void ResetIdentityProviderId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGithubOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetTeams` <a name="ResetTeams" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGithubOutputReference.resetTeams"></a>

```csharp
private void ResetTeams()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGithubOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGithubOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGithubOutputReference.property.identityProviderIdInput">IdentityProviderIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGithubOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGithubOutputReference.property.teamsInput">TeamsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGithubOutputReference.property.identityProviderId">IdentityProviderId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGithubOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGithubOutputReference.property.teams">Teams</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGithubOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGithubOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGithubOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdentityProviderIdInput`<sup>Optional</sup> <a name="IdentityProviderIdInput" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGithubOutputReference.property.identityProviderIdInput"></a>

```csharp
public string IdentityProviderIdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGithubOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TeamsInput`<sup>Optional</sup> <a name="TeamsInput" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGithubOutputReference.property.teamsInput"></a>

```csharp
public string[] TeamsInput { get; }
```

- *Type:* string[]

---

##### `IdentityProviderId`<sup>Required</sup> <a name="IdentityProviderId" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGithubOutputReference.property.identityProviderId"></a>

```csharp
public string IdentityProviderId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGithubOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Teams`<sup>Required</sup> <a name="Teams" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGithubOutputReference.property.teams"></a>

```csharp
public string[] Teams { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGithubOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AccessGroupIncludeGsuiteList <a name="AccessGroupIncludeGsuiteList" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGsuiteList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGsuiteList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new AccessGroupIncludeGsuiteList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGsuiteList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGsuiteList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGsuiteList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGsuiteList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGsuiteList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGsuiteList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGsuiteList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGsuiteList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGsuiteList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGsuiteList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGsuiteList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGsuiteList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGsuiteList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGsuiteList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGsuiteList.get"></a>

```csharp
private AccessGroupIncludeGsuiteOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGsuiteList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGsuiteList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGsuiteList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGsuiteList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGsuiteList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGsuiteList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGsuiteList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AccessGroupIncludeGsuiteOutputReference <a name="AccessGroupIncludeGsuiteOutputReference" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGsuiteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGsuiteOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new AccessGroupIncludeGsuiteOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGsuiteOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGsuiteOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGsuiteOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGsuiteOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGsuiteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGsuiteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGsuiteOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGsuiteOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGsuiteOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGsuiteOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGsuiteOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGsuiteOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGsuiteOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGsuiteOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGsuiteOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGsuiteOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGsuiteOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGsuiteOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGsuiteOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGsuiteOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGsuiteOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGsuiteOutputReference.resetEmail">ResetEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGsuiteOutputReference.resetIdentityProviderId">ResetIdentityProviderId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGsuiteOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGsuiteOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGsuiteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGsuiteOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGsuiteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGsuiteOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGsuiteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGsuiteOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGsuiteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGsuiteOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGsuiteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGsuiteOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGsuiteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGsuiteOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGsuiteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGsuiteOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGsuiteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGsuiteOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGsuiteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGsuiteOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGsuiteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGsuiteOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGsuiteOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGsuiteOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEmail` <a name="ResetEmail" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGsuiteOutputReference.resetEmail"></a>

```csharp
private void ResetEmail()
```

##### `ResetIdentityProviderId` <a name="ResetIdentityProviderId" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGsuiteOutputReference.resetIdentityProviderId"></a>

```csharp
private void ResetIdentityProviderId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGsuiteOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGsuiteOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGsuiteOutputReference.property.emailInput">EmailInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGsuiteOutputReference.property.identityProviderIdInput">IdentityProviderIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGsuiteOutputReference.property.email">Email</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGsuiteOutputReference.property.identityProviderId">IdentityProviderId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGsuiteOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGsuiteOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGsuiteOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGsuiteOutputReference.property.emailInput"></a>

```csharp
public string[] EmailInput { get; }
```

- *Type:* string[]

---

##### `IdentityProviderIdInput`<sup>Optional</sup> <a name="IdentityProviderIdInput" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGsuiteOutputReference.property.identityProviderIdInput"></a>

```csharp
public string IdentityProviderIdInput { get; }
```

- *Type:* string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGsuiteOutputReference.property.email"></a>

```csharp
public string[] Email { get; }
```

- *Type:* string[]

---

##### `IdentityProviderId`<sup>Required</sup> <a name="IdentityProviderId" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGsuiteOutputReference.property.identityProviderId"></a>

```csharp
public string IdentityProviderId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGsuiteOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AccessGroupIncludeList <a name="AccessGroupIncludeList" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new AccessGroupIncludeList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeList.get"></a>

```csharp
private AccessGroupIncludeOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AccessGroupIncludeOktaList <a name="AccessGroupIncludeOktaList" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOktaList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOktaList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new AccessGroupIncludeOktaList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOktaList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOktaList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOktaList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOktaList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOktaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOktaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOktaList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOktaList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOktaList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOktaList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOktaList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOktaList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOktaList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOktaList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOktaList.get"></a>

```csharp
private AccessGroupIncludeOktaOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOktaList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOktaList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOktaList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOktaList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOktaList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOktaList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOktaList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AccessGroupIncludeOktaOutputReference <a name="AccessGroupIncludeOktaOutputReference" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOktaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOktaOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new AccessGroupIncludeOktaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOktaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOktaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOktaOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOktaOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOktaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOktaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOktaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOktaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOktaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOktaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOktaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOktaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOktaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOktaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOktaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOktaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOktaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOktaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOktaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOktaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOktaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOktaOutputReference.resetIdentityProviderId">ResetIdentityProviderId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOktaOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOktaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOktaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOktaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOktaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOktaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOktaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOktaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOktaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOktaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOktaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOktaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOktaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOktaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOktaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOktaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOktaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOktaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOktaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOktaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOktaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOktaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOktaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOktaOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOktaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIdentityProviderId` <a name="ResetIdentityProviderId" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOktaOutputReference.resetIdentityProviderId"></a>

```csharp
private void ResetIdentityProviderId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOktaOutputReference.resetName"></a>

```csharp
private void ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOktaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOktaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOktaOutputReference.property.identityProviderIdInput">IdentityProviderIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOktaOutputReference.property.nameInput">NameInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOktaOutputReference.property.identityProviderId">IdentityProviderId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOktaOutputReference.property.name">Name</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOktaOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOktaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOktaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdentityProviderIdInput`<sup>Optional</sup> <a name="IdentityProviderIdInput" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOktaOutputReference.property.identityProviderIdInput"></a>

```csharp
public string IdentityProviderIdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOktaOutputReference.property.nameInput"></a>

```csharp
public string[] NameInput { get; }
```

- *Type:* string[]

---

##### `IdentityProviderId`<sup>Required</sup> <a name="IdentityProviderId" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOktaOutputReference.property.identityProviderId"></a>

```csharp
public string IdentityProviderId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOktaOutputReference.property.name"></a>

```csharp
public string[] Name { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOktaOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AccessGroupIncludeOutputReference <a name="AccessGroupIncludeOutputReference" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new AccessGroupIncludeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.putAzure">PutAzure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.putExternalEvaluation">PutExternalEvaluation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.putGithub">PutGithub</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.putGsuite">PutGsuite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.putOkta">PutOkta</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.putSaml">PutSaml</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.resetAnyValidServiceToken">ResetAnyValidServiceToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.resetAuthMethod">ResetAuthMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.resetAzure">ResetAzure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.resetCertificate">ResetCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.resetCommonName">ResetCommonName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.resetDevicePosture">ResetDevicePosture</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.resetEmail">ResetEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.resetEmailDomain">ResetEmailDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.resetEveryone">ResetEveryone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.resetExternalEvaluation">ResetExternalEvaluation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.resetGeo">ResetGeo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.resetGithub">ResetGithub</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.resetGroup">ResetGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.resetGsuite">ResetGsuite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.resetIp">ResetIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.resetIpList">ResetIpList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.resetLoginMethod">ResetLoginMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.resetOkta">ResetOkta</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.resetSaml">ResetSaml</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.resetServiceToken">ResetServiceToken</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAzure` <a name="PutAzure" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.putAzure"></a>

```csharp
private void PutAzure(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.putAzure.parameter.value"></a>

- *Type:* object

---

##### `PutExternalEvaluation` <a name="PutExternalEvaluation" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.putExternalEvaluation"></a>

```csharp
private void PutExternalEvaluation(AccessGroupIncludeExternalEvaluation Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.putExternalEvaluation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeExternalEvaluation">AccessGroupIncludeExternalEvaluation</a>

---

##### `PutGithub` <a name="PutGithub" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.putGithub"></a>

```csharp
private void PutGithub(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.putGithub.parameter.value"></a>

- *Type:* object

---

##### `PutGsuite` <a name="PutGsuite" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.putGsuite"></a>

```csharp
private void PutGsuite(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.putGsuite.parameter.value"></a>

- *Type:* object

---

##### `PutOkta` <a name="PutOkta" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.putOkta"></a>

```csharp
private void PutOkta(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.putOkta.parameter.value"></a>

- *Type:* object

---

##### `PutSaml` <a name="PutSaml" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.putSaml"></a>

```csharp
private void PutSaml(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.putSaml.parameter.value"></a>

- *Type:* object

---

##### `ResetAnyValidServiceToken` <a name="ResetAnyValidServiceToken" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.resetAnyValidServiceToken"></a>

```csharp
private void ResetAnyValidServiceToken()
```

##### `ResetAuthMethod` <a name="ResetAuthMethod" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.resetAuthMethod"></a>

```csharp
private void ResetAuthMethod()
```

##### `ResetAzure` <a name="ResetAzure" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.resetAzure"></a>

```csharp
private void ResetAzure()
```

##### `ResetCertificate` <a name="ResetCertificate" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.resetCertificate"></a>

```csharp
private void ResetCertificate()
```

##### `ResetCommonName` <a name="ResetCommonName" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.resetCommonName"></a>

```csharp
private void ResetCommonName()
```

##### `ResetDevicePosture` <a name="ResetDevicePosture" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.resetDevicePosture"></a>

```csharp
private void ResetDevicePosture()
```

##### `ResetEmail` <a name="ResetEmail" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.resetEmail"></a>

```csharp
private void ResetEmail()
```

##### `ResetEmailDomain` <a name="ResetEmailDomain" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.resetEmailDomain"></a>

```csharp
private void ResetEmailDomain()
```

##### `ResetEveryone` <a name="ResetEveryone" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.resetEveryone"></a>

```csharp
private void ResetEveryone()
```

##### `ResetExternalEvaluation` <a name="ResetExternalEvaluation" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.resetExternalEvaluation"></a>

```csharp
private void ResetExternalEvaluation()
```

##### `ResetGeo` <a name="ResetGeo" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.resetGeo"></a>

```csharp
private void ResetGeo()
```

##### `ResetGithub` <a name="ResetGithub" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.resetGithub"></a>

```csharp
private void ResetGithub()
```

##### `ResetGroup` <a name="ResetGroup" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.resetGroup"></a>

```csharp
private void ResetGroup()
```

##### `ResetGsuite` <a name="ResetGsuite" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.resetGsuite"></a>

```csharp
private void ResetGsuite()
```

##### `ResetIp` <a name="ResetIp" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.resetIp"></a>

```csharp
private void ResetIp()
```

##### `ResetIpList` <a name="ResetIpList" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.resetIpList"></a>

```csharp
private void ResetIpList()
```

##### `ResetLoginMethod` <a name="ResetLoginMethod" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.resetLoginMethod"></a>

```csharp
private void ResetLoginMethod()
```

##### `ResetOkta` <a name="ResetOkta" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.resetOkta"></a>

```csharp
private void ResetOkta()
```

##### `ResetSaml` <a name="ResetSaml" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.resetSaml"></a>

```csharp
private void ResetSaml()
```

##### `ResetServiceToken` <a name="ResetServiceToken" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.resetServiceToken"></a>

```csharp
private void ResetServiceToken()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.property.azure">Azure</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeAzureList">AccessGroupIncludeAzureList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.property.externalEvaluation">ExternalEvaluation</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeExternalEvaluationOutputReference">AccessGroupIncludeExternalEvaluationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.property.github">Github</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGithubList">AccessGroupIncludeGithubList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.property.gsuite">Gsuite</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGsuiteList">AccessGroupIncludeGsuiteList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.property.okta">Okta</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOktaList">AccessGroupIncludeOktaList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.property.saml">Saml</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeSamlList">AccessGroupIncludeSamlList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.property.anyValidServiceTokenInput">AnyValidServiceTokenInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.property.authMethodInput">AuthMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.property.azureInput">AzureInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.property.certificateInput">CertificateInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.property.commonNameInput">CommonNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.property.devicePostureInput">DevicePostureInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.property.emailDomainInput">EmailDomainInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.property.emailInput">EmailInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.property.everyoneInput">EveryoneInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.property.externalEvaluationInput">ExternalEvaluationInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeExternalEvaluation">AccessGroupIncludeExternalEvaluation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.property.geoInput">GeoInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.property.githubInput">GithubInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.property.groupInput">GroupInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.property.gsuiteInput">GsuiteInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.property.ipInput">IpInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.property.ipListInput">IpListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.property.loginMethodInput">LoginMethodInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.property.oktaInput">OktaInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.property.samlInput">SamlInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.property.serviceTokenInput">ServiceTokenInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.property.anyValidServiceToken">AnyValidServiceToken</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.property.authMethod">AuthMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.property.certificate">Certificate</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.property.commonName">CommonName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.property.devicePosture">DevicePosture</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.property.email">Email</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.property.emailDomain">EmailDomain</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.property.everyone">Everyone</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.property.geo">Geo</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.property.group">Group</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.property.ip">Ip</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.property.ipList">IpList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.property.loginMethod">LoginMethod</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.property.serviceToken">ServiceToken</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Azure`<sup>Required</sup> <a name="Azure" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.property.azure"></a>

```csharp
public AccessGroupIncludeAzureList Azure { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeAzureList">AccessGroupIncludeAzureList</a>

---

##### `ExternalEvaluation`<sup>Required</sup> <a name="ExternalEvaluation" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.property.externalEvaluation"></a>

```csharp
public AccessGroupIncludeExternalEvaluationOutputReference ExternalEvaluation { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeExternalEvaluationOutputReference">AccessGroupIncludeExternalEvaluationOutputReference</a>

---

##### `Github`<sup>Required</sup> <a name="Github" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.property.github"></a>

```csharp
public AccessGroupIncludeGithubList Github { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGithubList">AccessGroupIncludeGithubList</a>

---

##### `Gsuite`<sup>Required</sup> <a name="Gsuite" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.property.gsuite"></a>

```csharp
public AccessGroupIncludeGsuiteList Gsuite { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeGsuiteList">AccessGroupIncludeGsuiteList</a>

---

##### `Okta`<sup>Required</sup> <a name="Okta" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.property.okta"></a>

```csharp
public AccessGroupIncludeOktaList Okta { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOktaList">AccessGroupIncludeOktaList</a>

---

##### `Saml`<sup>Required</sup> <a name="Saml" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.property.saml"></a>

```csharp
public AccessGroupIncludeSamlList Saml { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeSamlList">AccessGroupIncludeSamlList</a>

---

##### `AnyValidServiceTokenInput`<sup>Optional</sup> <a name="AnyValidServiceTokenInput" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.property.anyValidServiceTokenInput"></a>

```csharp
public object AnyValidServiceTokenInput { get; }
```

- *Type:* object

---

##### `AuthMethodInput`<sup>Optional</sup> <a name="AuthMethodInput" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.property.authMethodInput"></a>

```csharp
public string AuthMethodInput { get; }
```

- *Type:* string

---

##### `AzureInput`<sup>Optional</sup> <a name="AzureInput" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.property.azureInput"></a>

```csharp
public object AzureInput { get; }
```

- *Type:* object

---

##### `CertificateInput`<sup>Optional</sup> <a name="CertificateInput" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.property.certificateInput"></a>

```csharp
public object CertificateInput { get; }
```

- *Type:* object

---

##### `CommonNameInput`<sup>Optional</sup> <a name="CommonNameInput" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.property.commonNameInput"></a>

```csharp
public string CommonNameInput { get; }
```

- *Type:* string

---

##### `DevicePostureInput`<sup>Optional</sup> <a name="DevicePostureInput" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.property.devicePostureInput"></a>

```csharp
public string[] DevicePostureInput { get; }
```

- *Type:* string[]

---

##### `EmailDomainInput`<sup>Optional</sup> <a name="EmailDomainInput" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.property.emailDomainInput"></a>

```csharp
public string[] EmailDomainInput { get; }
```

- *Type:* string[]

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.property.emailInput"></a>

```csharp
public string[] EmailInput { get; }
```

- *Type:* string[]

---

##### `EveryoneInput`<sup>Optional</sup> <a name="EveryoneInput" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.property.everyoneInput"></a>

```csharp
public object EveryoneInput { get; }
```

- *Type:* object

---

##### `ExternalEvaluationInput`<sup>Optional</sup> <a name="ExternalEvaluationInput" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.property.externalEvaluationInput"></a>

```csharp
public AccessGroupIncludeExternalEvaluation ExternalEvaluationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeExternalEvaluation">AccessGroupIncludeExternalEvaluation</a>

---

##### `GeoInput`<sup>Optional</sup> <a name="GeoInput" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.property.geoInput"></a>

```csharp
public string[] GeoInput { get; }
```

- *Type:* string[]

---

##### `GithubInput`<sup>Optional</sup> <a name="GithubInput" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.property.githubInput"></a>

```csharp
public object GithubInput { get; }
```

- *Type:* object

---

##### `GroupInput`<sup>Optional</sup> <a name="GroupInput" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.property.groupInput"></a>

```csharp
public string[] GroupInput { get; }
```

- *Type:* string[]

---

##### `GsuiteInput`<sup>Optional</sup> <a name="GsuiteInput" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.property.gsuiteInput"></a>

```csharp
public object GsuiteInput { get; }
```

- *Type:* object

---

##### `IpInput`<sup>Optional</sup> <a name="IpInput" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.property.ipInput"></a>

```csharp
public string[] IpInput { get; }
```

- *Type:* string[]

---

##### `IpListInput`<sup>Optional</sup> <a name="IpListInput" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.property.ipListInput"></a>

```csharp
public string[] IpListInput { get; }
```

- *Type:* string[]

---

##### `LoginMethodInput`<sup>Optional</sup> <a name="LoginMethodInput" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.property.loginMethodInput"></a>

```csharp
public string[] LoginMethodInput { get; }
```

- *Type:* string[]

---

##### `OktaInput`<sup>Optional</sup> <a name="OktaInput" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.property.oktaInput"></a>

```csharp
public object OktaInput { get; }
```

- *Type:* object

---

##### `SamlInput`<sup>Optional</sup> <a name="SamlInput" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.property.samlInput"></a>

```csharp
public object SamlInput { get; }
```

- *Type:* object

---

##### `ServiceTokenInput`<sup>Optional</sup> <a name="ServiceTokenInput" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.property.serviceTokenInput"></a>

```csharp
public string[] ServiceTokenInput { get; }
```

- *Type:* string[]

---

##### `AnyValidServiceToken`<sup>Required</sup> <a name="AnyValidServiceToken" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.property.anyValidServiceToken"></a>

```csharp
public object AnyValidServiceToken { get; }
```

- *Type:* object

---

##### `AuthMethod`<sup>Required</sup> <a name="AuthMethod" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.property.authMethod"></a>

```csharp
public string AuthMethod { get; }
```

- *Type:* string

---

##### `Certificate`<sup>Required</sup> <a name="Certificate" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.property.certificate"></a>

```csharp
public object Certificate { get; }
```

- *Type:* object

---

##### `CommonName`<sup>Required</sup> <a name="CommonName" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.property.commonName"></a>

```csharp
public string CommonName { get; }
```

- *Type:* string

---

##### `DevicePosture`<sup>Required</sup> <a name="DevicePosture" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.property.devicePosture"></a>

```csharp
public string[] DevicePosture { get; }
```

- *Type:* string[]

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.property.email"></a>

```csharp
public string[] Email { get; }
```

- *Type:* string[]

---

##### `EmailDomain`<sup>Required</sup> <a name="EmailDomain" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.property.emailDomain"></a>

```csharp
public string[] EmailDomain { get; }
```

- *Type:* string[]

---

##### `Everyone`<sup>Required</sup> <a name="Everyone" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.property.everyone"></a>

```csharp
public object Everyone { get; }
```

- *Type:* object

---

##### `Geo`<sup>Required</sup> <a name="Geo" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.property.geo"></a>

```csharp
public string[] Geo { get; }
```

- *Type:* string[]

---

##### `Group`<sup>Required</sup> <a name="Group" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.property.group"></a>

```csharp
public string[] Group { get; }
```

- *Type:* string[]

---

##### `Ip`<sup>Required</sup> <a name="Ip" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.property.ip"></a>

```csharp
public string[] Ip { get; }
```

- *Type:* string[]

---

##### `IpList`<sup>Required</sup> <a name="IpList" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.property.ipList"></a>

```csharp
public string[] IpList { get; }
```

- *Type:* string[]

---

##### `LoginMethod`<sup>Required</sup> <a name="LoginMethod" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.property.loginMethod"></a>

```csharp
public string[] LoginMethod { get; }
```

- *Type:* string[]

---

##### `ServiceToken`<sup>Required</sup> <a name="ServiceToken" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.property.serviceToken"></a>

```csharp
public string[] ServiceToken { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AccessGroupIncludeSamlList <a name="AccessGroupIncludeSamlList" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeSamlList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeSamlList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new AccessGroupIncludeSamlList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeSamlList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeSamlList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeSamlList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeSamlList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeSamlList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeSamlList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeSamlList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeSamlList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeSamlList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeSamlList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeSamlList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeSamlList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeSamlList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeSamlList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeSamlList.get"></a>

```csharp
private AccessGroupIncludeSamlOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeSamlList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeSamlList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeSamlList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeSamlList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeSamlList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeSamlList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeSamlList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AccessGroupIncludeSamlOutputReference <a name="AccessGroupIncludeSamlOutputReference" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeSamlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeSamlOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new AccessGroupIncludeSamlOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeSamlOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeSamlOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeSamlOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeSamlOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeSamlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeSamlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeSamlOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeSamlOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeSamlOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeSamlOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeSamlOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeSamlOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeSamlOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeSamlOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeSamlOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeSamlOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeSamlOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeSamlOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeSamlOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeSamlOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeSamlOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeSamlOutputReference.resetAttributeName">ResetAttributeName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeSamlOutputReference.resetAttributeValue">ResetAttributeValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeSamlOutputReference.resetIdentityProviderId">ResetIdentityProviderId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeSamlOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeSamlOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeSamlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeSamlOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeSamlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeSamlOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeSamlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeSamlOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeSamlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeSamlOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeSamlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeSamlOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeSamlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeSamlOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeSamlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeSamlOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeSamlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeSamlOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeSamlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeSamlOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeSamlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeSamlOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeSamlOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeSamlOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAttributeName` <a name="ResetAttributeName" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeSamlOutputReference.resetAttributeName"></a>

```csharp
private void ResetAttributeName()
```

##### `ResetAttributeValue` <a name="ResetAttributeValue" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeSamlOutputReference.resetAttributeValue"></a>

```csharp
private void ResetAttributeValue()
```

##### `ResetIdentityProviderId` <a name="ResetIdentityProviderId" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeSamlOutputReference.resetIdentityProviderId"></a>

```csharp
private void ResetIdentityProviderId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeSamlOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeSamlOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeSamlOutputReference.property.attributeNameInput">AttributeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeSamlOutputReference.property.attributeValueInput">AttributeValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeSamlOutputReference.property.identityProviderIdInput">IdentityProviderIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeSamlOutputReference.property.attributeName">AttributeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeSamlOutputReference.property.attributeValue">AttributeValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeSamlOutputReference.property.identityProviderId">IdentityProviderId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeSamlOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeSamlOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeSamlOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AttributeNameInput`<sup>Optional</sup> <a name="AttributeNameInput" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeSamlOutputReference.property.attributeNameInput"></a>

```csharp
public string AttributeNameInput { get; }
```

- *Type:* string

---

##### `AttributeValueInput`<sup>Optional</sup> <a name="AttributeValueInput" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeSamlOutputReference.property.attributeValueInput"></a>

```csharp
public string AttributeValueInput { get; }
```

- *Type:* string

---

##### `IdentityProviderIdInput`<sup>Optional</sup> <a name="IdentityProviderIdInput" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeSamlOutputReference.property.identityProviderIdInput"></a>

```csharp
public string IdentityProviderIdInput { get; }
```

- *Type:* string

---

##### `AttributeName`<sup>Required</sup> <a name="AttributeName" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeSamlOutputReference.property.attributeName"></a>

```csharp
public string AttributeName { get; }
```

- *Type:* string

---

##### `AttributeValue`<sup>Required</sup> <a name="AttributeValue" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeSamlOutputReference.property.attributeValue"></a>

```csharp
public string AttributeValue { get; }
```

- *Type:* string

---

##### `IdentityProviderId`<sup>Required</sup> <a name="IdentityProviderId" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeSamlOutputReference.property.identityProviderId"></a>

```csharp
public string IdentityProviderId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupIncludeSamlOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AccessGroupRequireAzureList <a name="AccessGroupRequireAzureList" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireAzureList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireAzureList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new AccessGroupRequireAzureList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireAzureList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireAzureList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireAzureList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireAzureList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireAzureList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireAzureList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireAzureList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireAzureList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireAzureList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireAzureList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireAzureList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireAzureList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireAzureList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireAzureList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireAzureList.get"></a>

```csharp
private AccessGroupRequireAzureOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireAzureList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireAzureList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireAzureList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireAzureList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireAzureList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireAzureList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireAzureList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AccessGroupRequireAzureOutputReference <a name="AccessGroupRequireAzureOutputReference" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireAzureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireAzureOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new AccessGroupRequireAzureOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireAzureOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireAzureOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireAzureOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireAzureOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireAzureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireAzureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireAzureOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireAzureOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireAzureOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireAzureOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireAzureOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireAzureOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireAzureOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireAzureOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireAzureOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireAzureOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireAzureOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireAzureOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireAzureOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireAzureOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireAzureOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireAzureOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireAzureOutputReference.resetIdentityProviderId">ResetIdentityProviderId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireAzureOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireAzureOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireAzureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireAzureOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireAzureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireAzureOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireAzureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireAzureOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireAzureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireAzureOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireAzureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireAzureOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireAzureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireAzureOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireAzureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireAzureOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireAzureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireAzureOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireAzureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireAzureOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireAzureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireAzureOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireAzureOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireAzureOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetId` <a name="ResetId" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireAzureOutputReference.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIdentityProviderId` <a name="ResetIdentityProviderId" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireAzureOutputReference.resetIdentityProviderId"></a>

```csharp
private void ResetIdentityProviderId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireAzureOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireAzureOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireAzureOutputReference.property.identityProviderIdInput">IdentityProviderIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireAzureOutputReference.property.idInput">IdInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireAzureOutputReference.property.id">Id</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireAzureOutputReference.property.identityProviderId">IdentityProviderId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireAzureOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireAzureOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireAzureOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdentityProviderIdInput`<sup>Optional</sup> <a name="IdentityProviderIdInput" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireAzureOutputReference.property.identityProviderIdInput"></a>

```csharp
public string IdentityProviderIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireAzureOutputReference.property.idInput"></a>

```csharp
public string[] IdInput { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireAzureOutputReference.property.id"></a>

```csharp
public string[] Id { get; }
```

- *Type:* string[]

---

##### `IdentityProviderId`<sup>Required</sup> <a name="IdentityProviderId" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireAzureOutputReference.property.identityProviderId"></a>

```csharp
public string IdentityProviderId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireAzureOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AccessGroupRequireExternalEvaluationOutputReference <a name="AccessGroupRequireExternalEvaluationOutputReference" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireExternalEvaluationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireExternalEvaluationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new AccessGroupRequireExternalEvaluationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireExternalEvaluationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireExternalEvaluationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireExternalEvaluationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireExternalEvaluationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireExternalEvaluationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireExternalEvaluationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireExternalEvaluationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireExternalEvaluationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireExternalEvaluationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireExternalEvaluationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireExternalEvaluationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireExternalEvaluationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireExternalEvaluationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireExternalEvaluationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireExternalEvaluationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireExternalEvaluationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireExternalEvaluationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireExternalEvaluationOutputReference.resetEvaluateUrl">ResetEvaluateUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireExternalEvaluationOutputReference.resetKeysUrl">ResetKeysUrl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireExternalEvaluationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireExternalEvaluationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireExternalEvaluationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireExternalEvaluationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireExternalEvaluationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireExternalEvaluationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireExternalEvaluationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireExternalEvaluationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireExternalEvaluationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireExternalEvaluationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireExternalEvaluationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireExternalEvaluationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireExternalEvaluationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireExternalEvaluationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireExternalEvaluationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireExternalEvaluationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireExternalEvaluationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireExternalEvaluationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireExternalEvaluationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireExternalEvaluationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireExternalEvaluationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireExternalEvaluationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireExternalEvaluationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireExternalEvaluationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEvaluateUrl` <a name="ResetEvaluateUrl" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireExternalEvaluationOutputReference.resetEvaluateUrl"></a>

```csharp
private void ResetEvaluateUrl()
```

##### `ResetKeysUrl` <a name="ResetKeysUrl" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireExternalEvaluationOutputReference.resetKeysUrl"></a>

```csharp
private void ResetKeysUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireExternalEvaluationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireExternalEvaluationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireExternalEvaluationOutputReference.property.evaluateUrlInput">EvaluateUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireExternalEvaluationOutputReference.property.keysUrlInput">KeysUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireExternalEvaluationOutputReference.property.evaluateUrl">EvaluateUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireExternalEvaluationOutputReference.property.keysUrl">KeysUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireExternalEvaluationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireExternalEvaluation">AccessGroupRequireExternalEvaluation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireExternalEvaluationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireExternalEvaluationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EvaluateUrlInput`<sup>Optional</sup> <a name="EvaluateUrlInput" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireExternalEvaluationOutputReference.property.evaluateUrlInput"></a>

```csharp
public string EvaluateUrlInput { get; }
```

- *Type:* string

---

##### `KeysUrlInput`<sup>Optional</sup> <a name="KeysUrlInput" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireExternalEvaluationOutputReference.property.keysUrlInput"></a>

```csharp
public string KeysUrlInput { get; }
```

- *Type:* string

---

##### `EvaluateUrl`<sup>Required</sup> <a name="EvaluateUrl" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireExternalEvaluationOutputReference.property.evaluateUrl"></a>

```csharp
public string EvaluateUrl { get; }
```

- *Type:* string

---

##### `KeysUrl`<sup>Required</sup> <a name="KeysUrl" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireExternalEvaluationOutputReference.property.keysUrl"></a>

```csharp
public string KeysUrl { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireExternalEvaluationOutputReference.property.internalValue"></a>

```csharp
public AccessGroupRequireExternalEvaluation InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireExternalEvaluation">AccessGroupRequireExternalEvaluation</a>

---


### AccessGroupRequireGithubList <a name="AccessGroupRequireGithubList" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGithubList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGithubList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new AccessGroupRequireGithubList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGithubList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGithubList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGithubList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGithubList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGithubList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGithubList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGithubList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGithubList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGithubList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGithubList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGithubList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGithubList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGithubList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGithubList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGithubList.get"></a>

```csharp
private AccessGroupRequireGithubOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGithubList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGithubList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGithubList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGithubList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGithubList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGithubList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGithubList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AccessGroupRequireGithubOutputReference <a name="AccessGroupRequireGithubOutputReference" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGithubOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGithubOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new AccessGroupRequireGithubOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGithubOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGithubOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGithubOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGithubOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGithubOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGithubOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGithubOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGithubOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGithubOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGithubOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGithubOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGithubOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGithubOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGithubOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGithubOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGithubOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGithubOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGithubOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGithubOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGithubOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGithubOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGithubOutputReference.resetIdentityProviderId">ResetIdentityProviderId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGithubOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGithubOutputReference.resetTeams">ResetTeams</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGithubOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGithubOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGithubOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGithubOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGithubOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGithubOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGithubOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGithubOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGithubOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGithubOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGithubOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGithubOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGithubOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGithubOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGithubOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGithubOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGithubOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGithubOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGithubOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGithubOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGithubOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGithubOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGithubOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGithubOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIdentityProviderId` <a name="ResetIdentityProviderId" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGithubOutputReference.resetIdentityProviderId"></a>

```csharp
private void ResetIdentityProviderId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGithubOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetTeams` <a name="ResetTeams" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGithubOutputReference.resetTeams"></a>

```csharp
private void ResetTeams()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGithubOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGithubOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGithubOutputReference.property.identityProviderIdInput">IdentityProviderIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGithubOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGithubOutputReference.property.teamsInput">TeamsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGithubOutputReference.property.identityProviderId">IdentityProviderId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGithubOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGithubOutputReference.property.teams">Teams</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGithubOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGithubOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGithubOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdentityProviderIdInput`<sup>Optional</sup> <a name="IdentityProviderIdInput" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGithubOutputReference.property.identityProviderIdInput"></a>

```csharp
public string IdentityProviderIdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGithubOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TeamsInput`<sup>Optional</sup> <a name="TeamsInput" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGithubOutputReference.property.teamsInput"></a>

```csharp
public string[] TeamsInput { get; }
```

- *Type:* string[]

---

##### `IdentityProviderId`<sup>Required</sup> <a name="IdentityProviderId" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGithubOutputReference.property.identityProviderId"></a>

```csharp
public string IdentityProviderId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGithubOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Teams`<sup>Required</sup> <a name="Teams" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGithubOutputReference.property.teams"></a>

```csharp
public string[] Teams { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGithubOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AccessGroupRequireGsuiteList <a name="AccessGroupRequireGsuiteList" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGsuiteList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGsuiteList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new AccessGroupRequireGsuiteList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGsuiteList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGsuiteList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGsuiteList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGsuiteList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGsuiteList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGsuiteList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGsuiteList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGsuiteList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGsuiteList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGsuiteList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGsuiteList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGsuiteList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGsuiteList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGsuiteList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGsuiteList.get"></a>

```csharp
private AccessGroupRequireGsuiteOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGsuiteList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGsuiteList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGsuiteList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGsuiteList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGsuiteList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGsuiteList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGsuiteList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AccessGroupRequireGsuiteOutputReference <a name="AccessGroupRequireGsuiteOutputReference" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGsuiteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGsuiteOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new AccessGroupRequireGsuiteOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGsuiteOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGsuiteOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGsuiteOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGsuiteOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGsuiteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGsuiteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGsuiteOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGsuiteOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGsuiteOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGsuiteOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGsuiteOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGsuiteOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGsuiteOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGsuiteOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGsuiteOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGsuiteOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGsuiteOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGsuiteOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGsuiteOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGsuiteOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGsuiteOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGsuiteOutputReference.resetEmail">ResetEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGsuiteOutputReference.resetIdentityProviderId">ResetIdentityProviderId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGsuiteOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGsuiteOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGsuiteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGsuiteOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGsuiteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGsuiteOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGsuiteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGsuiteOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGsuiteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGsuiteOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGsuiteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGsuiteOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGsuiteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGsuiteOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGsuiteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGsuiteOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGsuiteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGsuiteOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGsuiteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGsuiteOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGsuiteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGsuiteOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGsuiteOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGsuiteOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEmail` <a name="ResetEmail" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGsuiteOutputReference.resetEmail"></a>

```csharp
private void ResetEmail()
```

##### `ResetIdentityProviderId` <a name="ResetIdentityProviderId" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGsuiteOutputReference.resetIdentityProviderId"></a>

```csharp
private void ResetIdentityProviderId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGsuiteOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGsuiteOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGsuiteOutputReference.property.emailInput">EmailInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGsuiteOutputReference.property.identityProviderIdInput">IdentityProviderIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGsuiteOutputReference.property.email">Email</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGsuiteOutputReference.property.identityProviderId">IdentityProviderId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGsuiteOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGsuiteOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGsuiteOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGsuiteOutputReference.property.emailInput"></a>

```csharp
public string[] EmailInput { get; }
```

- *Type:* string[]

---

##### `IdentityProviderIdInput`<sup>Optional</sup> <a name="IdentityProviderIdInput" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGsuiteOutputReference.property.identityProviderIdInput"></a>

```csharp
public string IdentityProviderIdInput { get; }
```

- *Type:* string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGsuiteOutputReference.property.email"></a>

```csharp
public string[] Email { get; }
```

- *Type:* string[]

---

##### `IdentityProviderId`<sup>Required</sup> <a name="IdentityProviderId" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGsuiteOutputReference.property.identityProviderId"></a>

```csharp
public string IdentityProviderId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGsuiteOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AccessGroupRequireList <a name="AccessGroupRequireList" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new AccessGroupRequireList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireList.get"></a>

```csharp
private AccessGroupRequireOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AccessGroupRequireOktaList <a name="AccessGroupRequireOktaList" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOktaList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOktaList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new AccessGroupRequireOktaList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOktaList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOktaList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOktaList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOktaList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOktaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOktaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOktaList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOktaList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOktaList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOktaList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOktaList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOktaList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOktaList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOktaList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOktaList.get"></a>

```csharp
private AccessGroupRequireOktaOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOktaList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOktaList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOktaList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOktaList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOktaList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOktaList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOktaList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AccessGroupRequireOktaOutputReference <a name="AccessGroupRequireOktaOutputReference" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOktaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOktaOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new AccessGroupRequireOktaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOktaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOktaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOktaOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOktaOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOktaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOktaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOktaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOktaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOktaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOktaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOktaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOktaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOktaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOktaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOktaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOktaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOktaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOktaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOktaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOktaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOktaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOktaOutputReference.resetIdentityProviderId">ResetIdentityProviderId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOktaOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOktaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOktaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOktaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOktaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOktaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOktaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOktaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOktaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOktaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOktaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOktaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOktaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOktaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOktaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOktaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOktaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOktaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOktaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOktaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOktaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOktaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOktaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOktaOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOktaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIdentityProviderId` <a name="ResetIdentityProviderId" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOktaOutputReference.resetIdentityProviderId"></a>

```csharp
private void ResetIdentityProviderId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOktaOutputReference.resetName"></a>

```csharp
private void ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOktaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOktaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOktaOutputReference.property.identityProviderIdInput">IdentityProviderIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOktaOutputReference.property.nameInput">NameInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOktaOutputReference.property.identityProviderId">IdentityProviderId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOktaOutputReference.property.name">Name</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOktaOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOktaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOktaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdentityProviderIdInput`<sup>Optional</sup> <a name="IdentityProviderIdInput" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOktaOutputReference.property.identityProviderIdInput"></a>

```csharp
public string IdentityProviderIdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOktaOutputReference.property.nameInput"></a>

```csharp
public string[] NameInput { get; }
```

- *Type:* string[]

---

##### `IdentityProviderId`<sup>Required</sup> <a name="IdentityProviderId" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOktaOutputReference.property.identityProviderId"></a>

```csharp
public string IdentityProviderId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOktaOutputReference.property.name"></a>

```csharp
public string[] Name { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOktaOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AccessGroupRequireOutputReference <a name="AccessGroupRequireOutputReference" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new AccessGroupRequireOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.putAzure">PutAzure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.putExternalEvaluation">PutExternalEvaluation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.putGithub">PutGithub</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.putGsuite">PutGsuite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.putOkta">PutOkta</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.putSaml">PutSaml</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.resetAnyValidServiceToken">ResetAnyValidServiceToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.resetAuthMethod">ResetAuthMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.resetAzure">ResetAzure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.resetCertificate">ResetCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.resetCommonName">ResetCommonName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.resetDevicePosture">ResetDevicePosture</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.resetEmail">ResetEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.resetEmailDomain">ResetEmailDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.resetEveryone">ResetEveryone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.resetExternalEvaluation">ResetExternalEvaluation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.resetGeo">ResetGeo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.resetGithub">ResetGithub</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.resetGroup">ResetGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.resetGsuite">ResetGsuite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.resetIp">ResetIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.resetIpList">ResetIpList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.resetLoginMethod">ResetLoginMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.resetOkta">ResetOkta</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.resetSaml">ResetSaml</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.resetServiceToken">ResetServiceToken</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAzure` <a name="PutAzure" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.putAzure"></a>

```csharp
private void PutAzure(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.putAzure.parameter.value"></a>

- *Type:* object

---

##### `PutExternalEvaluation` <a name="PutExternalEvaluation" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.putExternalEvaluation"></a>

```csharp
private void PutExternalEvaluation(AccessGroupRequireExternalEvaluation Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.putExternalEvaluation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireExternalEvaluation">AccessGroupRequireExternalEvaluation</a>

---

##### `PutGithub` <a name="PutGithub" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.putGithub"></a>

```csharp
private void PutGithub(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.putGithub.parameter.value"></a>

- *Type:* object

---

##### `PutGsuite` <a name="PutGsuite" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.putGsuite"></a>

```csharp
private void PutGsuite(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.putGsuite.parameter.value"></a>

- *Type:* object

---

##### `PutOkta` <a name="PutOkta" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.putOkta"></a>

```csharp
private void PutOkta(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.putOkta.parameter.value"></a>

- *Type:* object

---

##### `PutSaml` <a name="PutSaml" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.putSaml"></a>

```csharp
private void PutSaml(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.putSaml.parameter.value"></a>

- *Type:* object

---

##### `ResetAnyValidServiceToken` <a name="ResetAnyValidServiceToken" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.resetAnyValidServiceToken"></a>

```csharp
private void ResetAnyValidServiceToken()
```

##### `ResetAuthMethod` <a name="ResetAuthMethod" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.resetAuthMethod"></a>

```csharp
private void ResetAuthMethod()
```

##### `ResetAzure` <a name="ResetAzure" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.resetAzure"></a>

```csharp
private void ResetAzure()
```

##### `ResetCertificate` <a name="ResetCertificate" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.resetCertificate"></a>

```csharp
private void ResetCertificate()
```

##### `ResetCommonName` <a name="ResetCommonName" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.resetCommonName"></a>

```csharp
private void ResetCommonName()
```

##### `ResetDevicePosture` <a name="ResetDevicePosture" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.resetDevicePosture"></a>

```csharp
private void ResetDevicePosture()
```

##### `ResetEmail` <a name="ResetEmail" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.resetEmail"></a>

```csharp
private void ResetEmail()
```

##### `ResetEmailDomain` <a name="ResetEmailDomain" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.resetEmailDomain"></a>

```csharp
private void ResetEmailDomain()
```

##### `ResetEveryone` <a name="ResetEveryone" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.resetEveryone"></a>

```csharp
private void ResetEveryone()
```

##### `ResetExternalEvaluation` <a name="ResetExternalEvaluation" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.resetExternalEvaluation"></a>

```csharp
private void ResetExternalEvaluation()
```

##### `ResetGeo` <a name="ResetGeo" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.resetGeo"></a>

```csharp
private void ResetGeo()
```

##### `ResetGithub` <a name="ResetGithub" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.resetGithub"></a>

```csharp
private void ResetGithub()
```

##### `ResetGroup` <a name="ResetGroup" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.resetGroup"></a>

```csharp
private void ResetGroup()
```

##### `ResetGsuite` <a name="ResetGsuite" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.resetGsuite"></a>

```csharp
private void ResetGsuite()
```

##### `ResetIp` <a name="ResetIp" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.resetIp"></a>

```csharp
private void ResetIp()
```

##### `ResetIpList` <a name="ResetIpList" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.resetIpList"></a>

```csharp
private void ResetIpList()
```

##### `ResetLoginMethod` <a name="ResetLoginMethod" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.resetLoginMethod"></a>

```csharp
private void ResetLoginMethod()
```

##### `ResetOkta` <a name="ResetOkta" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.resetOkta"></a>

```csharp
private void ResetOkta()
```

##### `ResetSaml` <a name="ResetSaml" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.resetSaml"></a>

```csharp
private void ResetSaml()
```

##### `ResetServiceToken` <a name="ResetServiceToken" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.resetServiceToken"></a>

```csharp
private void ResetServiceToken()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.property.azure">Azure</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireAzureList">AccessGroupRequireAzureList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.property.externalEvaluation">ExternalEvaluation</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireExternalEvaluationOutputReference">AccessGroupRequireExternalEvaluationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.property.github">Github</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGithubList">AccessGroupRequireGithubList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.property.gsuite">Gsuite</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGsuiteList">AccessGroupRequireGsuiteList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.property.okta">Okta</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOktaList">AccessGroupRequireOktaList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.property.saml">Saml</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireSamlList">AccessGroupRequireSamlList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.property.anyValidServiceTokenInput">AnyValidServiceTokenInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.property.authMethodInput">AuthMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.property.azureInput">AzureInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.property.certificateInput">CertificateInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.property.commonNameInput">CommonNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.property.devicePostureInput">DevicePostureInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.property.emailDomainInput">EmailDomainInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.property.emailInput">EmailInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.property.everyoneInput">EveryoneInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.property.externalEvaluationInput">ExternalEvaluationInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireExternalEvaluation">AccessGroupRequireExternalEvaluation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.property.geoInput">GeoInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.property.githubInput">GithubInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.property.groupInput">GroupInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.property.gsuiteInput">GsuiteInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.property.ipInput">IpInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.property.ipListInput">IpListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.property.loginMethodInput">LoginMethodInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.property.oktaInput">OktaInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.property.samlInput">SamlInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.property.serviceTokenInput">ServiceTokenInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.property.anyValidServiceToken">AnyValidServiceToken</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.property.authMethod">AuthMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.property.certificate">Certificate</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.property.commonName">CommonName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.property.devicePosture">DevicePosture</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.property.email">Email</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.property.emailDomain">EmailDomain</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.property.everyone">Everyone</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.property.geo">Geo</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.property.group">Group</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.property.ip">Ip</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.property.ipList">IpList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.property.loginMethod">LoginMethod</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.property.serviceToken">ServiceToken</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Azure`<sup>Required</sup> <a name="Azure" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.property.azure"></a>

```csharp
public AccessGroupRequireAzureList Azure { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireAzureList">AccessGroupRequireAzureList</a>

---

##### `ExternalEvaluation`<sup>Required</sup> <a name="ExternalEvaluation" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.property.externalEvaluation"></a>

```csharp
public AccessGroupRequireExternalEvaluationOutputReference ExternalEvaluation { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireExternalEvaluationOutputReference">AccessGroupRequireExternalEvaluationOutputReference</a>

---

##### `Github`<sup>Required</sup> <a name="Github" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.property.github"></a>

```csharp
public AccessGroupRequireGithubList Github { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGithubList">AccessGroupRequireGithubList</a>

---

##### `Gsuite`<sup>Required</sup> <a name="Gsuite" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.property.gsuite"></a>

```csharp
public AccessGroupRequireGsuiteList Gsuite { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireGsuiteList">AccessGroupRequireGsuiteList</a>

---

##### `Okta`<sup>Required</sup> <a name="Okta" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.property.okta"></a>

```csharp
public AccessGroupRequireOktaList Okta { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOktaList">AccessGroupRequireOktaList</a>

---

##### `Saml`<sup>Required</sup> <a name="Saml" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.property.saml"></a>

```csharp
public AccessGroupRequireSamlList Saml { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireSamlList">AccessGroupRequireSamlList</a>

---

##### `AnyValidServiceTokenInput`<sup>Optional</sup> <a name="AnyValidServiceTokenInput" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.property.anyValidServiceTokenInput"></a>

```csharp
public object AnyValidServiceTokenInput { get; }
```

- *Type:* object

---

##### `AuthMethodInput`<sup>Optional</sup> <a name="AuthMethodInput" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.property.authMethodInput"></a>

```csharp
public string AuthMethodInput { get; }
```

- *Type:* string

---

##### `AzureInput`<sup>Optional</sup> <a name="AzureInput" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.property.azureInput"></a>

```csharp
public object AzureInput { get; }
```

- *Type:* object

---

##### `CertificateInput`<sup>Optional</sup> <a name="CertificateInput" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.property.certificateInput"></a>

```csharp
public object CertificateInput { get; }
```

- *Type:* object

---

##### `CommonNameInput`<sup>Optional</sup> <a name="CommonNameInput" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.property.commonNameInput"></a>

```csharp
public string CommonNameInput { get; }
```

- *Type:* string

---

##### `DevicePostureInput`<sup>Optional</sup> <a name="DevicePostureInput" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.property.devicePostureInput"></a>

```csharp
public string[] DevicePostureInput { get; }
```

- *Type:* string[]

---

##### `EmailDomainInput`<sup>Optional</sup> <a name="EmailDomainInput" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.property.emailDomainInput"></a>

```csharp
public string[] EmailDomainInput { get; }
```

- *Type:* string[]

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.property.emailInput"></a>

```csharp
public string[] EmailInput { get; }
```

- *Type:* string[]

---

##### `EveryoneInput`<sup>Optional</sup> <a name="EveryoneInput" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.property.everyoneInput"></a>

```csharp
public object EveryoneInput { get; }
```

- *Type:* object

---

##### `ExternalEvaluationInput`<sup>Optional</sup> <a name="ExternalEvaluationInput" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.property.externalEvaluationInput"></a>

```csharp
public AccessGroupRequireExternalEvaluation ExternalEvaluationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireExternalEvaluation">AccessGroupRequireExternalEvaluation</a>

---

##### `GeoInput`<sup>Optional</sup> <a name="GeoInput" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.property.geoInput"></a>

```csharp
public string[] GeoInput { get; }
```

- *Type:* string[]

---

##### `GithubInput`<sup>Optional</sup> <a name="GithubInput" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.property.githubInput"></a>

```csharp
public object GithubInput { get; }
```

- *Type:* object

---

##### `GroupInput`<sup>Optional</sup> <a name="GroupInput" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.property.groupInput"></a>

```csharp
public string[] GroupInput { get; }
```

- *Type:* string[]

---

##### `GsuiteInput`<sup>Optional</sup> <a name="GsuiteInput" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.property.gsuiteInput"></a>

```csharp
public object GsuiteInput { get; }
```

- *Type:* object

---

##### `IpInput`<sup>Optional</sup> <a name="IpInput" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.property.ipInput"></a>

```csharp
public string[] IpInput { get; }
```

- *Type:* string[]

---

##### `IpListInput`<sup>Optional</sup> <a name="IpListInput" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.property.ipListInput"></a>

```csharp
public string[] IpListInput { get; }
```

- *Type:* string[]

---

##### `LoginMethodInput`<sup>Optional</sup> <a name="LoginMethodInput" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.property.loginMethodInput"></a>

```csharp
public string[] LoginMethodInput { get; }
```

- *Type:* string[]

---

##### `OktaInput`<sup>Optional</sup> <a name="OktaInput" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.property.oktaInput"></a>

```csharp
public object OktaInput { get; }
```

- *Type:* object

---

##### `SamlInput`<sup>Optional</sup> <a name="SamlInput" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.property.samlInput"></a>

```csharp
public object SamlInput { get; }
```

- *Type:* object

---

##### `ServiceTokenInput`<sup>Optional</sup> <a name="ServiceTokenInput" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.property.serviceTokenInput"></a>

```csharp
public string[] ServiceTokenInput { get; }
```

- *Type:* string[]

---

##### `AnyValidServiceToken`<sup>Required</sup> <a name="AnyValidServiceToken" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.property.anyValidServiceToken"></a>

```csharp
public object AnyValidServiceToken { get; }
```

- *Type:* object

---

##### `AuthMethod`<sup>Required</sup> <a name="AuthMethod" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.property.authMethod"></a>

```csharp
public string AuthMethod { get; }
```

- *Type:* string

---

##### `Certificate`<sup>Required</sup> <a name="Certificate" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.property.certificate"></a>

```csharp
public object Certificate { get; }
```

- *Type:* object

---

##### `CommonName`<sup>Required</sup> <a name="CommonName" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.property.commonName"></a>

```csharp
public string CommonName { get; }
```

- *Type:* string

---

##### `DevicePosture`<sup>Required</sup> <a name="DevicePosture" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.property.devicePosture"></a>

```csharp
public string[] DevicePosture { get; }
```

- *Type:* string[]

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.property.email"></a>

```csharp
public string[] Email { get; }
```

- *Type:* string[]

---

##### `EmailDomain`<sup>Required</sup> <a name="EmailDomain" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.property.emailDomain"></a>

```csharp
public string[] EmailDomain { get; }
```

- *Type:* string[]

---

##### `Everyone`<sup>Required</sup> <a name="Everyone" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.property.everyone"></a>

```csharp
public object Everyone { get; }
```

- *Type:* object

---

##### `Geo`<sup>Required</sup> <a name="Geo" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.property.geo"></a>

```csharp
public string[] Geo { get; }
```

- *Type:* string[]

---

##### `Group`<sup>Required</sup> <a name="Group" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.property.group"></a>

```csharp
public string[] Group { get; }
```

- *Type:* string[]

---

##### `Ip`<sup>Required</sup> <a name="Ip" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.property.ip"></a>

```csharp
public string[] Ip { get; }
```

- *Type:* string[]

---

##### `IpList`<sup>Required</sup> <a name="IpList" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.property.ipList"></a>

```csharp
public string[] IpList { get; }
```

- *Type:* string[]

---

##### `LoginMethod`<sup>Required</sup> <a name="LoginMethod" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.property.loginMethod"></a>

```csharp
public string[] LoginMethod { get; }
```

- *Type:* string[]

---

##### `ServiceToken`<sup>Required</sup> <a name="ServiceToken" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.property.serviceToken"></a>

```csharp
public string[] ServiceToken { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AccessGroupRequireSamlList <a name="AccessGroupRequireSamlList" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireSamlList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireSamlList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new AccessGroupRequireSamlList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireSamlList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireSamlList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireSamlList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireSamlList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireSamlList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireSamlList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireSamlList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireSamlList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireSamlList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireSamlList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireSamlList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireSamlList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireSamlList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireSamlList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireSamlList.get"></a>

```csharp
private AccessGroupRequireSamlOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireSamlList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireSamlList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireSamlList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireSamlList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireSamlList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireSamlList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireSamlList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AccessGroupRequireSamlOutputReference <a name="AccessGroupRequireSamlOutputReference" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireSamlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireSamlOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new AccessGroupRequireSamlOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireSamlOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireSamlOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireSamlOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireSamlOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireSamlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireSamlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireSamlOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireSamlOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireSamlOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireSamlOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireSamlOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireSamlOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireSamlOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireSamlOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireSamlOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireSamlOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireSamlOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireSamlOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireSamlOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireSamlOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireSamlOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireSamlOutputReference.resetAttributeName">ResetAttributeName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireSamlOutputReference.resetAttributeValue">ResetAttributeValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireSamlOutputReference.resetIdentityProviderId">ResetIdentityProviderId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireSamlOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireSamlOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireSamlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireSamlOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireSamlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireSamlOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireSamlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireSamlOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireSamlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireSamlOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireSamlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireSamlOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireSamlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireSamlOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireSamlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireSamlOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireSamlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireSamlOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireSamlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireSamlOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireSamlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireSamlOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireSamlOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireSamlOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAttributeName` <a name="ResetAttributeName" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireSamlOutputReference.resetAttributeName"></a>

```csharp
private void ResetAttributeName()
```

##### `ResetAttributeValue` <a name="ResetAttributeValue" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireSamlOutputReference.resetAttributeValue"></a>

```csharp
private void ResetAttributeValue()
```

##### `ResetIdentityProviderId` <a name="ResetIdentityProviderId" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireSamlOutputReference.resetIdentityProviderId"></a>

```csharp
private void ResetIdentityProviderId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireSamlOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireSamlOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireSamlOutputReference.property.attributeNameInput">AttributeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireSamlOutputReference.property.attributeValueInput">AttributeValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireSamlOutputReference.property.identityProviderIdInput">IdentityProviderIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireSamlOutputReference.property.attributeName">AttributeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireSamlOutputReference.property.attributeValue">AttributeValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireSamlOutputReference.property.identityProviderId">IdentityProviderId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireSamlOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireSamlOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireSamlOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AttributeNameInput`<sup>Optional</sup> <a name="AttributeNameInput" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireSamlOutputReference.property.attributeNameInput"></a>

```csharp
public string AttributeNameInput { get; }
```

- *Type:* string

---

##### `AttributeValueInput`<sup>Optional</sup> <a name="AttributeValueInput" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireSamlOutputReference.property.attributeValueInput"></a>

```csharp
public string AttributeValueInput { get; }
```

- *Type:* string

---

##### `IdentityProviderIdInput`<sup>Optional</sup> <a name="IdentityProviderIdInput" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireSamlOutputReference.property.identityProviderIdInput"></a>

```csharp
public string IdentityProviderIdInput { get; }
```

- *Type:* string

---

##### `AttributeName`<sup>Required</sup> <a name="AttributeName" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireSamlOutputReference.property.attributeName"></a>

```csharp
public string AttributeName { get; }
```

- *Type:* string

---

##### `AttributeValue`<sup>Required</sup> <a name="AttributeValue" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireSamlOutputReference.property.attributeValue"></a>

```csharp
public string AttributeValue { get; }
```

- *Type:* string

---

##### `IdentityProviderId`<sup>Required</sup> <a name="IdentityProviderId" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireSamlOutputReference.property.identityProviderId"></a>

```csharp
public string IdentityProviderId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.accessGroup.AccessGroupRequireSamlOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



