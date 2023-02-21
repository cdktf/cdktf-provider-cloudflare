# `accessIdentityProvider` Submodule <a name="`accessIdentityProvider` Submodule" id="@cdktf/provider-cloudflare.accessIdentityProvider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AccessIdentityProvider <a name="AccessIdentityProvider" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider"></a>

Represents a {@link https://www.terraform.io/docs/providers/cloudflare/r/access_identity_provider cloudflare_access_identity_provider}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new AccessIdentityProvider(Construct Scope, string Id, AccessIdentityProviderConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfig">AccessIdentityProviderConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfig">AccessIdentityProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.putConfig">PutConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.resetConfig">ResetConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.resetZoneId">ResetZoneId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutConfig` <a name="PutConfig" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.putConfig"></a>

```csharp
private void PutConfig(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.putConfig.parameter.value"></a>

- *Type:* object

---

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.resetAccountId"></a>

```csharp
private void ResetAccountId()
```

##### `ResetConfig` <a name="ResetConfig" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.resetConfig"></a>

```csharp
private void ResetConfig()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetZoneId` <a name="ResetZoneId" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.resetZoneId"></a>

```csharp
private void ResetZoneId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

AccessIdentityProvider.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

AccessIdentityProvider.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

AccessIdentityProvider.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.config">Config</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAList">AccessIdentityProviderConfigAList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.configInput">ConfigInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.zoneIdInput">ZoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.zoneId">ZoneId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.config"></a>

```csharp
public AccessIdentityProviderConfigAList Config { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAList">AccessIdentityProviderConfigAList</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `ConfigInput`<sup>Optional</sup> <a name="ConfigInput" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.configInput"></a>

```csharp
public object ConfigInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `ZoneIdInput`<sup>Optional</sup> <a name="ZoneIdInput" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.zoneIdInput"></a>

```csharp
public string ZoneIdInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.zoneId"></a>

```csharp
public string ZoneId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AccessIdentityProviderConfig <a name="AccessIdentityProviderConfig" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new AccessIdentityProviderConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string Type,
    string AccountId = null,
    object Config = null,
    string Id = null,
    string ZoneId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfig.property.name">Name</a></code> | <code>string</code> | Friendly name of the Access Identity Provider configuration. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfig.property.type">Type</a></code> | <code>string</code> | The provider type to use. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfig.property.accountId">AccountId</a></code> | <code>string</code> | The account identifier to target for the resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfig.property.config">Config</a></code> | <code>object</code> | config block. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_identity_provider#id AccessIdentityProvider#id}. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfig.property.zoneId">ZoneId</a></code> | <code>string</code> | The zone identifier to target for the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Friendly name of the Access Identity Provider configuration.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_identity_provider#name AccessIdentityProvider#name}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The provider type to use.

Available values: `centrify`, `facebook`, `google-apps`, `oidc`, `github`, `google`, `saml`, `linkedin`, `azureAD`, `okta`, `onetimepin`, `onelogin`, `yandex`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_identity_provider#type AccessIdentityProvider#type}

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

The account identifier to target for the resource.

Conflicts with `zone_id`. **Modifying this attribute will force creation of a new resource.**

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_identity_provider#account_id AccessIdentityProvider#account_id}

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfig.property.config"></a>

```csharp
public object Config { get; set; }
```

- *Type:* object

config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_identity_provider#config AccessIdentityProvider#config}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_identity_provider#id AccessIdentityProvider#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ZoneId`<sup>Optional</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfig.property.zoneId"></a>

```csharp
public string ZoneId { get; set; }
```

- *Type:* string

The zone identifier to target for the resource.

Conflicts with `account_id`. **Modifying this attribute will force creation of a new resource.**

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_identity_provider#zone_id AccessIdentityProvider#zone_id}

---

### AccessIdentityProviderConfigA <a name="AccessIdentityProviderConfigA" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new AccessIdentityProviderConfigA {
    string ApiToken = null,
    string AppsDomain = null,
    string[] Attributes = null,
    string AuthUrl = null,
    string CentrifyAccount = null,
    string CentrifyAppId = null,
    string CertsUrl = null,
    string ClientId = null,
    string ClientSecret = null,
    string DirectoryId = null,
    string EmailAttributeName = null,
    string IdpPublicCert = null,
    string IssuerUrl = null,
    string OktaAccount = null,
    string OneloginAccount = null,
    object PkceEnabled = null,
    string RedirectUrl = null,
    object SignRequest = null,
    string SsoTargetUrl = null,
    object SupportGroups = null,
    string TokenUrl = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.apiToken">ApiToken</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_identity_provider#api_token AccessIdentityProvider#api_token}. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.appsDomain">AppsDomain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_identity_provider#apps_domain AccessIdentityProvider#apps_domain}. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.attributes">Attributes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_identity_provider#attributes AccessIdentityProvider#attributes}. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.authUrl">AuthUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_identity_provider#auth_url AccessIdentityProvider#auth_url}. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.centrifyAccount">CentrifyAccount</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_identity_provider#centrify_account AccessIdentityProvider#centrify_account}. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.centrifyAppId">CentrifyAppId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_identity_provider#centrify_app_id AccessIdentityProvider#centrify_app_id}. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.certsUrl">CertsUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_identity_provider#certs_url AccessIdentityProvider#certs_url}. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.clientId">ClientId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_identity_provider#client_id AccessIdentityProvider#client_id}. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.clientSecret">ClientSecret</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_identity_provider#client_secret AccessIdentityProvider#client_secret}. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.directoryId">DirectoryId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_identity_provider#directory_id AccessIdentityProvider#directory_id}. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.emailAttributeName">EmailAttributeName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_identity_provider#email_attribute_name AccessIdentityProvider#email_attribute_name}. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.idpPublicCert">IdpPublicCert</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_identity_provider#idp_public_cert AccessIdentityProvider#idp_public_cert}. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.issuerUrl">IssuerUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_identity_provider#issuer_url AccessIdentityProvider#issuer_url}. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.oktaAccount">OktaAccount</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_identity_provider#okta_account AccessIdentityProvider#okta_account}. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.oneloginAccount">OneloginAccount</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_identity_provider#onelogin_account AccessIdentityProvider#onelogin_account}. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.pkceEnabled">PkceEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_identity_provider#pkce_enabled AccessIdentityProvider#pkce_enabled}. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.redirectUrl">RedirectUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_identity_provider#redirect_url AccessIdentityProvider#redirect_url}. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.signRequest">SignRequest</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_identity_provider#sign_request AccessIdentityProvider#sign_request}. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.ssoTargetUrl">SsoTargetUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_identity_provider#sso_target_url AccessIdentityProvider#sso_target_url}. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.supportGroups">SupportGroups</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_identity_provider#support_groups AccessIdentityProvider#support_groups}. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.tokenUrl">TokenUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_identity_provider#token_url AccessIdentityProvider#token_url}. |

---

##### `ApiToken`<sup>Optional</sup> <a name="ApiToken" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.apiToken"></a>

```csharp
public string ApiToken { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_identity_provider#api_token AccessIdentityProvider#api_token}.

---

##### `AppsDomain`<sup>Optional</sup> <a name="AppsDomain" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.appsDomain"></a>

```csharp
public string AppsDomain { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_identity_provider#apps_domain AccessIdentityProvider#apps_domain}.

---

##### `Attributes`<sup>Optional</sup> <a name="Attributes" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.attributes"></a>

```csharp
public string[] Attributes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_identity_provider#attributes AccessIdentityProvider#attributes}.

---

##### `AuthUrl`<sup>Optional</sup> <a name="AuthUrl" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.authUrl"></a>

```csharp
public string AuthUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_identity_provider#auth_url AccessIdentityProvider#auth_url}.

---

##### `CentrifyAccount`<sup>Optional</sup> <a name="CentrifyAccount" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.centrifyAccount"></a>

```csharp
public string CentrifyAccount { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_identity_provider#centrify_account AccessIdentityProvider#centrify_account}.

---

##### `CentrifyAppId`<sup>Optional</sup> <a name="CentrifyAppId" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.centrifyAppId"></a>

```csharp
public string CentrifyAppId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_identity_provider#centrify_app_id AccessIdentityProvider#centrify_app_id}.

---

##### `CertsUrl`<sup>Optional</sup> <a name="CertsUrl" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.certsUrl"></a>

```csharp
public string CertsUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_identity_provider#certs_url AccessIdentityProvider#certs_url}.

---

##### `ClientId`<sup>Optional</sup> <a name="ClientId" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.clientId"></a>

```csharp
public string ClientId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_identity_provider#client_id AccessIdentityProvider#client_id}.

---

##### `ClientSecret`<sup>Optional</sup> <a name="ClientSecret" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.clientSecret"></a>

```csharp
public string ClientSecret { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_identity_provider#client_secret AccessIdentityProvider#client_secret}.

---

##### `DirectoryId`<sup>Optional</sup> <a name="DirectoryId" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.directoryId"></a>

```csharp
public string DirectoryId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_identity_provider#directory_id AccessIdentityProvider#directory_id}.

---

##### `EmailAttributeName`<sup>Optional</sup> <a name="EmailAttributeName" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.emailAttributeName"></a>

```csharp
public string EmailAttributeName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_identity_provider#email_attribute_name AccessIdentityProvider#email_attribute_name}.

---

##### `IdpPublicCert`<sup>Optional</sup> <a name="IdpPublicCert" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.idpPublicCert"></a>

```csharp
public string IdpPublicCert { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_identity_provider#idp_public_cert AccessIdentityProvider#idp_public_cert}.

---

##### `IssuerUrl`<sup>Optional</sup> <a name="IssuerUrl" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.issuerUrl"></a>

```csharp
public string IssuerUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_identity_provider#issuer_url AccessIdentityProvider#issuer_url}.

---

##### `OktaAccount`<sup>Optional</sup> <a name="OktaAccount" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.oktaAccount"></a>

```csharp
public string OktaAccount { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_identity_provider#okta_account AccessIdentityProvider#okta_account}.

---

##### `OneloginAccount`<sup>Optional</sup> <a name="OneloginAccount" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.oneloginAccount"></a>

```csharp
public string OneloginAccount { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_identity_provider#onelogin_account AccessIdentityProvider#onelogin_account}.

---

##### `PkceEnabled`<sup>Optional</sup> <a name="PkceEnabled" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.pkceEnabled"></a>

```csharp
public object PkceEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_identity_provider#pkce_enabled AccessIdentityProvider#pkce_enabled}.

---

##### `RedirectUrl`<sup>Optional</sup> <a name="RedirectUrl" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.redirectUrl"></a>

```csharp
public string RedirectUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_identity_provider#redirect_url AccessIdentityProvider#redirect_url}.

---

##### `SignRequest`<sup>Optional</sup> <a name="SignRequest" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.signRequest"></a>

```csharp
public object SignRequest { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_identity_provider#sign_request AccessIdentityProvider#sign_request}.

---

##### `SsoTargetUrl`<sup>Optional</sup> <a name="SsoTargetUrl" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.ssoTargetUrl"></a>

```csharp
public string SsoTargetUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_identity_provider#sso_target_url AccessIdentityProvider#sso_target_url}.

---

##### `SupportGroups`<sup>Optional</sup> <a name="SupportGroups" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.supportGroups"></a>

```csharp
public object SupportGroups { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_identity_provider#support_groups AccessIdentityProvider#support_groups}.

---

##### `TokenUrl`<sup>Optional</sup> <a name="TokenUrl" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.tokenUrl"></a>

```csharp
public string TokenUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_identity_provider#token_url AccessIdentityProvider#token_url}.

---

## Classes <a name="Classes" id="Classes"></a>

### AccessIdentityProviderConfigAList <a name="AccessIdentityProviderConfigAList" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new AccessIdentityProviderConfigAList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAList.get"></a>

```csharp
private AccessIdentityProviderConfigAOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AccessIdentityProviderConfigAOutputReference <a name="AccessIdentityProviderConfigAOutputReference" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new AccessIdentityProviderConfigAOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetApiToken">ResetApiToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetAppsDomain">ResetAppsDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetAttributes">ResetAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetAuthUrl">ResetAuthUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetCentrifyAccount">ResetCentrifyAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetCentrifyAppId">ResetCentrifyAppId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetCertsUrl">ResetCertsUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetClientId">ResetClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetClientSecret">ResetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetDirectoryId">ResetDirectoryId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetEmailAttributeName">ResetEmailAttributeName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetIdpPublicCert">ResetIdpPublicCert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetIssuerUrl">ResetIssuerUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetOktaAccount">ResetOktaAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetOneloginAccount">ResetOneloginAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetPkceEnabled">ResetPkceEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetRedirectUrl">ResetRedirectUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetSignRequest">ResetSignRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetSsoTargetUrl">ResetSsoTargetUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetSupportGroups">ResetSupportGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetTokenUrl">ResetTokenUrl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetApiToken` <a name="ResetApiToken" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetApiToken"></a>

```csharp
private void ResetApiToken()
```

##### `ResetAppsDomain` <a name="ResetAppsDomain" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetAppsDomain"></a>

```csharp
private void ResetAppsDomain()
```

##### `ResetAttributes` <a name="ResetAttributes" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetAttributes"></a>

```csharp
private void ResetAttributes()
```

##### `ResetAuthUrl` <a name="ResetAuthUrl" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetAuthUrl"></a>

```csharp
private void ResetAuthUrl()
```

##### `ResetCentrifyAccount` <a name="ResetCentrifyAccount" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetCentrifyAccount"></a>

```csharp
private void ResetCentrifyAccount()
```

##### `ResetCentrifyAppId` <a name="ResetCentrifyAppId" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetCentrifyAppId"></a>

```csharp
private void ResetCentrifyAppId()
```

##### `ResetCertsUrl` <a name="ResetCertsUrl" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetCertsUrl"></a>

```csharp
private void ResetCertsUrl()
```

##### `ResetClientId` <a name="ResetClientId" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetClientId"></a>

```csharp
private void ResetClientId()
```

##### `ResetClientSecret` <a name="ResetClientSecret" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetClientSecret"></a>

```csharp
private void ResetClientSecret()
```

##### `ResetDirectoryId` <a name="ResetDirectoryId" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetDirectoryId"></a>

```csharp
private void ResetDirectoryId()
```

##### `ResetEmailAttributeName` <a name="ResetEmailAttributeName" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetEmailAttributeName"></a>

```csharp
private void ResetEmailAttributeName()
```

##### `ResetIdpPublicCert` <a name="ResetIdpPublicCert" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetIdpPublicCert"></a>

```csharp
private void ResetIdpPublicCert()
```

##### `ResetIssuerUrl` <a name="ResetIssuerUrl" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetIssuerUrl"></a>

```csharp
private void ResetIssuerUrl()
```

##### `ResetOktaAccount` <a name="ResetOktaAccount" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetOktaAccount"></a>

```csharp
private void ResetOktaAccount()
```

##### `ResetOneloginAccount` <a name="ResetOneloginAccount" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetOneloginAccount"></a>

```csharp
private void ResetOneloginAccount()
```

##### `ResetPkceEnabled` <a name="ResetPkceEnabled" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetPkceEnabled"></a>

```csharp
private void ResetPkceEnabled()
```

##### `ResetRedirectUrl` <a name="ResetRedirectUrl" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetRedirectUrl"></a>

```csharp
private void ResetRedirectUrl()
```

##### `ResetSignRequest` <a name="ResetSignRequest" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetSignRequest"></a>

```csharp
private void ResetSignRequest()
```

##### `ResetSsoTargetUrl` <a name="ResetSsoTargetUrl" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetSsoTargetUrl"></a>

```csharp
private void ResetSsoTargetUrl()
```

##### `ResetSupportGroups` <a name="ResetSupportGroups" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetSupportGroups"></a>

```csharp
private void ResetSupportGroups()
```

##### `ResetTokenUrl` <a name="ResetTokenUrl" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetTokenUrl"></a>

```csharp
private void ResetTokenUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.apiTokenInput">ApiTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.appsDomainInput">AppsDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.attributesInput">AttributesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.authUrlInput">AuthUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.centrifyAccountInput">CentrifyAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.centrifyAppIdInput">CentrifyAppIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.certsUrlInput">CertsUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.clientSecretInput">ClientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.directoryIdInput">DirectoryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.emailAttributeNameInput">EmailAttributeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.idpPublicCertInput">IdpPublicCertInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.issuerUrlInput">IssuerUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.oktaAccountInput">OktaAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.oneloginAccountInput">OneloginAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.pkceEnabledInput">PkceEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.redirectUrlInput">RedirectUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.signRequestInput">SignRequestInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.ssoTargetUrlInput">SsoTargetUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.supportGroupsInput">SupportGroupsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.tokenUrlInput">TokenUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.apiToken">ApiToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.appsDomain">AppsDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.attributes">Attributes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.authUrl">AuthUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.centrifyAccount">CentrifyAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.centrifyAppId">CentrifyAppId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.certsUrl">CertsUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.clientId">ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.clientSecret">ClientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.directoryId">DirectoryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.emailAttributeName">EmailAttributeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.idpPublicCert">IdpPublicCert</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.issuerUrl">IssuerUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.oktaAccount">OktaAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.oneloginAccount">OneloginAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.pkceEnabled">PkceEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.redirectUrl">RedirectUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.signRequest">SignRequest</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.ssoTargetUrl">SsoTargetUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.supportGroups">SupportGroups</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.tokenUrl">TokenUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApiTokenInput`<sup>Optional</sup> <a name="ApiTokenInput" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.apiTokenInput"></a>

```csharp
public string ApiTokenInput { get; }
```

- *Type:* string

---

##### `AppsDomainInput`<sup>Optional</sup> <a name="AppsDomainInput" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.appsDomainInput"></a>

```csharp
public string AppsDomainInput { get; }
```

- *Type:* string

---

##### `AttributesInput`<sup>Optional</sup> <a name="AttributesInput" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.attributesInput"></a>

```csharp
public string[] AttributesInput { get; }
```

- *Type:* string[]

---

##### `AuthUrlInput`<sup>Optional</sup> <a name="AuthUrlInput" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.authUrlInput"></a>

```csharp
public string AuthUrlInput { get; }
```

- *Type:* string

---

##### `CentrifyAccountInput`<sup>Optional</sup> <a name="CentrifyAccountInput" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.centrifyAccountInput"></a>

```csharp
public string CentrifyAccountInput { get; }
```

- *Type:* string

---

##### `CentrifyAppIdInput`<sup>Optional</sup> <a name="CentrifyAppIdInput" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.centrifyAppIdInput"></a>

```csharp
public string CentrifyAppIdInput { get; }
```

- *Type:* string

---

##### `CertsUrlInput`<sup>Optional</sup> <a name="CertsUrlInput" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.certsUrlInput"></a>

```csharp
public string CertsUrlInput { get; }
```

- *Type:* string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.clientIdInput"></a>

```csharp
public string ClientIdInput { get; }
```

- *Type:* string

---

##### `ClientSecretInput`<sup>Optional</sup> <a name="ClientSecretInput" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.clientSecretInput"></a>

```csharp
public string ClientSecretInput { get; }
```

- *Type:* string

---

##### `DirectoryIdInput`<sup>Optional</sup> <a name="DirectoryIdInput" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.directoryIdInput"></a>

```csharp
public string DirectoryIdInput { get; }
```

- *Type:* string

---

##### `EmailAttributeNameInput`<sup>Optional</sup> <a name="EmailAttributeNameInput" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.emailAttributeNameInput"></a>

```csharp
public string EmailAttributeNameInput { get; }
```

- *Type:* string

---

##### `IdpPublicCertInput`<sup>Optional</sup> <a name="IdpPublicCertInput" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.idpPublicCertInput"></a>

```csharp
public string IdpPublicCertInput { get; }
```

- *Type:* string

---

##### `IssuerUrlInput`<sup>Optional</sup> <a name="IssuerUrlInput" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.issuerUrlInput"></a>

```csharp
public string IssuerUrlInput { get; }
```

- *Type:* string

---

##### `OktaAccountInput`<sup>Optional</sup> <a name="OktaAccountInput" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.oktaAccountInput"></a>

```csharp
public string OktaAccountInput { get; }
```

- *Type:* string

---

##### `OneloginAccountInput`<sup>Optional</sup> <a name="OneloginAccountInput" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.oneloginAccountInput"></a>

```csharp
public string OneloginAccountInput { get; }
```

- *Type:* string

---

##### `PkceEnabledInput`<sup>Optional</sup> <a name="PkceEnabledInput" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.pkceEnabledInput"></a>

```csharp
public object PkceEnabledInput { get; }
```

- *Type:* object

---

##### `RedirectUrlInput`<sup>Optional</sup> <a name="RedirectUrlInput" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.redirectUrlInput"></a>

```csharp
public string RedirectUrlInput { get; }
```

- *Type:* string

---

##### `SignRequestInput`<sup>Optional</sup> <a name="SignRequestInput" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.signRequestInput"></a>

```csharp
public object SignRequestInput { get; }
```

- *Type:* object

---

##### `SsoTargetUrlInput`<sup>Optional</sup> <a name="SsoTargetUrlInput" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.ssoTargetUrlInput"></a>

```csharp
public string SsoTargetUrlInput { get; }
```

- *Type:* string

---

##### `SupportGroupsInput`<sup>Optional</sup> <a name="SupportGroupsInput" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.supportGroupsInput"></a>

```csharp
public object SupportGroupsInput { get; }
```

- *Type:* object

---

##### `TokenUrlInput`<sup>Optional</sup> <a name="TokenUrlInput" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.tokenUrlInput"></a>

```csharp
public string TokenUrlInput { get; }
```

- *Type:* string

---

##### `ApiToken`<sup>Required</sup> <a name="ApiToken" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.apiToken"></a>

```csharp
public string ApiToken { get; }
```

- *Type:* string

---

##### `AppsDomain`<sup>Required</sup> <a name="AppsDomain" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.appsDomain"></a>

```csharp
public string AppsDomain { get; }
```

- *Type:* string

---

##### `Attributes`<sup>Required</sup> <a name="Attributes" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.attributes"></a>

```csharp
public string[] Attributes { get; }
```

- *Type:* string[]

---

##### `AuthUrl`<sup>Required</sup> <a name="AuthUrl" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.authUrl"></a>

```csharp
public string AuthUrl { get; }
```

- *Type:* string

---

##### `CentrifyAccount`<sup>Required</sup> <a name="CentrifyAccount" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.centrifyAccount"></a>

```csharp
public string CentrifyAccount { get; }
```

- *Type:* string

---

##### `CentrifyAppId`<sup>Required</sup> <a name="CentrifyAppId" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.centrifyAppId"></a>

```csharp
public string CentrifyAppId { get; }
```

- *Type:* string

---

##### `CertsUrl`<sup>Required</sup> <a name="CertsUrl" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.certsUrl"></a>

```csharp
public string CertsUrl { get; }
```

- *Type:* string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.clientId"></a>

```csharp
public string ClientId { get; }
```

- *Type:* string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.clientSecret"></a>

```csharp
public string ClientSecret { get; }
```

- *Type:* string

---

##### `DirectoryId`<sup>Required</sup> <a name="DirectoryId" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.directoryId"></a>

```csharp
public string DirectoryId { get; }
```

- *Type:* string

---

##### `EmailAttributeName`<sup>Required</sup> <a name="EmailAttributeName" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.emailAttributeName"></a>

```csharp
public string EmailAttributeName { get; }
```

- *Type:* string

---

##### `IdpPublicCert`<sup>Required</sup> <a name="IdpPublicCert" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.idpPublicCert"></a>

```csharp
public string IdpPublicCert { get; }
```

- *Type:* string

---

##### `IssuerUrl`<sup>Required</sup> <a name="IssuerUrl" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.issuerUrl"></a>

```csharp
public string IssuerUrl { get; }
```

- *Type:* string

---

##### `OktaAccount`<sup>Required</sup> <a name="OktaAccount" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.oktaAccount"></a>

```csharp
public string OktaAccount { get; }
```

- *Type:* string

---

##### `OneloginAccount`<sup>Required</sup> <a name="OneloginAccount" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.oneloginAccount"></a>

```csharp
public string OneloginAccount { get; }
```

- *Type:* string

---

##### `PkceEnabled`<sup>Required</sup> <a name="PkceEnabled" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.pkceEnabled"></a>

```csharp
public object PkceEnabled { get; }
```

- *Type:* object

---

##### `RedirectUrl`<sup>Required</sup> <a name="RedirectUrl" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.redirectUrl"></a>

```csharp
public string RedirectUrl { get; }
```

- *Type:* string

---

##### `SignRequest`<sup>Required</sup> <a name="SignRequest" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.signRequest"></a>

```csharp
public object SignRequest { get; }
```

- *Type:* object

---

##### `SsoTargetUrl`<sup>Required</sup> <a name="SsoTargetUrl" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.ssoTargetUrl"></a>

```csharp
public string SsoTargetUrl { get; }
```

- *Type:* string

---

##### `SupportGroups`<sup>Required</sup> <a name="SupportGroups" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.supportGroups"></a>

```csharp
public object SupportGroups { get; }
```

- *Type:* object

---

##### `TokenUrl`<sup>Required</sup> <a name="TokenUrl" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.tokenUrl"></a>

```csharp
public string TokenUrl { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


