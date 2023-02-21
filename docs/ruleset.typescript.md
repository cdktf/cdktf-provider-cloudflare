# `ruleset` Submodule <a name="`ruleset` Submodule" id="@cdktf/provider-cloudflare.ruleset"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ruleset <a name="Ruleset" id="@cdktf/provider-cloudflare.ruleset.Ruleset"></a>

Represents a {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset cloudflare_ruleset}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.ruleset.Ruleset.Initializer"></a>

```typescript
import { ruleset } from '@cdktf/provider-cloudflare'

new ruleset.Ruleset(scope: Construct, id: string, config: RulesetConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetConfig">RulesetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.ruleset.Ruleset.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.ruleset.Ruleset.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.ruleset.Ruleset.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetConfig">RulesetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.putRules">putRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.resetRules">resetRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.resetShareableEntitlementName">resetShareableEntitlementName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.resetZoneId">resetZoneId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.ruleset.Ruleset.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.ruleset.Ruleset.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.ruleset.Ruleset.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.ruleset.Ruleset.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.ruleset.Ruleset.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.ruleset.Ruleset.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.ruleset.Ruleset.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.ruleset.Ruleset.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.ruleset.Ruleset.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.ruleset.Ruleset.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.Ruleset.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.ruleset.Ruleset.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.Ruleset.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.ruleset.Ruleset.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.Ruleset.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.ruleset.Ruleset.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.Ruleset.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.ruleset.Ruleset.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.Ruleset.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.ruleset.Ruleset.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.Ruleset.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.ruleset.Ruleset.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.Ruleset.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.ruleset.Ruleset.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.Ruleset.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.ruleset.Ruleset.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.Ruleset.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.ruleset.Ruleset.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.Ruleset.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putRules` <a name="putRules" id="@cdktf/provider-cloudflare.ruleset.Ruleset.putRules"></a>

```typescript
public putRules(value: IResolvable | RulesetRules[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.ruleset.Ruleset.putRules.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRules">RulesetRules</a>[]

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktf/provider-cloudflare.ruleset.Ruleset.resetAccountId"></a>

```typescript
public resetAccountId(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-cloudflare.ruleset.Ruleset.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-cloudflare.ruleset.Ruleset.resetId"></a>

```typescript
public resetId(): void
```

##### `resetRules` <a name="resetRules" id="@cdktf/provider-cloudflare.ruleset.Ruleset.resetRules"></a>

```typescript
public resetRules(): void
```

##### `resetShareableEntitlementName` <a name="resetShareableEntitlementName" id="@cdktf/provider-cloudflare.ruleset.Ruleset.resetShareableEntitlementName"></a>

```typescript
public resetShareableEntitlementName(): void
```

##### `resetZoneId` <a name="resetZoneId" id="@cdktf/provider-cloudflare.ruleset.Ruleset.resetZoneId"></a>

```typescript
public resetZoneId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.ruleset.Ruleset.isConstruct"></a>

```typescript
import { ruleset } from '@cdktf/provider-cloudflare'

ruleset.Ruleset.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.ruleset.Ruleset.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.ruleset.Ruleset.isTerraformElement"></a>

```typescript
import { ruleset } from '@cdktf/provider-cloudflare'

ruleset.Ruleset.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.ruleset.Ruleset.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-cloudflare.ruleset.Ruleset.isTerraformResource"></a>

```typescript
import { ruleset } from '@cdktf/provider-cloudflare'

ruleset.Ruleset.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.ruleset.Ruleset.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.property.rules">rules</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesList">RulesetRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.property.kindInput">kindInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.property.phaseInput">phaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.property.rulesInput">rulesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRules">RulesetRules</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.property.shareableEntitlementNameInput">shareableEntitlementNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.property.zoneIdInput">zoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.property.kind">kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.property.phase">phase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.property.shareableEntitlementName">shareableEntitlementName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.property.zoneId">zoneId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.ruleset.Ruleset.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.ruleset.Ruleset.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.ruleset.Ruleset.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.ruleset.Ruleset.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.ruleset.Ruleset.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.ruleset.Ruleset.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.ruleset.Ruleset.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.ruleset.Ruleset.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.ruleset.Ruleset.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.ruleset.Ruleset.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.ruleset.Ruleset.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.ruleset.Ruleset.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.ruleset.Ruleset.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.ruleset.Ruleset.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktf/provider-cloudflare.ruleset.Ruleset.property.rules"></a>

```typescript
public readonly rules: RulesetRulesList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesList">RulesetRulesList</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.ruleset.Ruleset.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-cloudflare.ruleset.Ruleset.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-cloudflare.ruleset.Ruleset.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `kindInput`<sup>Optional</sup> <a name="kindInput" id="@cdktf/provider-cloudflare.ruleset.Ruleset.property.kindInput"></a>

```typescript
public readonly kindInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.ruleset.Ruleset.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `phaseInput`<sup>Optional</sup> <a name="phaseInput" id="@cdktf/provider-cloudflare.ruleset.Ruleset.property.phaseInput"></a>

```typescript
public readonly phaseInput: string;
```

- *Type:* string

---

##### `rulesInput`<sup>Optional</sup> <a name="rulesInput" id="@cdktf/provider-cloudflare.ruleset.Ruleset.property.rulesInput"></a>

```typescript
public readonly rulesInput: IResolvable | RulesetRules[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRules">RulesetRules</a>[]

---

##### `shareableEntitlementNameInput`<sup>Optional</sup> <a name="shareableEntitlementNameInput" id="@cdktf/provider-cloudflare.ruleset.Ruleset.property.shareableEntitlementNameInput"></a>

```typescript
public readonly shareableEntitlementNameInput: string;
```

- *Type:* string

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktf/provider-cloudflare.ruleset.Ruleset.property.zoneIdInput"></a>

```typescript
public readonly zoneIdInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.ruleset.Ruleset.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.ruleset.Ruleset.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.ruleset.Ruleset.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-cloudflare.ruleset.Ruleset.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.ruleset.Ruleset.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `phase`<sup>Required</sup> <a name="phase" id="@cdktf/provider-cloudflare.ruleset.Ruleset.property.phase"></a>

```typescript
public readonly phase: string;
```

- *Type:* string

---

##### `shareableEntitlementName`<sup>Required</sup> <a name="shareableEntitlementName" id="@cdktf/provider-cloudflare.ruleset.Ruleset.property.shareableEntitlementName"></a>

```typescript
public readonly shareableEntitlementName: string;
```

- *Type:* string

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.ruleset.Ruleset.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.ruleset.Ruleset.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RulesetConfig <a name="RulesetConfig" id="@cdktf/provider-cloudflare.ruleset.RulesetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.ruleset.RulesetConfig.Initializer"></a>

```typescript
import { ruleset } from '@cdktf/provider-cloudflare'

const rulesetConfig: ruleset.RulesetConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetConfig.property.kind">kind</a></code> | <code>string</code> | Type of Ruleset to create. Available values: `custom`, `managed`, `root`, `schema`, `zone`. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetConfig.property.name">name</a></code> | <code>string</code> | Name of the ruleset. **Modifying this attribute will force creation of a new resource.**. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetConfig.property.phase">phase</a></code> | <code>string</code> | Point in the request/response lifecycle where the ruleset will be created. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetConfig.property.accountId">accountId</a></code> | <code>string</code> | The account identifier to target for the resource. Conflicts with `zone_id`. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetConfig.property.description">description</a></code> | <code>string</code> | Brief summary of the ruleset and its intended use. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#id Ruleset#id}. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetConfig.property.rules">rules</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRules">RulesetRules</a>[]</code> | rules block. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetConfig.property.shareableEntitlementName">shareableEntitlementName</a></code> | <code>string</code> | Name of entitlement that is shareable between entities. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetConfig.property.zoneId">zoneId</a></code> | <code>string</code> | The zone identifier to target for the resource. Conflicts with `account_id`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.ruleset.RulesetConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.ruleset.RulesetConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.ruleset.RulesetConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.ruleset.RulesetConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.ruleset.RulesetConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.ruleset.RulesetConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.ruleset.RulesetConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-cloudflare.ruleset.RulesetConfig.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

Type of Ruleset to create. Available values: `custom`, `managed`, `root`, `schema`, `zone`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#kind Ruleset#kind}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.ruleset.RulesetConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the ruleset. **Modifying this attribute will force creation of a new resource.**.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#name Ruleset#name}

---

##### `phase`<sup>Required</sup> <a name="phase" id="@cdktf/provider-cloudflare.ruleset.RulesetConfig.property.phase"></a>

```typescript
public readonly phase: string;
```

- *Type:* string

Point in the request/response lifecycle where the ruleset will be created.

Available values: `ddos_l4`, `ddos_l7`, `http_custom_errors`, `http_log_custom_fields`, `http_request_cache_settings`, `http_request_firewall_custom`, `http_request_firewall_managed`, `http_request_late_transform`, `http_request_late_transform_managed`, `http_request_main`, `http_request_origin`, `http_request_dynamic_redirect`, `http_request_redirect`, `http_request_sanitize`, `http_request_transform`, `http_response_firewall_managed`, `http_response_headers_transform`, `http_response_headers_transform_managed`, `magic_transit`, `http_ratelimit`, `http_request_sbfm`, `http_config_settings`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#phase Ruleset#phase}

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-cloudflare.ruleset.RulesetConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

The account identifier to target for the resource. Conflicts with `zone_id`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#account_id Ruleset#account_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-cloudflare.ruleset.RulesetConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Brief summary of the ruleset and its intended use.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#description Ruleset#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.ruleset.RulesetConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#id Ruleset#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `rules`<sup>Optional</sup> <a name="rules" id="@cdktf/provider-cloudflare.ruleset.RulesetConfig.property.rules"></a>

```typescript
public readonly rules: IResolvable | RulesetRules[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRules">RulesetRules</a>[]

rules block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#rules Ruleset#rules}

---

##### `shareableEntitlementName`<sup>Optional</sup> <a name="shareableEntitlementName" id="@cdktf/provider-cloudflare.ruleset.RulesetConfig.property.shareableEntitlementName"></a>

```typescript
public readonly shareableEntitlementName: string;
```

- *Type:* string

Name of entitlement that is shareable between entities.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#shareable_entitlement_name Ruleset#shareable_entitlement_name}

---

##### `zoneId`<sup>Optional</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.ruleset.RulesetConfig.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

The zone identifier to target for the resource. Conflicts with `account_id`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#zone_id Ruleset#zone_id}

---

### RulesetRules <a name="RulesetRules" id="@cdktf/provider-cloudflare.ruleset.RulesetRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.ruleset.RulesetRules.Initializer"></a>

```typescript
import { ruleset } from '@cdktf/provider-cloudflare'

const rulesetRules: ruleset.RulesetRules = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRules.property.expression">expression</a></code> | <code>string</code> | Criteria for an HTTP request to trigger the ruleset rule action. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRules.property.action">action</a></code> | <code>string</code> | Action to perform in the ruleset rule. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRules.property.actionParameters">actionParameters</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters">RulesetRulesActionParameters</a></code> | action_parameters block. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRules.property.description">description</a></code> | <code>string</code> | Brief summary of the ruleset rule and its intended use. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRules.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether the rule is active. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRules.property.exposedCredentialCheck">exposedCredentialCheck</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheck">RulesetRulesExposedCredentialCheck</a></code> | exposed_credential_check block. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRules.property.lastUpdated">lastUpdated</a></code> | <code>string</code> | The most recent update to this rule. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRules.property.logging">logging</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesLogging">RulesetRulesLogging</a></code> | logging block. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRules.property.ratelimit">ratelimit</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimit">RulesetRulesRatelimit</a></code> | ratelimit block. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-cloudflare.ruleset.RulesetRules.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

Criteria for an HTTP request to trigger the ruleset rule action.

Uses the Firewall Rules expression language based on Wireshark display filters. Refer to the [Firewall Rules language](https://developers.cloudflare.com/firewall/cf-firewall-language) documentation for all available fields, operators, and functions.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#expression Ruleset#expression}

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktf/provider-cloudflare.ruleset.RulesetRules.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

Action to perform in the ruleset rule.

Available values: `block`, `challenge`, `ddos_dynamic`, `execute`, `force_connection_close`, `js_challenge`, `log`, `log_custom_field`, `managed_challenge`, `redirect`, `rewrite`, `route`, `score`, `set_cache_settings`, `set_config`, `serve_error`, `skip`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#action Ruleset#action}

---

##### `actionParameters`<sup>Optional</sup> <a name="actionParameters" id="@cdktf/provider-cloudflare.ruleset.RulesetRules.property.actionParameters"></a>

```typescript
public readonly actionParameters: RulesetRulesActionParameters;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters">RulesetRulesActionParameters</a>

action_parameters block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#action_parameters Ruleset#action_parameters}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-cloudflare.ruleset.RulesetRules.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Brief summary of the ruleset rule and its intended use.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#description Ruleset#description}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-cloudflare.ruleset.RulesetRules.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether the rule is active.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#enabled Ruleset#enabled}

---

##### `exposedCredentialCheck`<sup>Optional</sup> <a name="exposedCredentialCheck" id="@cdktf/provider-cloudflare.ruleset.RulesetRules.property.exposedCredentialCheck"></a>

```typescript
public readonly exposedCredentialCheck: RulesetRulesExposedCredentialCheck;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheck">RulesetRulesExposedCredentialCheck</a>

exposed_credential_check block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#exposed_credential_check Ruleset#exposed_credential_check}

---

##### `lastUpdated`<sup>Optional</sup> <a name="lastUpdated" id="@cdktf/provider-cloudflare.ruleset.RulesetRules.property.lastUpdated"></a>

```typescript
public readonly lastUpdated: string;
```

- *Type:* string

The most recent update to this rule.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#last_updated Ruleset#last_updated}

---

##### `logging`<sup>Optional</sup> <a name="logging" id="@cdktf/provider-cloudflare.ruleset.RulesetRules.property.logging"></a>

```typescript
public readonly logging: RulesetRulesLogging;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesLogging">RulesetRulesLogging</a>

logging block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#logging Ruleset#logging}

---

##### `ratelimit`<sup>Optional</sup> <a name="ratelimit" id="@cdktf/provider-cloudflare.ruleset.RulesetRules.property.ratelimit"></a>

```typescript
public readonly ratelimit: RulesetRulesRatelimit;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimit">RulesetRulesRatelimit</a>

ratelimit block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#ratelimit Ruleset#ratelimit}

---

### RulesetRulesActionParameters <a name="RulesetRulesActionParameters" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.Initializer"></a>

```typescript
import { ruleset } from '@cdktf/provider-cloudflare'

const rulesetRulesActionParameters: ruleset.RulesetRulesActionParameters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.automaticHttpsRewrites">automaticHttpsRewrites</a></code> | <code>boolean \| cdktf.IResolvable</code> | Turn on or off Cloudflare Automatic HTTPS rewrites. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.autominify">autominify</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominify">RulesetRulesActionParametersAutominify</a>[]</code> | autominify block. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.bic">bic</a></code> | <code>boolean \| cdktf.IResolvable</code> | Inspect the visitor's browser for headers commonly associated with spammers and certain bots. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.browserTtl">browserTtl</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtl">RulesetRulesActionParametersBrowserTtl</a></code> | browser_ttl block. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.cache">cache</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to cache if expression matches. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.cacheKey">cacheKey</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKey">RulesetRulesActionParametersCacheKey</a></code> | cache_key block. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.content">content</a></code> | <code>string</code> | Content of the custom error response. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.contentType">contentType</a></code> | <code>string</code> | Content-Type of the custom error response. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.cookieFields">cookieFields</a></code> | <code>string[]</code> | List of cookie values to include as part of custom fields logging. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.disableApps">disableApps</a></code> | <code>boolean \| cdktf.IResolvable</code> | Turn off all active Cloudflare Apps. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.disableRailgun">disableRailgun</a></code> | <code>boolean \| cdktf.IResolvable</code> | Turn off railgun feature of the Cloudflare Speed app. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.disableZaraz">disableZaraz</a></code> | <code>boolean \| cdktf.IResolvable</code> | Turn off zaraz feature. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.edgeTtl">edgeTtl</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtl">RulesetRulesActionParametersEdgeTtl</a></code> | edge_ttl block. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.emailObfuscation">emailObfuscation</a></code> | <code>boolean \| cdktf.IResolvable</code> | Turn on or off the Cloudflare Email Obfuscation feature of the Cloudflare Scrape Shield app. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.fromList">fromList</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromList">RulesetRulesActionParametersFromList</a></code> | from_list block. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.fromValue">fromValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValue">RulesetRulesActionParametersFromValue</a></code> | from_value block. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.headers">headers</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeaders">RulesetRulesActionParametersHeaders</a>[]</code> | headers block. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.hostHeader">hostHeader</a></code> | <code>string</code> | Host Header that request origin receives. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.hotlinkProtection">hotlinkProtection</a></code> | <code>boolean \| cdktf.IResolvable</code> | Turn on or off the hotlink protection feature. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.id">id</a></code> | <code>string</code> | Identifier of the action parameter to modify. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.increment">increment</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#increment Ruleset#increment}. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.matchedData">matchedData</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedData">RulesetRulesActionParametersMatchedData</a></code> | matched_data block. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.mirage">mirage</a></code> | <code>boolean \| cdktf.IResolvable</code> | Turn on or off Cloudflare Mirage of the Cloudflare Speed app. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.opportunisticEncryption">opportunisticEncryption</a></code> | <code>boolean \| cdktf.IResolvable</code> | Turn on or off the Cloudflare Opportunistic Encryption feature of the Edge Certificates tab in the Cloudflare SSL/TLS app. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.origin">origin</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOrigin">RulesetRulesActionParametersOrigin</a></code> | origin block. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.originErrorPagePassthru">originErrorPagePassthru</a></code> | <code>boolean \| cdktf.IResolvable</code> | Pass-through error page for origin. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.overrides">overrides</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverrides">RulesetRulesActionParametersOverrides</a></code> | overrides block. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.phases">phases</a></code> | <code>string[]</code> | Point in the request/response lifecycle where the ruleset will be created. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.polish">polish</a></code> | <code>string</code> | Apply options from the Polish feature of the Cloudflare Speed app. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.products">products</a></code> | <code>string[]</code> | Products to target with the actions. Available values: `bic`, `hot`, `ratelimit`, `securityLevel`, `uablock`, `waf`, `zonelockdown`. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.requestFields">requestFields</a></code> | <code>string[]</code> | List of request headers to include as part of custom fields logging, in lowercase. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.respectStrongEtags">respectStrongEtags</a></code> | <code>boolean \| cdktf.IResolvable</code> | Respect strong ETags. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.response">response</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponse">RulesetRulesActionParametersResponse</a>[]</code> | response block. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.responseFields">responseFields</a></code> | <code>string[]</code> | List of response headers to include as part of custom fields logging, in lowercase. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.rocketLoader">rocketLoader</a></code> | <code>boolean \| cdktf.IResolvable</code> | Turn on or off Cloudflare Rocket Loader in the Cloudflare Speed app. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.rules">rules</a></code> | <code>{[ key: string ]: string}</code> | Map of managed WAF rule ID to comma-delimited string of ruleset rule IDs. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.ruleset">ruleset</a></code> | <code>string</code> | Which ruleset ID to target. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.rulesets">rulesets</a></code> | <code>string[]</code> | List of managed WAF rule IDs to target. Only valid when the `"action"` is set to skip. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.securityLevel">securityLevel</a></code> | <code>string</code> | Control options for the Security Level feature from the Security app. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.serverSideExcludes">serverSideExcludes</a></code> | <code>boolean \| cdktf.IResolvable</code> | Turn on or off the Server Side Excludes feature of the Cloudflare Scrape Shield app. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.serveStale">serveStale</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStale">RulesetRulesActionParametersServeStale</a></code> | serve_stale block. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.sni">sni</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSni">RulesetRulesActionParametersSni</a></code> | sni block. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.ssl">ssl</a></code> | <code>string</code> | Control options for the SSL feature of the Edge Certificates tab in the Cloudflare SSL/TLS app. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.statusCode">statusCode</a></code> | <code>number</code> | HTTP status code of the custom error response. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.sxg">sxg</a></code> | <code>boolean \| cdktf.IResolvable</code> | Turn on or off the SXG feature. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.uri">uri</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUri">RulesetRulesActionParametersUri</a></code> | uri block. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.version">version</a></code> | <code>string</code> | Version of the ruleset to deploy. |

---

##### `automaticHttpsRewrites`<sup>Optional</sup> <a name="automaticHttpsRewrites" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.automaticHttpsRewrites"></a>

```typescript
public readonly automaticHttpsRewrites: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Turn on or off Cloudflare Automatic HTTPS rewrites.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#automatic_https_rewrites Ruleset#automatic_https_rewrites}

---

##### `autominify`<sup>Optional</sup> <a name="autominify" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.autominify"></a>

```typescript
public readonly autominify: IResolvable | RulesetRulesActionParametersAutominify[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominify">RulesetRulesActionParametersAutominify</a>[]

autominify block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#autominify Ruleset#autominify}

---

##### `bic`<sup>Optional</sup> <a name="bic" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.bic"></a>

```typescript
public readonly bic: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Inspect the visitor's browser for headers commonly associated with spammers and certain bots.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#bic Ruleset#bic}

---

##### `browserTtl`<sup>Optional</sup> <a name="browserTtl" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.browserTtl"></a>

```typescript
public readonly browserTtl: RulesetRulesActionParametersBrowserTtl;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtl">RulesetRulesActionParametersBrowserTtl</a>

browser_ttl block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#browser_ttl Ruleset#browser_ttl}

---

##### `cache`<sup>Optional</sup> <a name="cache" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.cache"></a>

```typescript
public readonly cache: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to cache if expression matches.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#cache Ruleset#cache}

---

##### `cacheKey`<sup>Optional</sup> <a name="cacheKey" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.cacheKey"></a>

```typescript
public readonly cacheKey: RulesetRulesActionParametersCacheKey;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKey">RulesetRulesActionParametersCacheKey</a>

cache_key block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#cache_key Ruleset#cache_key}

---

##### `content`<sup>Optional</sup> <a name="content" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

Content of the custom error response.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#content Ruleset#content}

---

##### `contentType`<sup>Optional</sup> <a name="contentType" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.contentType"></a>

```typescript
public readonly contentType: string;
```

- *Type:* string

Content-Type of the custom error response.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#content_type Ruleset#content_type}

---

##### `cookieFields`<sup>Optional</sup> <a name="cookieFields" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.cookieFields"></a>

```typescript
public readonly cookieFields: string[];
```

- *Type:* string[]

List of cookie values to include as part of custom fields logging.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#cookie_fields Ruleset#cookie_fields}

---

##### `disableApps`<sup>Optional</sup> <a name="disableApps" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.disableApps"></a>

```typescript
public readonly disableApps: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Turn off all active Cloudflare Apps.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#disable_apps Ruleset#disable_apps}

---

##### `disableRailgun`<sup>Optional</sup> <a name="disableRailgun" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.disableRailgun"></a>

```typescript
public readonly disableRailgun: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Turn off railgun feature of the Cloudflare Speed app.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#disable_railgun Ruleset#disable_railgun}

---

##### `disableZaraz`<sup>Optional</sup> <a name="disableZaraz" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.disableZaraz"></a>

```typescript
public readonly disableZaraz: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Turn off zaraz feature.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#disable_zaraz Ruleset#disable_zaraz}

---

##### `edgeTtl`<sup>Optional</sup> <a name="edgeTtl" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.edgeTtl"></a>

```typescript
public readonly edgeTtl: RulesetRulesActionParametersEdgeTtl;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtl">RulesetRulesActionParametersEdgeTtl</a>

edge_ttl block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#edge_ttl Ruleset#edge_ttl}

---

##### `emailObfuscation`<sup>Optional</sup> <a name="emailObfuscation" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.emailObfuscation"></a>

```typescript
public readonly emailObfuscation: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Turn on or off the Cloudflare Email Obfuscation feature of the Cloudflare Scrape Shield app.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#email_obfuscation Ruleset#email_obfuscation}

---

##### `fromList`<sup>Optional</sup> <a name="fromList" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.fromList"></a>

```typescript
public readonly fromList: RulesetRulesActionParametersFromList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromList">RulesetRulesActionParametersFromList</a>

from_list block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#from_list Ruleset#from_list}

---

##### `fromValue`<sup>Optional</sup> <a name="fromValue" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.fromValue"></a>

```typescript
public readonly fromValue: RulesetRulesActionParametersFromValue;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValue">RulesetRulesActionParametersFromValue</a>

from_value block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#from_value Ruleset#from_value}

---

##### `headers`<sup>Optional</sup> <a name="headers" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.headers"></a>

```typescript
public readonly headers: IResolvable | RulesetRulesActionParametersHeaders[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeaders">RulesetRulesActionParametersHeaders</a>[]

headers block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#headers Ruleset#headers}

---

##### `hostHeader`<sup>Optional</sup> <a name="hostHeader" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.hostHeader"></a>

```typescript
public readonly hostHeader: string;
```

- *Type:* string

Host Header that request origin receives.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#host_header Ruleset#host_header}

---

##### `hotlinkProtection`<sup>Optional</sup> <a name="hotlinkProtection" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.hotlinkProtection"></a>

```typescript
public readonly hotlinkProtection: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Turn on or off the hotlink protection feature.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#hotlink_protection Ruleset#hotlink_protection}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Identifier of the action parameter to modify.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#id Ruleset#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `increment`<sup>Optional</sup> <a name="increment" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.increment"></a>

```typescript
public readonly increment: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#increment Ruleset#increment}.

---

##### `matchedData`<sup>Optional</sup> <a name="matchedData" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.matchedData"></a>

```typescript
public readonly matchedData: RulesetRulesActionParametersMatchedData;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedData">RulesetRulesActionParametersMatchedData</a>

matched_data block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#matched_data Ruleset#matched_data}

---

##### `mirage`<sup>Optional</sup> <a name="mirage" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.mirage"></a>

```typescript
public readonly mirage: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Turn on or off Cloudflare Mirage of the Cloudflare Speed app.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#mirage Ruleset#mirage}

---

##### `opportunisticEncryption`<sup>Optional</sup> <a name="opportunisticEncryption" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.opportunisticEncryption"></a>

```typescript
public readonly opportunisticEncryption: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Turn on or off the Cloudflare Opportunistic Encryption feature of the Edge Certificates tab in the Cloudflare SSL/TLS app.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#opportunistic_encryption Ruleset#opportunistic_encryption}

---

##### `origin`<sup>Optional</sup> <a name="origin" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.origin"></a>

```typescript
public readonly origin: RulesetRulesActionParametersOrigin;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOrigin">RulesetRulesActionParametersOrigin</a>

origin block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#origin Ruleset#origin}

---

##### `originErrorPagePassthru`<sup>Optional</sup> <a name="originErrorPagePassthru" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.originErrorPagePassthru"></a>

```typescript
public readonly originErrorPagePassthru: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Pass-through error page for origin.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#origin_error_page_passthru Ruleset#origin_error_page_passthru}

---

##### `overrides`<sup>Optional</sup> <a name="overrides" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.overrides"></a>

```typescript
public readonly overrides: RulesetRulesActionParametersOverrides;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverrides">RulesetRulesActionParametersOverrides</a>

overrides block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#overrides Ruleset#overrides}

---

##### `phases`<sup>Optional</sup> <a name="phases" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.phases"></a>

```typescript
public readonly phases: string[];
```

- *Type:* string[]

Point in the request/response lifecycle where the ruleset will be created.

Available values: `ddos_l4`, `ddos_l7`, `http_custom_errors`, `http_log_custom_fields`, `http_request_cache_settings`, `http_request_firewall_custom`, `http_request_firewall_managed`, `http_request_late_transform`, `http_request_late_transform_managed`, `http_request_main`, `http_request_origin`, `http_request_dynamic_redirect`, `http_request_redirect`, `http_request_sanitize`, `http_request_transform`, `http_response_firewall_managed`, `http_response_headers_transform`, `http_response_headers_transform_managed`, `magic_transit`, `http_ratelimit`, `http_request_sbfm`, `http_config_settings`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#phases Ruleset#phases}

---

##### `polish`<sup>Optional</sup> <a name="polish" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.polish"></a>

```typescript
public readonly polish: string;
```

- *Type:* string

Apply options from the Polish feature of the Cloudflare Speed app.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#polish Ruleset#polish}

---

##### `products`<sup>Optional</sup> <a name="products" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.products"></a>

```typescript
public readonly products: string[];
```

- *Type:* string[]

Products to target with the actions. Available values: `bic`, `hot`, `ratelimit`, `securityLevel`, `uablock`, `waf`, `zonelockdown`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#products Ruleset#products}

---

##### `requestFields`<sup>Optional</sup> <a name="requestFields" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.requestFields"></a>

```typescript
public readonly requestFields: string[];
```

- *Type:* string[]

List of request headers to include as part of custom fields logging, in lowercase.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#request_fields Ruleset#request_fields}

---

##### `respectStrongEtags`<sup>Optional</sup> <a name="respectStrongEtags" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.respectStrongEtags"></a>

```typescript
public readonly respectStrongEtags: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Respect strong ETags.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#respect_strong_etags Ruleset#respect_strong_etags}

---

##### `response`<sup>Optional</sup> <a name="response" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.response"></a>

```typescript
public readonly response: IResolvable | RulesetRulesActionParametersResponse[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponse">RulesetRulesActionParametersResponse</a>[]

response block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#response Ruleset#response}

---

##### `responseFields`<sup>Optional</sup> <a name="responseFields" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.responseFields"></a>

```typescript
public readonly responseFields: string[];
```

- *Type:* string[]

List of response headers to include as part of custom fields logging, in lowercase.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#response_fields Ruleset#response_fields}

---

##### `rocketLoader`<sup>Optional</sup> <a name="rocketLoader" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.rocketLoader"></a>

```typescript
public readonly rocketLoader: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Turn on or off Cloudflare Rocket Loader in the Cloudflare Speed app.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#rocket_loader Ruleset#rocket_loader}

---

##### `rules`<sup>Optional</sup> <a name="rules" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.rules"></a>

```typescript
public readonly rules: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Map of managed WAF rule ID to comma-delimited string of ruleset rule IDs.

Example: `rules = { "efb7b8c949ac4650a09736fc376e9aee" = "5de7edfa648c4d6891dc3e7f84534ffa,e3a567afc347477d9702d9047e97d760" }`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#rules Ruleset#rules}

---

##### `ruleset`<sup>Optional</sup> <a name="ruleset" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.ruleset"></a>

```typescript
public readonly ruleset: string;
```

- *Type:* string

Which ruleset ID to target.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#ruleset Ruleset#ruleset}

---

##### `rulesets`<sup>Optional</sup> <a name="rulesets" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.rulesets"></a>

```typescript
public readonly rulesets: string[];
```

- *Type:* string[]

List of managed WAF rule IDs to target. Only valid when the `"action"` is set to skip.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#rulesets Ruleset#rulesets}

---

##### `securityLevel`<sup>Optional</sup> <a name="securityLevel" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.securityLevel"></a>

```typescript
public readonly securityLevel: string;
```

- *Type:* string

Control options for the Security Level feature from the Security app.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#security_level Ruleset#security_level}

---

##### `serverSideExcludes`<sup>Optional</sup> <a name="serverSideExcludes" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.serverSideExcludes"></a>

```typescript
public readonly serverSideExcludes: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Turn on or off the Server Side Excludes feature of the Cloudflare Scrape Shield app.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#server_side_excludes Ruleset#server_side_excludes}

---

##### `serveStale`<sup>Optional</sup> <a name="serveStale" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.serveStale"></a>

```typescript
public readonly serveStale: RulesetRulesActionParametersServeStale;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStale">RulesetRulesActionParametersServeStale</a>

serve_stale block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#serve_stale Ruleset#serve_stale}

---

##### `sni`<sup>Optional</sup> <a name="sni" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.sni"></a>

```typescript
public readonly sni: RulesetRulesActionParametersSni;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSni">RulesetRulesActionParametersSni</a>

sni block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#sni Ruleset#sni}

---

##### `ssl`<sup>Optional</sup> <a name="ssl" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.ssl"></a>

```typescript
public readonly ssl: string;
```

- *Type:* string

Control options for the SSL feature of the Edge Certificates tab in the Cloudflare SSL/TLS app.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#ssl Ruleset#ssl}

---

##### `statusCode`<sup>Optional</sup> <a name="statusCode" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.statusCode"></a>

```typescript
public readonly statusCode: number;
```

- *Type:* number

HTTP status code of the custom error response.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#status_code Ruleset#status_code}

---

##### `sxg`<sup>Optional</sup> <a name="sxg" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.sxg"></a>

```typescript
public readonly sxg: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Turn on or off the SXG feature.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#sxg Ruleset#sxg}

---

##### `uri`<sup>Optional</sup> <a name="uri" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.uri"></a>

```typescript
public readonly uri: RulesetRulesActionParametersUri;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUri">RulesetRulesActionParametersUri</a>

uri block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#uri Ruleset#uri}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

Version of the ruleset to deploy.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#version Ruleset#version}

---

### RulesetRulesActionParametersAutominify <a name="RulesetRulesActionParametersAutominify" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominify"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominify.Initializer"></a>

```typescript
import { ruleset } from '@cdktf/provider-cloudflare'

const rulesetRulesActionParametersAutominify: ruleset.RulesetRulesActionParametersAutominify = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominify.property.css">css</a></code> | <code>boolean \| cdktf.IResolvable</code> | SSL minification. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominify.property.html">html</a></code> | <code>boolean \| cdktf.IResolvable</code> | HTML minification. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominify.property.js">js</a></code> | <code>boolean \| cdktf.IResolvable</code> | JS minification. |

---

##### `css`<sup>Optional</sup> <a name="css" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominify.property.css"></a>

```typescript
public readonly css: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

SSL minification.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#css Ruleset#css}

---

##### `html`<sup>Optional</sup> <a name="html" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominify.property.html"></a>

```typescript
public readonly html: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

HTML minification.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#html Ruleset#html}

---

##### `js`<sup>Optional</sup> <a name="js" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominify.property.js"></a>

```typescript
public readonly js: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

JS minification.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#js Ruleset#js}

---

### RulesetRulesActionParametersBrowserTtl <a name="RulesetRulesActionParametersBrowserTtl" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtl.Initializer"></a>

```typescript
import { ruleset } from '@cdktf/provider-cloudflare'

const rulesetRulesActionParametersBrowserTtl: ruleset.RulesetRulesActionParametersBrowserTtl = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtl.property.mode">mode</a></code> | <code>string</code> | Mode of the browser TTL. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtl.property.default">default</a></code> | <code>number</code> | Default browser TTL. |

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtl.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

Mode of the browser TTL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#mode Ruleset#mode}

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtl.property.default"></a>

```typescript
public readonly default: number;
```

- *Type:* number

Default browser TTL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#default Ruleset#default}

---

### RulesetRulesActionParametersCacheKey <a name="RulesetRulesActionParametersCacheKey" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKey.Initializer"></a>

```typescript
import { ruleset } from '@cdktf/provider-cloudflare'

const rulesetRulesActionParametersCacheKey: ruleset.RulesetRulesActionParametersCacheKey = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKey.property.cacheByDeviceType">cacheByDeviceType</a></code> | <code>boolean \| cdktf.IResolvable</code> | Cache by device type. Conflicts with "custom_key.user.device_type". |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKey.property.cacheDeceptionArmor">cacheDeceptionArmor</a></code> | <code>boolean \| cdktf.IResolvable</code> | Cache deception armor. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKey.property.customKey">customKey</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKey">RulesetRulesActionParametersCacheKeyCustomKey</a></code> | custom_key block. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKey.property.ignoreQueryStringsOrder">ignoreQueryStringsOrder</a></code> | <code>boolean \| cdktf.IResolvable</code> | Ignore query strings order. |

---

##### `cacheByDeviceType`<sup>Optional</sup> <a name="cacheByDeviceType" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKey.property.cacheByDeviceType"></a>

```typescript
public readonly cacheByDeviceType: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Cache by device type. Conflicts with "custom_key.user.device_type".

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#cache_by_device_type Ruleset#cache_by_device_type}

---

##### `cacheDeceptionArmor`<sup>Optional</sup> <a name="cacheDeceptionArmor" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKey.property.cacheDeceptionArmor"></a>

```typescript
public readonly cacheDeceptionArmor: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Cache deception armor.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#cache_deception_armor Ruleset#cache_deception_armor}

---

##### `customKey`<sup>Optional</sup> <a name="customKey" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKey.property.customKey"></a>

```typescript
public readonly customKey: RulesetRulesActionParametersCacheKeyCustomKey;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKey">RulesetRulesActionParametersCacheKeyCustomKey</a>

custom_key block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#custom_key Ruleset#custom_key}

---

##### `ignoreQueryStringsOrder`<sup>Optional</sup> <a name="ignoreQueryStringsOrder" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKey.property.ignoreQueryStringsOrder"></a>

```typescript
public readonly ignoreQueryStringsOrder: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Ignore query strings order.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#ignore_query_strings_order Ruleset#ignore_query_strings_order}

---

### RulesetRulesActionParametersCacheKeyCustomKey <a name="RulesetRulesActionParametersCacheKeyCustomKey" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKey.Initializer"></a>

```typescript
import { ruleset } from '@cdktf/provider-cloudflare'

const rulesetRulesActionParametersCacheKeyCustomKey: ruleset.RulesetRulesActionParametersCacheKeyCustomKey = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKey.property.cookie">cookie</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookie">RulesetRulesActionParametersCacheKeyCustomKeyCookie</a></code> | cookie block. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKey.property.header">header</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeader">RulesetRulesActionParametersCacheKeyCustomKeyHeader</a></code> | header block. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKey.property.host">host</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHost">RulesetRulesActionParametersCacheKeyCustomKeyHost</a></code> | host block. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKey.property.queryString">queryString</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryString">RulesetRulesActionParametersCacheKeyCustomKeyQueryString</a></code> | query_string block. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKey.property.user">user</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUser">RulesetRulesActionParametersCacheKeyCustomKeyUser</a></code> | user block. |

---

##### `cookie`<sup>Optional</sup> <a name="cookie" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKey.property.cookie"></a>

```typescript
public readonly cookie: RulesetRulesActionParametersCacheKeyCustomKeyCookie;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookie">RulesetRulesActionParametersCacheKeyCustomKeyCookie</a>

cookie block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#cookie Ruleset#cookie}

---

##### `header`<sup>Optional</sup> <a name="header" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKey.property.header"></a>

```typescript
public readonly header: RulesetRulesActionParametersCacheKeyCustomKeyHeader;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeader">RulesetRulesActionParametersCacheKeyCustomKeyHeader</a>

header block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#header Ruleset#header}

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKey.property.host"></a>

```typescript
public readonly host: RulesetRulesActionParametersCacheKeyCustomKeyHost;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHost">RulesetRulesActionParametersCacheKeyCustomKeyHost</a>

host block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#host Ruleset#host}

---

##### `queryString`<sup>Optional</sup> <a name="queryString" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKey.property.queryString"></a>

```typescript
public readonly queryString: RulesetRulesActionParametersCacheKeyCustomKeyQueryString;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryString">RulesetRulesActionParametersCacheKeyCustomKeyQueryString</a>

query_string block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#query_string Ruleset#query_string}

---

##### `user`<sup>Optional</sup> <a name="user" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKey.property.user"></a>

```typescript
public readonly user: RulesetRulesActionParametersCacheKeyCustomKeyUser;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUser">RulesetRulesActionParametersCacheKeyCustomKeyUser</a>

user block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#user Ruleset#user}

---

### RulesetRulesActionParametersCacheKeyCustomKeyCookie <a name="RulesetRulesActionParametersCacheKeyCustomKeyCookie" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookie"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookie.Initializer"></a>

```typescript
import { ruleset } from '@cdktf/provider-cloudflare'

const rulesetRulesActionParametersCacheKeyCustomKeyCookie: ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookie = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookie.property.checkPresence">checkPresence</a></code> | <code>string[]</code> | List of cookies to check for presence in the custom key. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookie.property.include">include</a></code> | <code>string[]</code> | List of cookies to include in the custom key. |

---

##### `checkPresence`<sup>Optional</sup> <a name="checkPresence" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookie.property.checkPresence"></a>

```typescript
public readonly checkPresence: string[];
```

- *Type:* string[]

List of cookies to check for presence in the custom key.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#check_presence Ruleset#check_presence}

---

##### `include`<sup>Optional</sup> <a name="include" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookie.property.include"></a>

```typescript
public readonly include: string[];
```

- *Type:* string[]

List of cookies to include in the custom key.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#include Ruleset#include}

---

### RulesetRulesActionParametersCacheKeyCustomKeyHeader <a name="RulesetRulesActionParametersCacheKeyCustomKeyHeader" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeader.Initializer"></a>

```typescript
import { ruleset } from '@cdktf/provider-cloudflare'

const rulesetRulesActionParametersCacheKeyCustomKeyHeader: ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeader = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeader.property.checkPresence">checkPresence</a></code> | <code>string[]</code> | List of headers to check for presence in the custom key. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeader.property.excludeOrigin">excludeOrigin</a></code> | <code>boolean \| cdktf.IResolvable</code> | Exclude the origin header from the custom key. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeader.property.include">include</a></code> | <code>string[]</code> | List of headers to include in the custom key. |

---

##### `checkPresence`<sup>Optional</sup> <a name="checkPresence" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeader.property.checkPresence"></a>

```typescript
public readonly checkPresence: string[];
```

- *Type:* string[]

List of headers to check for presence in the custom key.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#check_presence Ruleset#check_presence}

---

##### `excludeOrigin`<sup>Optional</sup> <a name="excludeOrigin" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeader.property.excludeOrigin"></a>

```typescript
public readonly excludeOrigin: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Exclude the origin header from the custom key.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#exclude_origin Ruleset#exclude_origin}

---

##### `include`<sup>Optional</sup> <a name="include" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeader.property.include"></a>

```typescript
public readonly include: string[];
```

- *Type:* string[]

List of headers to include in the custom key.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#include Ruleset#include}

---

### RulesetRulesActionParametersCacheKeyCustomKeyHost <a name="RulesetRulesActionParametersCacheKeyCustomKeyHost" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHost"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHost.Initializer"></a>

```typescript
import { ruleset } from '@cdktf/provider-cloudflare'

const rulesetRulesActionParametersCacheKeyCustomKeyHost: ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHost = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHost.property.resolved">resolved</a></code> | <code>boolean \| cdktf.IResolvable</code> | Resolve hostname to IP address. |

---

##### `resolved`<sup>Optional</sup> <a name="resolved" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHost.property.resolved"></a>

```typescript
public readonly resolved: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Resolve hostname to IP address.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#resolved Ruleset#resolved}

---

### RulesetRulesActionParametersCacheKeyCustomKeyQueryString <a name="RulesetRulesActionParametersCacheKeyCustomKeyQueryString" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryString"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryString.Initializer"></a>

```typescript
import { ruleset } from '@cdktf/provider-cloudflare'

const rulesetRulesActionParametersCacheKeyCustomKeyQueryString: ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryString = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryString.property.exclude">exclude</a></code> | <code>string[]</code> | List of query string parameters to exclude from the custom key. Conflicts with "include". |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryString.property.include">include</a></code> | <code>string[]</code> | List of query string parameters to include in the custom key. Conflicts with "exclude". |

---

##### `exclude`<sup>Optional</sup> <a name="exclude" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryString.property.exclude"></a>

```typescript
public readonly exclude: string[];
```

- *Type:* string[]

List of query string parameters to exclude from the custom key. Conflicts with "include".

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#exclude Ruleset#exclude}

---

##### `include`<sup>Optional</sup> <a name="include" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryString.property.include"></a>

```typescript
public readonly include: string[];
```

- *Type:* string[]

List of query string parameters to include in the custom key. Conflicts with "exclude".

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#include Ruleset#include}

---

### RulesetRulesActionParametersCacheKeyCustomKeyUser <a name="RulesetRulesActionParametersCacheKeyCustomKeyUser" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUser"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUser.Initializer"></a>

```typescript
import { ruleset } from '@cdktf/provider-cloudflare'

const rulesetRulesActionParametersCacheKeyCustomKeyUser: ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUser = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUser.property.deviceType">deviceType</a></code> | <code>boolean \| cdktf.IResolvable</code> | Add device type to the custom key. Conflicts with "cache_key.cache_by_device_type". |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUser.property.geo">geo</a></code> | <code>boolean \| cdktf.IResolvable</code> | Add geo data to the custom key. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUser.property.lang">lang</a></code> | <code>boolean \| cdktf.IResolvable</code> | Add language data to the custom key. |

---

##### `deviceType`<sup>Optional</sup> <a name="deviceType" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUser.property.deviceType"></a>

```typescript
public readonly deviceType: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Add device type to the custom key. Conflicts with "cache_key.cache_by_device_type".

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#device_type Ruleset#device_type}

---

##### `geo`<sup>Optional</sup> <a name="geo" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUser.property.geo"></a>

```typescript
public readonly geo: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Add geo data to the custom key.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#geo Ruleset#geo}

---

##### `lang`<sup>Optional</sup> <a name="lang" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUser.property.lang"></a>

```typescript
public readonly lang: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Add language data to the custom key.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#lang Ruleset#lang}

---

### RulesetRulesActionParametersEdgeTtl <a name="RulesetRulesActionParametersEdgeTtl" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtl.Initializer"></a>

```typescript
import { ruleset } from '@cdktf/provider-cloudflare'

const rulesetRulesActionParametersEdgeTtl: ruleset.RulesetRulesActionParametersEdgeTtl = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtl.property.mode">mode</a></code> | <code>string</code> | Mode of the edge TTL. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtl.property.default">default</a></code> | <code>number</code> | Default edge TTL. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtl.property.statusCodeTtl">statusCodeTtl</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtl">RulesetRulesActionParametersEdgeTtlStatusCodeTtl</a>[]</code> | status_code_ttl block. |

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtl.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

Mode of the edge TTL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#mode Ruleset#mode}

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtl.property.default"></a>

```typescript
public readonly default: number;
```

- *Type:* number

Default edge TTL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#default Ruleset#default}

---

##### `statusCodeTtl`<sup>Optional</sup> <a name="statusCodeTtl" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtl.property.statusCodeTtl"></a>

```typescript
public readonly statusCodeTtl: IResolvable | RulesetRulesActionParametersEdgeTtlStatusCodeTtl[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtl">RulesetRulesActionParametersEdgeTtlStatusCodeTtl</a>[]

status_code_ttl block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#status_code_ttl Ruleset#status_code_ttl}

---

### RulesetRulesActionParametersEdgeTtlStatusCodeTtl <a name="RulesetRulesActionParametersEdgeTtlStatusCodeTtl" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtl.Initializer"></a>

```typescript
import { ruleset } from '@cdktf/provider-cloudflare'

const rulesetRulesActionParametersEdgeTtlStatusCodeTtl: ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtl = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtl.property.value">value</a></code> | <code>number</code> | Status code edge TTL value. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtl.property.statusCode">statusCode</a></code> | <code>number</code> | Status code for which the edge TTL is applied. Conflicts with "status_code_range". |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtl.property.statusCodeRange">statusCodeRange</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange">RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange</a>[]</code> | status_code_range block. |

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtl.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

Status code edge TTL value.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#value Ruleset#value}

---

##### `statusCode`<sup>Optional</sup> <a name="statusCode" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtl.property.statusCode"></a>

```typescript
public readonly statusCode: number;
```

- *Type:* number

Status code for which the edge TTL is applied. Conflicts with "status_code_range".

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#status_code Ruleset#status_code}

---

##### `statusCodeRange`<sup>Optional</sup> <a name="statusCodeRange" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtl.property.statusCodeRange"></a>

```typescript
public readonly statusCodeRange: IResolvable | RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange">RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange</a>[]

status_code_range block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#status_code_range Ruleset#status_code_range}

---

### RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange <a name="RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange.Initializer"></a>

```typescript
import { ruleset } from '@cdktf/provider-cloudflare'

const rulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange: ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange.property.from">from</a></code> | <code>number</code> | From status code. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange.property.to">to</a></code> | <code>number</code> | To status code. |

---

##### `from`<sup>Optional</sup> <a name="from" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange.property.from"></a>

```typescript
public readonly from: number;
```

- *Type:* number

From status code.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#from Ruleset#from}

---

##### `to`<sup>Optional</sup> <a name="to" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange.property.to"></a>

```typescript
public readonly to: number;
```

- *Type:* number

To status code.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#to Ruleset#to}

---

### RulesetRulesActionParametersFromList <a name="RulesetRulesActionParametersFromList" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromList"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromList.Initializer"></a>

```typescript
import { ruleset } from '@cdktf/provider-cloudflare'

const rulesetRulesActionParametersFromList: ruleset.RulesetRulesActionParametersFromList = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromList.property.key">key</a></code> | <code>string</code> | Expression to use for the list lookup. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromList.property.name">name</a></code> | <code>string</code> | Name of the list. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromList.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Expression to use for the list lookup.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#key Ruleset#key}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromList.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the list.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#name Ruleset#name}

---

### RulesetRulesActionParametersFromValue <a name="RulesetRulesActionParametersFromValue" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValue"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValue.Initializer"></a>

```typescript
import { ruleset } from '@cdktf/provider-cloudflare'

const rulesetRulesActionParametersFromValue: ruleset.RulesetRulesActionParametersFromValue = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValue.property.preserveQueryString">preserveQueryString</a></code> | <code>boolean \| cdktf.IResolvable</code> | Preserve query string for redirect URL. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValue.property.statusCode">statusCode</a></code> | <code>number</code> | Status code for redirect. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValue.property.targetUrl">targetUrl</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrl">RulesetRulesActionParametersFromValueTargetUrl</a></code> | target_url block. |

---

##### `preserveQueryString`<sup>Optional</sup> <a name="preserveQueryString" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValue.property.preserveQueryString"></a>

```typescript
public readonly preserveQueryString: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Preserve query string for redirect URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#preserve_query_string Ruleset#preserve_query_string}

---

##### `statusCode`<sup>Optional</sup> <a name="statusCode" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValue.property.statusCode"></a>

```typescript
public readonly statusCode: number;
```

- *Type:* number

Status code for redirect.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#status_code Ruleset#status_code}

---

##### `targetUrl`<sup>Optional</sup> <a name="targetUrl" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValue.property.targetUrl"></a>

```typescript
public readonly targetUrl: RulesetRulesActionParametersFromValueTargetUrl;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrl">RulesetRulesActionParametersFromValueTargetUrl</a>

target_url block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#target_url Ruleset#target_url}

---

### RulesetRulesActionParametersFromValueTargetUrl <a name="RulesetRulesActionParametersFromValueTargetUrl" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrl.Initializer"></a>

```typescript
import { ruleset } from '@cdktf/provider-cloudflare'

const rulesetRulesActionParametersFromValueTargetUrl: ruleset.RulesetRulesActionParametersFromValueTargetUrl = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrl.property.expression">expression</a></code> | <code>string</code> | Use a value dynamically determined by the Firewall Rules expression language based on Wireshark display filters. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrl.property.value">value</a></code> | <code>string</code> | Static value to provide as the HTTP request header value. Conflicts with `"expression"`. |

---

##### `expression`<sup>Optional</sup> <a name="expression" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrl.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

Use a value dynamically determined by the Firewall Rules expression language based on Wireshark display filters.

Refer to the [Firewall Rules language](https://developers.cloudflare.com/firewall/cf-firewall-language) documentation for all available fields, operators, and functions. Conflicts with `"value"`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#expression Ruleset#expression}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrl.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Static value to provide as the HTTP request header value. Conflicts with `"expression"`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#value Ruleset#value}

---

### RulesetRulesActionParametersHeaders <a name="RulesetRulesActionParametersHeaders" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeaders.Initializer"></a>

```typescript
import { ruleset } from '@cdktf/provider-cloudflare'

const rulesetRulesActionParametersHeaders: ruleset.RulesetRulesActionParametersHeaders = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeaders.property.expression">expression</a></code> | <code>string</code> | Use a value dynamically determined by the Firewall Rules expression language based on Wireshark display filters. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeaders.property.name">name</a></code> | <code>string</code> | Name of the HTTP request header to target. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeaders.property.operation">operation</a></code> | <code>string</code> | Action to perform on the HTTP request header. Available values: `remove`, `set`. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeaders.property.value">value</a></code> | <code>string</code> | Static value to provide as the HTTP request header value. Conflicts with `"expression"`. |

---

##### `expression`<sup>Optional</sup> <a name="expression" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeaders.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

Use a value dynamically determined by the Firewall Rules expression language based on Wireshark display filters.

Refer to the [Firewall Rules language](https://developers.cloudflare.com/firewall/cf-firewall-language) documentation for all available fields, operators, and functions. Conflicts with `"value"`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#expression Ruleset#expression}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeaders.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the HTTP request header to target.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#name Ruleset#name}

---

##### `operation`<sup>Optional</sup> <a name="operation" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeaders.property.operation"></a>

```typescript
public readonly operation: string;
```

- *Type:* string

Action to perform on the HTTP request header. Available values: `remove`, `set`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#operation Ruleset#operation}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeaders.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Static value to provide as the HTTP request header value. Conflicts with `"expression"`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#value Ruleset#value}

---

### RulesetRulesActionParametersMatchedData <a name="RulesetRulesActionParametersMatchedData" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedData"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedData.Initializer"></a>

```typescript
import { ruleset } from '@cdktf/provider-cloudflare'

const rulesetRulesActionParametersMatchedData: ruleset.RulesetRulesActionParametersMatchedData = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedData.property.publicKey">publicKey</a></code> | <code>string</code> | Public key to use within WAF Ruleset payload logging to view the HTTP request parameters. |

---

##### `publicKey`<sup>Optional</sup> <a name="publicKey" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedData.property.publicKey"></a>

```typescript
public readonly publicKey: string;
```

- *Type:* string

Public key to use within WAF Ruleset payload logging to view the HTTP request parameters.

You can generate a public key [using the `matched-data-cli` command-line tool](https://developers.cloudflare.com/waf/managed-rulesets/payload-logging/command-line/generate-key-pair) or [in the Cloudflare dashboard](https://developers.cloudflare.com/waf/managed-rulesets/payload-logging/configure).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#public_key Ruleset#public_key}

---

### RulesetRulesActionParametersOrigin <a name="RulesetRulesActionParametersOrigin" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOrigin"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOrigin.Initializer"></a>

```typescript
import { ruleset } from '@cdktf/provider-cloudflare'

const rulesetRulesActionParametersOrigin: ruleset.RulesetRulesActionParametersOrigin = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOrigin.property.host">host</a></code> | <code>string</code> | Origin Hostname where request is sent. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOrigin.property.port">port</a></code> | <code>number</code> | Origin Port where request is sent. |

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOrigin.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

Origin Hostname where request is sent.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#host Ruleset#host}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOrigin.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

Origin Port where request is sent.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#port Ruleset#port}

---

### RulesetRulesActionParametersOverrides <a name="RulesetRulesActionParametersOverrides" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverrides.Initializer"></a>

```typescript
import { ruleset } from '@cdktf/provider-cloudflare'

const rulesetRulesActionParametersOverrides: ruleset.RulesetRulesActionParametersOverrides = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverrides.property.action">action</a></code> | <code>string</code> | Action to perform in the rule-level override. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverrides.property.categories">categories</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategories">RulesetRulesActionParametersOverridesCategories</a>[]</code> | categories block. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverrides.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Defines if the current ruleset-level override enables or disables the ruleset. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverrides.property.rules">rules</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRules">RulesetRulesActionParametersOverridesRules</a>[]</code> | rules block. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverrides.property.sensitivityLevel">sensitivityLevel</a></code> | <code>string</code> | Sensitivity level to override for all ruleset rules. Available values: `default`, `medium`, `low`, `eoff`. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverrides.property.status">status</a></code> | <code>string</code> | Defines if the current ruleset-level override enables or disables the ruleset. Available values: `enabled`, `disabled`. Defaults to `""`. |

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverrides.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

Action to perform in the rule-level override.

Available values: `block`, `challenge`, `ddos_dynamic`, `execute`, `force_connection_close`, `js_challenge`, `log`, `log_custom_field`, `managed_challenge`, `redirect`, `rewrite`, `route`, `score`, `set_cache_settings`, `set_config`, `serve_error`, `skip`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#action Ruleset#action}

---

##### `categories`<sup>Optional</sup> <a name="categories" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverrides.property.categories"></a>

```typescript
public readonly categories: IResolvable | RulesetRulesActionParametersOverridesCategories[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategories">RulesetRulesActionParametersOverridesCategories</a>[]

categories block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#categories Ruleset#categories}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverrides.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Defines if the current ruleset-level override enables or disables the ruleset.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#enabled Ruleset#enabled}

---

##### `rules`<sup>Optional</sup> <a name="rules" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverrides.property.rules"></a>

```typescript
public readonly rules: IResolvable | RulesetRulesActionParametersOverridesRules[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRules">RulesetRulesActionParametersOverridesRules</a>[]

rules block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#rules Ruleset#rules}

---

##### `sensitivityLevel`<sup>Optional</sup> <a name="sensitivityLevel" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverrides.property.sensitivityLevel"></a>

```typescript
public readonly sensitivityLevel: string;
```

- *Type:* string

Sensitivity level to override for all ruleset rules. Available values: `default`, `medium`, `low`, `eoff`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#sensitivity_level Ruleset#sensitivity_level}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverrides.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Defines if the current ruleset-level override enables or disables the ruleset. Available values: `enabled`, `disabled`. Defaults to `""`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#status Ruleset#status}

---

### RulesetRulesActionParametersOverridesCategories <a name="RulesetRulesActionParametersOverridesCategories" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategories"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategories.Initializer"></a>

```typescript
import { ruleset } from '@cdktf/provider-cloudflare'

const rulesetRulesActionParametersOverridesCategories: ruleset.RulesetRulesActionParametersOverridesCategories = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategories.property.action">action</a></code> | <code>string</code> | Action to perform in the tag-level override. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategories.property.category">category</a></code> | <code>string</code> | Tag name to apply the ruleset rule override to. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategories.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Defines if the current tag-level override enables or disables the ruleset rules with the specified tag. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategories.property.status">status</a></code> | <code>string</code> | Defines if the current tag-level override enables or disables the ruleset rules with the specified tag. |

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategories.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

Action to perform in the tag-level override.

Available values: `block`, `challenge`, `ddos_dynamic`, `execute`, `force_connection_close`, `js_challenge`, `log`, `log_custom_field`, `managed_challenge`, `redirect`, `rewrite`, `route`, `score`, `set_cache_settings`, `set_config`, `serve_error`, `skip`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#action Ruleset#action}

---

##### `category`<sup>Optional</sup> <a name="category" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategories.property.category"></a>

```typescript
public readonly category: string;
```

- *Type:* string

Tag name to apply the ruleset rule override to.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#category Ruleset#category}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategories.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Defines if the current tag-level override enables or disables the ruleset rules with the specified tag.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#enabled Ruleset#enabled}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategories.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Defines if the current tag-level override enables or disables the ruleset rules with the specified tag.

Available values: `enabled`, `disabled`. Defaults to `""`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#status Ruleset#status}

---

### RulesetRulesActionParametersOverridesRules <a name="RulesetRulesActionParametersOverridesRules" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRules.Initializer"></a>

```typescript
import { ruleset } from '@cdktf/provider-cloudflare'

const rulesetRulesActionParametersOverridesRules: ruleset.RulesetRulesActionParametersOverridesRules = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRules.property.action">action</a></code> | <code>string</code> | Action to perform in the rule-level override. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRules.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Defines if the current rule-level override enables or disables the rule. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRules.property.id">id</a></code> | <code>string</code> | Rule ID to apply the override to. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRules.property.scoreThreshold">scoreThreshold</a></code> | <code>number</code> | Anomaly score threshold to apply in the ruleset rule override. Only applicable to modsecurity-based rulesets. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRules.property.sensitivityLevel">sensitivityLevel</a></code> | <code>string</code> | Sensitivity level for a ruleset rule override. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRules.property.status">status</a></code> | <code>string</code> | Defines if the current rule-level override enables or disables the rule. Available values: `enabled`, `disabled`. Defaults to `""`. |

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRules.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

Action to perform in the rule-level override.

Available values: `block`, `challenge`, `ddos_dynamic`, `execute`, `force_connection_close`, `js_challenge`, `log`, `log_custom_field`, `managed_challenge`, `redirect`, `rewrite`, `route`, `score`, `set_cache_settings`, `set_config`, `serve_error`, `skip`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#action Ruleset#action}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRules.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Defines if the current rule-level override enables or disables the rule.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#enabled Ruleset#enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRules.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Rule ID to apply the override to.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#id Ruleset#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `scoreThreshold`<sup>Optional</sup> <a name="scoreThreshold" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRules.property.scoreThreshold"></a>

```typescript
public readonly scoreThreshold: number;
```

- *Type:* number

Anomaly score threshold to apply in the ruleset rule override. Only applicable to modsecurity-based rulesets.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#score_threshold Ruleset#score_threshold}

---

##### `sensitivityLevel`<sup>Optional</sup> <a name="sensitivityLevel" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRules.property.sensitivityLevel"></a>

```typescript
public readonly sensitivityLevel: string;
```

- *Type:* string

Sensitivity level for a ruleset rule override.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#sensitivity_level Ruleset#sensitivity_level}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRules.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Defines if the current rule-level override enables or disables the rule. Available values: `enabled`, `disabled`. Defaults to `""`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#status Ruleset#status}

---

### RulesetRulesActionParametersResponse <a name="RulesetRulesActionParametersResponse" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponse"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponse.Initializer"></a>

```typescript
import { ruleset } from '@cdktf/provider-cloudflare'

const rulesetRulesActionParametersResponse: ruleset.RulesetRulesActionParametersResponse = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponse.property.content">content</a></code> | <code>string</code> | Body content to include in the response. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponse.property.contentType">contentType</a></code> | <code>string</code> | HTTP content type to send in the response. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponse.property.statusCode">statusCode</a></code> | <code>number</code> | HTTP status code to send in the response. |

---

##### `content`<sup>Optional</sup> <a name="content" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponse.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

Body content to include in the response.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#content Ruleset#content}

---

##### `contentType`<sup>Optional</sup> <a name="contentType" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponse.property.contentType"></a>

```typescript
public readonly contentType: string;
```

- *Type:* string

HTTP content type to send in the response.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#content_type Ruleset#content_type}

---

##### `statusCode`<sup>Optional</sup> <a name="statusCode" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponse.property.statusCode"></a>

```typescript
public readonly statusCode: number;
```

- *Type:* number

HTTP status code to send in the response.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#status_code Ruleset#status_code}

---

### RulesetRulesActionParametersServeStale <a name="RulesetRulesActionParametersServeStale" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStale"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStale.Initializer"></a>

```typescript
import { ruleset } from '@cdktf/provider-cloudflare'

const rulesetRulesActionParametersServeStale: ruleset.RulesetRulesActionParametersServeStale = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStale.property.disableStaleWhileUpdating">disableStaleWhileUpdating</a></code> | <code>boolean \| cdktf.IResolvable</code> | Disable stale while updating. |

---

##### `disableStaleWhileUpdating`<sup>Optional</sup> <a name="disableStaleWhileUpdating" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStale.property.disableStaleWhileUpdating"></a>

```typescript
public readonly disableStaleWhileUpdating: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Disable stale while updating.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#disable_stale_while_updating Ruleset#disable_stale_while_updating}

---

### RulesetRulesActionParametersSni <a name="RulesetRulesActionParametersSni" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSni"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSni.Initializer"></a>

```typescript
import { ruleset } from '@cdktf/provider-cloudflare'

const rulesetRulesActionParametersSni: ruleset.RulesetRulesActionParametersSni = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSni.property.value">value</a></code> | <code>string</code> | Value to define for SNI. |

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSni.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Value to define for SNI.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#value Ruleset#value}

---

### RulesetRulesActionParametersUri <a name="RulesetRulesActionParametersUri" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUri"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUri.Initializer"></a>

```typescript
import { ruleset } from '@cdktf/provider-cloudflare'

const rulesetRulesActionParametersUri: ruleset.RulesetRulesActionParametersUri = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUri.property.origin">origin</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#origin Ruleset#origin}. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUri.property.path">path</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPath">RulesetRulesActionParametersUriPath</a></code> | path block. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUri.property.query">query</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQuery">RulesetRulesActionParametersUriQuery</a></code> | query block. |

---

##### `origin`<sup>Optional</sup> <a name="origin" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUri.property.origin"></a>

```typescript
public readonly origin: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#origin Ruleset#origin}.

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUri.property.path"></a>

```typescript
public readonly path: RulesetRulesActionParametersUriPath;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPath">RulesetRulesActionParametersUriPath</a>

path block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#path Ruleset#path}

---

##### `query`<sup>Optional</sup> <a name="query" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUri.property.query"></a>

```typescript
public readonly query: RulesetRulesActionParametersUriQuery;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQuery">RulesetRulesActionParametersUriQuery</a>

query block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#query Ruleset#query}

---

### RulesetRulesActionParametersUriPath <a name="RulesetRulesActionParametersUriPath" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPath"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPath.Initializer"></a>

```typescript
import { ruleset } from '@cdktf/provider-cloudflare'

const rulesetRulesActionParametersUriPath: ruleset.RulesetRulesActionParametersUriPath = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPath.property.expression">expression</a></code> | <code>string</code> | Expression that defines the updated (dynamic) value of the URI path or query string component. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPath.property.value">value</a></code> | <code>string</code> | Static string value of the updated URI path or query string component. |

---

##### `expression`<sup>Optional</sup> <a name="expression" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPath.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

Expression that defines the updated (dynamic) value of the URI path or query string component.

Uses the Firewall Rules expression language based on Wireshark display filters. Refer to the [Firewall Rules language](https://developers.cloudflare.com/firewall/cf-firewall-language) documentation for all available fields, operators, and functions.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#expression Ruleset#expression}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPath.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Static string value of the updated URI path or query string component.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#value Ruleset#value}

---

### RulesetRulesActionParametersUriQuery <a name="RulesetRulesActionParametersUriQuery" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQuery"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQuery.Initializer"></a>

```typescript
import { ruleset } from '@cdktf/provider-cloudflare'

const rulesetRulesActionParametersUriQuery: ruleset.RulesetRulesActionParametersUriQuery = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQuery.property.expression">expression</a></code> | <code>string</code> | Expression that defines the updated (dynamic) value of the URI path or query string component. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQuery.property.value">value</a></code> | <code>string</code> | Static string value of the updated URI path or query string component. |

---

##### `expression`<sup>Optional</sup> <a name="expression" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQuery.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

Expression that defines the updated (dynamic) value of the URI path or query string component.

Uses the Firewall Rules expression language based on Wireshark display filters. Refer to the [Firewall Rules language](https://developers.cloudflare.com/firewall/cf-firewall-language) documentation for all available fields, operators, and functions.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#expression Ruleset#expression}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQuery.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Static string value of the updated URI path or query string component.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#value Ruleset#value}

---

### RulesetRulesExposedCredentialCheck <a name="RulesetRulesExposedCredentialCheck" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheck.Initializer"></a>

```typescript
import { ruleset } from '@cdktf/provider-cloudflare'

const rulesetRulesExposedCredentialCheck: ruleset.RulesetRulesExposedCredentialCheck = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheck.property.passwordExpression">passwordExpression</a></code> | <code>string</code> | Firewall Rules expression language based on Wireshark display filters for where to check for the "password" value. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheck.property.usernameExpression">usernameExpression</a></code> | <code>string</code> | Firewall Rules expression language based on Wireshark display filters for where to check for the "username" value. |

---

##### `passwordExpression`<sup>Optional</sup> <a name="passwordExpression" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheck.property.passwordExpression"></a>

```typescript
public readonly passwordExpression: string;
```

- *Type:* string

Firewall Rules expression language based on Wireshark display filters for where to check for the "password" value.

Refer to the [Firewall Rules language](https://developers.cloudflare.com/firewall/cf-firewall-language).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#password_expression Ruleset#password_expression}

---

##### `usernameExpression`<sup>Optional</sup> <a name="usernameExpression" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheck.property.usernameExpression"></a>

```typescript
public readonly usernameExpression: string;
```

- *Type:* string

Firewall Rules expression language based on Wireshark display filters for where to check for the "username" value.

Refer to the [Firewall Rules language](https://developers.cloudflare.com/firewall/cf-firewall-language).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#username_expression Ruleset#username_expression}

---

### RulesetRulesLogging <a name="RulesetRulesLogging" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesLogging"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesLogging.Initializer"></a>

```typescript
import { ruleset } from '@cdktf/provider-cloudflare'

const rulesetRulesLogging: ruleset.RulesetRulesLogging = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesLogging.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Override the default logging behavior when a rule is matched. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesLogging.property.status">status</a></code> | <code>string</code> | Override the default logging behavior when a rule is matched. Available values: `enabled`, `disabled`. Defaults to `""`. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesLogging.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Override the default logging behavior when a rule is matched.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#enabled Ruleset#enabled}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesLogging.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Override the default logging behavior when a rule is matched. Available values: `enabled`, `disabled`. Defaults to `""`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#status Ruleset#status}

---

### RulesetRulesRatelimit <a name="RulesetRulesRatelimit" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimit"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimit.Initializer"></a>

```typescript
import { ruleset } from '@cdktf/provider-cloudflare'

const rulesetRulesRatelimit: ruleset.RulesetRulesRatelimit = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimit.property.characteristics">characteristics</a></code> | <code>string[]</code> | List of parameters that define how Cloudflare tracks the request rate for this rule. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimit.property.countingExpression">countingExpression</a></code> | <code>string</code> | Criteria for counting HTTP requests to trigger the Rate Limiting action. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimit.property.mitigationTimeout">mitigationTimeout</a></code> | <code>number</code> | Once the request rate is reached, the Rate Limiting rule blocks further requests for the period of time defined in this field. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimit.property.period">period</a></code> | <code>number</code> | The period of time to consider (in seconds) when evaluating the request rate. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimit.property.requestsPerPeriod">requestsPerPeriod</a></code> | <code>number</code> | The number of requests over the period of time that will trigger the Rate Limiting rule. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimit.property.requestsToOrigin">requestsToOrigin</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to include requests to origin within the Rate Limiting count. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimit.property.scorePerPeriod">scorePerPeriod</a></code> | <code>number</code> | The maximum aggregate score over the period of time that will trigger Rate Limiting rule. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimit.property.scoreResponseHeaderName">scoreResponseHeaderName</a></code> | <code>string</code> | Name of HTTP header in the response, set by the origin server, with the score for the current request. |

---

##### `characteristics`<sup>Optional</sup> <a name="characteristics" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimit.property.characteristics"></a>

```typescript
public readonly characteristics: string[];
```

- *Type:* string[]

List of parameters that define how Cloudflare tracks the request rate for this rule.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#characteristics Ruleset#characteristics}

---

##### `countingExpression`<sup>Optional</sup> <a name="countingExpression" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimit.property.countingExpression"></a>

```typescript
public readonly countingExpression: string;
```

- *Type:* string

Criteria for counting HTTP requests to trigger the Rate Limiting action.

Uses the Firewall Rules expression language based on Wireshark display filters. Refer to the [Firewall Rules language](https://developers.cloudflare.com/firewall/cf-firewall-language) documentation for all available fields, operators, and functions.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#counting_expression Ruleset#counting_expression}

---

##### `mitigationTimeout`<sup>Optional</sup> <a name="mitigationTimeout" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimit.property.mitigationTimeout"></a>

```typescript
public readonly mitigationTimeout: number;
```

- *Type:* number

Once the request rate is reached, the Rate Limiting rule blocks further requests for the period of time defined in this field.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#mitigation_timeout Ruleset#mitigation_timeout}

---

##### `period`<sup>Optional</sup> <a name="period" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimit.property.period"></a>

```typescript
public readonly period: number;
```

- *Type:* number

The period of time to consider (in seconds) when evaluating the request rate.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#period Ruleset#period}

---

##### `requestsPerPeriod`<sup>Optional</sup> <a name="requestsPerPeriod" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimit.property.requestsPerPeriod"></a>

```typescript
public readonly requestsPerPeriod: number;
```

- *Type:* number

The number of requests over the period of time that will trigger the Rate Limiting rule.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#requests_per_period Ruleset#requests_per_period}

---

##### `requestsToOrigin`<sup>Optional</sup> <a name="requestsToOrigin" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimit.property.requestsToOrigin"></a>

```typescript
public readonly requestsToOrigin: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to include requests to origin within the Rate Limiting count.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#requests_to_origin Ruleset#requests_to_origin}

---

##### `scorePerPeriod`<sup>Optional</sup> <a name="scorePerPeriod" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimit.property.scorePerPeriod"></a>

```typescript
public readonly scorePerPeriod: number;
```

- *Type:* number

The maximum aggregate score over the period of time that will trigger Rate Limiting rule.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#score_per_period Ruleset#score_per_period}

---

##### `scoreResponseHeaderName`<sup>Optional</sup> <a name="scoreResponseHeaderName" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimit.property.scoreResponseHeaderName"></a>

```typescript
public readonly scoreResponseHeaderName: string;
```

- *Type:* string

Name of HTTP header in the response, set by the origin server, with the score for the current request.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#score_response_header_name Ruleset#score_response_header_name}

---

## Classes <a name="Classes" id="Classes"></a>

### RulesetRulesActionParametersAutominifyList <a name="RulesetRulesActionParametersAutominifyList" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyList.Initializer"></a>

```typescript
import { ruleset } from '@cdktf/provider-cloudflare'

new ruleset.RulesetRulesActionParametersAutominifyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyList.get"></a>

```typescript
public get(index: number): RulesetRulesActionParametersAutominifyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominify">RulesetRulesActionParametersAutominify</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RulesetRulesActionParametersAutominify[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominify">RulesetRulesActionParametersAutominify</a>[]

---


### RulesetRulesActionParametersAutominifyOutputReference <a name="RulesetRulesActionParametersAutominifyOutputReference" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.Initializer"></a>

```typescript
import { ruleset } from '@cdktf/provider-cloudflare'

new ruleset.RulesetRulesActionParametersAutominifyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.resetCss">resetCss</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.resetHtml">resetHtml</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.resetJs">resetJs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCss` <a name="resetCss" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.resetCss"></a>

```typescript
public resetCss(): void
```

##### `resetHtml` <a name="resetHtml" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.resetHtml"></a>

```typescript
public resetHtml(): void
```

##### `resetJs` <a name="resetJs" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.resetJs"></a>

```typescript
public resetJs(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.property.cssInput">cssInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.property.htmlInput">htmlInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.property.jsInput">jsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.property.css">css</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.property.html">html</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.property.js">js</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominify">RulesetRulesActionParametersAutominify</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cssInput`<sup>Optional</sup> <a name="cssInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.property.cssInput"></a>

```typescript
public readonly cssInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `htmlInput`<sup>Optional</sup> <a name="htmlInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.property.htmlInput"></a>

```typescript
public readonly htmlInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `jsInput`<sup>Optional</sup> <a name="jsInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.property.jsInput"></a>

```typescript
public readonly jsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `css`<sup>Required</sup> <a name="css" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.property.css"></a>

```typescript
public readonly css: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `html`<sup>Required</sup> <a name="html" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.property.html"></a>

```typescript
public readonly html: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `js`<sup>Required</sup> <a name="js" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.property.js"></a>

```typescript
public readonly js: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: RulesetRulesActionParametersAutominify | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominify">RulesetRulesActionParametersAutominify</a> | cdktf.IResolvable

---


### RulesetRulesActionParametersBrowserTtlOutputReference <a name="RulesetRulesActionParametersBrowserTtlOutputReference" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.Initializer"></a>

```typescript
import { ruleset } from '@cdktf/provider-cloudflare'

new ruleset.RulesetRulesActionParametersBrowserTtlOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.resetDefault">resetDefault</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDefault` <a name="resetDefault" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.resetDefault"></a>

```typescript
public resetDefault(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.property.defaultInput">defaultInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.property.modeInput">modeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.property.default">default</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtl">RulesetRulesActionParametersBrowserTtl</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `defaultInput`<sup>Optional</sup> <a name="defaultInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.property.defaultInput"></a>

```typescript
public readonly defaultInput: number;
```

- *Type:* number

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.property.modeInput"></a>

```typescript
public readonly modeInput: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.property.default"></a>

```typescript
public readonly default: number;
```

- *Type:* number

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: RulesetRulesActionParametersBrowserTtl;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtl">RulesetRulesActionParametersBrowserTtl</a>

---


### RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference <a name="RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.Initializer"></a>

```typescript
import { ruleset } from '@cdktf/provider-cloudflare'

new ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.resetCheckPresence">resetCheckPresence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.resetInclude">resetInclude</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCheckPresence` <a name="resetCheckPresence" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.resetCheckPresence"></a>

```typescript
public resetCheckPresence(): void
```

##### `resetInclude` <a name="resetInclude" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.resetInclude"></a>

```typescript
public resetInclude(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.property.checkPresenceInput">checkPresenceInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.property.includeInput">includeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.property.checkPresence">checkPresence</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.property.include">include</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookie">RulesetRulesActionParametersCacheKeyCustomKeyCookie</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `checkPresenceInput`<sup>Optional</sup> <a name="checkPresenceInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.property.checkPresenceInput"></a>

```typescript
public readonly checkPresenceInput: string[];
```

- *Type:* string[]

---

##### `includeInput`<sup>Optional</sup> <a name="includeInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.property.includeInput"></a>

```typescript
public readonly includeInput: string[];
```

- *Type:* string[]

---

##### `checkPresence`<sup>Required</sup> <a name="checkPresence" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.property.checkPresence"></a>

```typescript
public readonly checkPresence: string[];
```

- *Type:* string[]

---

##### `include`<sup>Required</sup> <a name="include" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.property.include"></a>

```typescript
public readonly include: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: RulesetRulesActionParametersCacheKeyCustomKeyCookie;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookie">RulesetRulesActionParametersCacheKeyCustomKeyCookie</a>

---


### RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference <a name="RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.Initializer"></a>

```typescript
import { ruleset } from '@cdktf/provider-cloudflare'

new ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.resetCheckPresence">resetCheckPresence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.resetExcludeOrigin">resetExcludeOrigin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.resetInclude">resetInclude</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCheckPresence` <a name="resetCheckPresence" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.resetCheckPresence"></a>

```typescript
public resetCheckPresence(): void
```

##### `resetExcludeOrigin` <a name="resetExcludeOrigin" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.resetExcludeOrigin"></a>

```typescript
public resetExcludeOrigin(): void
```

##### `resetInclude` <a name="resetInclude" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.resetInclude"></a>

```typescript
public resetInclude(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.property.checkPresenceInput">checkPresenceInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.property.excludeOriginInput">excludeOriginInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.property.includeInput">includeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.property.checkPresence">checkPresence</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.property.excludeOrigin">excludeOrigin</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.property.include">include</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeader">RulesetRulesActionParametersCacheKeyCustomKeyHeader</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `checkPresenceInput`<sup>Optional</sup> <a name="checkPresenceInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.property.checkPresenceInput"></a>

```typescript
public readonly checkPresenceInput: string[];
```

- *Type:* string[]

---

##### `excludeOriginInput`<sup>Optional</sup> <a name="excludeOriginInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.property.excludeOriginInput"></a>

```typescript
public readonly excludeOriginInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `includeInput`<sup>Optional</sup> <a name="includeInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.property.includeInput"></a>

```typescript
public readonly includeInput: string[];
```

- *Type:* string[]

---

##### `checkPresence`<sup>Required</sup> <a name="checkPresence" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.property.checkPresence"></a>

```typescript
public readonly checkPresence: string[];
```

- *Type:* string[]

---

##### `excludeOrigin`<sup>Required</sup> <a name="excludeOrigin" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.property.excludeOrigin"></a>

```typescript
public readonly excludeOrigin: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `include`<sup>Required</sup> <a name="include" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.property.include"></a>

```typescript
public readonly include: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: RulesetRulesActionParametersCacheKeyCustomKeyHeader;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeader">RulesetRulesActionParametersCacheKeyCustomKeyHeader</a>

---


### RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference <a name="RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.Initializer"></a>

```typescript
import { ruleset } from '@cdktf/provider-cloudflare'

new ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.resetResolved">resetResolved</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetResolved` <a name="resetResolved" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.resetResolved"></a>

```typescript
public resetResolved(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.property.resolvedInput">resolvedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.property.resolved">resolved</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHost">RulesetRulesActionParametersCacheKeyCustomKeyHost</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `resolvedInput`<sup>Optional</sup> <a name="resolvedInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.property.resolvedInput"></a>

```typescript
public readonly resolvedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `resolved`<sup>Required</sup> <a name="resolved" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.property.resolved"></a>

```typescript
public readonly resolved: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: RulesetRulesActionParametersCacheKeyCustomKeyHost;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHost">RulesetRulesActionParametersCacheKeyCustomKeyHost</a>

---


### RulesetRulesActionParametersCacheKeyCustomKeyOutputReference <a name="RulesetRulesActionParametersCacheKeyCustomKeyOutputReference" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.Initializer"></a>

```typescript
import { ruleset } from '@cdktf/provider-cloudflare'

new ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.putCookie">putCookie</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.putHeader">putHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.putHost">putHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.putQueryString">putQueryString</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.putUser">putUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.resetCookie">resetCookie</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.resetHeader">resetHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.resetHost">resetHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.resetQueryString">resetQueryString</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.resetUser">resetUser</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCookie` <a name="putCookie" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.putCookie"></a>

```typescript
public putCookie(value: RulesetRulesActionParametersCacheKeyCustomKeyCookie): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.putCookie.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookie">RulesetRulesActionParametersCacheKeyCustomKeyCookie</a>

---

##### `putHeader` <a name="putHeader" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.putHeader"></a>

```typescript
public putHeader(value: RulesetRulesActionParametersCacheKeyCustomKeyHeader): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.putHeader.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeader">RulesetRulesActionParametersCacheKeyCustomKeyHeader</a>

---

##### `putHost` <a name="putHost" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.putHost"></a>

```typescript
public putHost(value: RulesetRulesActionParametersCacheKeyCustomKeyHost): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.putHost.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHost">RulesetRulesActionParametersCacheKeyCustomKeyHost</a>

---

##### `putQueryString` <a name="putQueryString" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.putQueryString"></a>

```typescript
public putQueryString(value: RulesetRulesActionParametersCacheKeyCustomKeyQueryString): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.putQueryString.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryString">RulesetRulesActionParametersCacheKeyCustomKeyQueryString</a>

---

##### `putUser` <a name="putUser" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.putUser"></a>

```typescript
public putUser(value: RulesetRulesActionParametersCacheKeyCustomKeyUser): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.putUser.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUser">RulesetRulesActionParametersCacheKeyCustomKeyUser</a>

---

##### `resetCookie` <a name="resetCookie" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.resetCookie"></a>

```typescript
public resetCookie(): void
```

##### `resetHeader` <a name="resetHeader" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.resetHeader"></a>

```typescript
public resetHeader(): void
```

##### `resetHost` <a name="resetHost" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.resetHost"></a>

```typescript
public resetHost(): void
```

##### `resetQueryString` <a name="resetQueryString" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.resetQueryString"></a>

```typescript
public resetQueryString(): void
```

##### `resetUser` <a name="resetUser" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.resetUser"></a>

```typescript
public resetUser(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.property.cookie">cookie</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference">RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.property.header">header</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference">RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.property.host">host</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference">RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.property.queryString">queryString</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference">RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.property.user">user</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference">RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.property.cookieInput">cookieInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookie">RulesetRulesActionParametersCacheKeyCustomKeyCookie</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.property.headerInput">headerInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeader">RulesetRulesActionParametersCacheKeyCustomKeyHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.property.hostInput">hostInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHost">RulesetRulesActionParametersCacheKeyCustomKeyHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.property.queryStringInput">queryStringInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryString">RulesetRulesActionParametersCacheKeyCustomKeyQueryString</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.property.userInput">userInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUser">RulesetRulesActionParametersCacheKeyCustomKeyUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKey">RulesetRulesActionParametersCacheKeyCustomKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cookie`<sup>Required</sup> <a name="cookie" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.property.cookie"></a>

```typescript
public readonly cookie: RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference">RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference</a>

---

##### `header`<sup>Required</sup> <a name="header" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.property.header"></a>

```typescript
public readonly header: RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference">RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference</a>

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.property.host"></a>

```typescript
public readonly host: RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference">RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference</a>

---

##### `queryString`<sup>Required</sup> <a name="queryString" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.property.queryString"></a>

```typescript
public readonly queryString: RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference">RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference</a>

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.property.user"></a>

```typescript
public readonly user: RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference">RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference</a>

---

##### `cookieInput`<sup>Optional</sup> <a name="cookieInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.property.cookieInput"></a>

```typescript
public readonly cookieInput: RulesetRulesActionParametersCacheKeyCustomKeyCookie;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookie">RulesetRulesActionParametersCacheKeyCustomKeyCookie</a>

---

##### `headerInput`<sup>Optional</sup> <a name="headerInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.property.headerInput"></a>

```typescript
public readonly headerInput: RulesetRulesActionParametersCacheKeyCustomKeyHeader;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeader">RulesetRulesActionParametersCacheKeyCustomKeyHeader</a>

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.property.hostInput"></a>

```typescript
public readonly hostInput: RulesetRulesActionParametersCacheKeyCustomKeyHost;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHost">RulesetRulesActionParametersCacheKeyCustomKeyHost</a>

---

##### `queryStringInput`<sup>Optional</sup> <a name="queryStringInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.property.queryStringInput"></a>

```typescript
public readonly queryStringInput: RulesetRulesActionParametersCacheKeyCustomKeyQueryString;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryString">RulesetRulesActionParametersCacheKeyCustomKeyQueryString</a>

---

##### `userInput`<sup>Optional</sup> <a name="userInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.property.userInput"></a>

```typescript
public readonly userInput: RulesetRulesActionParametersCacheKeyCustomKeyUser;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUser">RulesetRulesActionParametersCacheKeyCustomKeyUser</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: RulesetRulesActionParametersCacheKeyCustomKey;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKey">RulesetRulesActionParametersCacheKeyCustomKey</a>

---


### RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference <a name="RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.Initializer"></a>

```typescript
import { ruleset } from '@cdktf/provider-cloudflare'

new ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.resetExclude">resetExclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.resetInclude">resetInclude</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExclude` <a name="resetExclude" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.resetExclude"></a>

```typescript
public resetExclude(): void
```

##### `resetInclude` <a name="resetInclude" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.resetInclude"></a>

```typescript
public resetInclude(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.property.excludeInput">excludeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.property.includeInput">includeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.property.exclude">exclude</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.property.include">include</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryString">RulesetRulesActionParametersCacheKeyCustomKeyQueryString</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `excludeInput`<sup>Optional</sup> <a name="excludeInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.property.excludeInput"></a>

```typescript
public readonly excludeInput: string[];
```

- *Type:* string[]

---

##### `includeInput`<sup>Optional</sup> <a name="includeInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.property.includeInput"></a>

```typescript
public readonly includeInput: string[];
```

- *Type:* string[]

---

##### `exclude`<sup>Required</sup> <a name="exclude" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.property.exclude"></a>

```typescript
public readonly exclude: string[];
```

- *Type:* string[]

---

##### `include`<sup>Required</sup> <a name="include" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.property.include"></a>

```typescript
public readonly include: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: RulesetRulesActionParametersCacheKeyCustomKeyQueryString;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryString">RulesetRulesActionParametersCacheKeyCustomKeyQueryString</a>

---


### RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference <a name="RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.Initializer"></a>

```typescript
import { ruleset } from '@cdktf/provider-cloudflare'

new ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.resetDeviceType">resetDeviceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.resetGeo">resetGeo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.resetLang">resetLang</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDeviceType` <a name="resetDeviceType" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.resetDeviceType"></a>

```typescript
public resetDeviceType(): void
```

##### `resetGeo` <a name="resetGeo" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.resetGeo"></a>

```typescript
public resetGeo(): void
```

##### `resetLang` <a name="resetLang" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.resetLang"></a>

```typescript
public resetLang(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.property.deviceTypeInput">deviceTypeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.property.geoInput">geoInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.property.langInput">langInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.property.deviceType">deviceType</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.property.geo">geo</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.property.lang">lang</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUser">RulesetRulesActionParametersCacheKeyCustomKeyUser</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deviceTypeInput`<sup>Optional</sup> <a name="deviceTypeInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.property.deviceTypeInput"></a>

```typescript
public readonly deviceTypeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `geoInput`<sup>Optional</sup> <a name="geoInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.property.geoInput"></a>

```typescript
public readonly geoInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `langInput`<sup>Optional</sup> <a name="langInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.property.langInput"></a>

```typescript
public readonly langInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `deviceType`<sup>Required</sup> <a name="deviceType" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.property.deviceType"></a>

```typescript
public readonly deviceType: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `geo`<sup>Required</sup> <a name="geo" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.property.geo"></a>

```typescript
public readonly geo: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `lang`<sup>Required</sup> <a name="lang" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.property.lang"></a>

```typescript
public readonly lang: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: RulesetRulesActionParametersCacheKeyCustomKeyUser;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUser">RulesetRulesActionParametersCacheKeyCustomKeyUser</a>

---


### RulesetRulesActionParametersCacheKeyOutputReference <a name="RulesetRulesActionParametersCacheKeyOutputReference" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.Initializer"></a>

```typescript
import { ruleset } from '@cdktf/provider-cloudflare'

new ruleset.RulesetRulesActionParametersCacheKeyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.putCustomKey">putCustomKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.resetCacheByDeviceType">resetCacheByDeviceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.resetCacheDeceptionArmor">resetCacheDeceptionArmor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.resetCustomKey">resetCustomKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.resetIgnoreQueryStringsOrder">resetIgnoreQueryStringsOrder</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCustomKey` <a name="putCustomKey" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.putCustomKey"></a>

```typescript
public putCustomKey(value: RulesetRulesActionParametersCacheKeyCustomKey): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.putCustomKey.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKey">RulesetRulesActionParametersCacheKeyCustomKey</a>

---

##### `resetCacheByDeviceType` <a name="resetCacheByDeviceType" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.resetCacheByDeviceType"></a>

```typescript
public resetCacheByDeviceType(): void
```

##### `resetCacheDeceptionArmor` <a name="resetCacheDeceptionArmor" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.resetCacheDeceptionArmor"></a>

```typescript
public resetCacheDeceptionArmor(): void
```

##### `resetCustomKey` <a name="resetCustomKey" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.resetCustomKey"></a>

```typescript
public resetCustomKey(): void
```

##### `resetIgnoreQueryStringsOrder` <a name="resetIgnoreQueryStringsOrder" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.resetIgnoreQueryStringsOrder"></a>

```typescript
public resetIgnoreQueryStringsOrder(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.property.customKey">customKey</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference">RulesetRulesActionParametersCacheKeyCustomKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.property.cacheByDeviceTypeInput">cacheByDeviceTypeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.property.cacheDeceptionArmorInput">cacheDeceptionArmorInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.property.customKeyInput">customKeyInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKey">RulesetRulesActionParametersCacheKeyCustomKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.property.ignoreQueryStringsOrderInput">ignoreQueryStringsOrderInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.property.cacheByDeviceType">cacheByDeviceType</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.property.cacheDeceptionArmor">cacheDeceptionArmor</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.property.ignoreQueryStringsOrder">ignoreQueryStringsOrder</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKey">RulesetRulesActionParametersCacheKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customKey`<sup>Required</sup> <a name="customKey" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.property.customKey"></a>

```typescript
public readonly customKey: RulesetRulesActionParametersCacheKeyCustomKeyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference">RulesetRulesActionParametersCacheKeyCustomKeyOutputReference</a>

---

##### `cacheByDeviceTypeInput`<sup>Optional</sup> <a name="cacheByDeviceTypeInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.property.cacheByDeviceTypeInput"></a>

```typescript
public readonly cacheByDeviceTypeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `cacheDeceptionArmorInput`<sup>Optional</sup> <a name="cacheDeceptionArmorInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.property.cacheDeceptionArmorInput"></a>

```typescript
public readonly cacheDeceptionArmorInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `customKeyInput`<sup>Optional</sup> <a name="customKeyInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.property.customKeyInput"></a>

```typescript
public readonly customKeyInput: RulesetRulesActionParametersCacheKeyCustomKey;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKey">RulesetRulesActionParametersCacheKeyCustomKey</a>

---

##### `ignoreQueryStringsOrderInput`<sup>Optional</sup> <a name="ignoreQueryStringsOrderInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.property.ignoreQueryStringsOrderInput"></a>

```typescript
public readonly ignoreQueryStringsOrderInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `cacheByDeviceType`<sup>Required</sup> <a name="cacheByDeviceType" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.property.cacheByDeviceType"></a>

```typescript
public readonly cacheByDeviceType: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `cacheDeceptionArmor`<sup>Required</sup> <a name="cacheDeceptionArmor" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.property.cacheDeceptionArmor"></a>

```typescript
public readonly cacheDeceptionArmor: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ignoreQueryStringsOrder`<sup>Required</sup> <a name="ignoreQueryStringsOrder" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.property.ignoreQueryStringsOrder"></a>

```typescript
public readonly ignoreQueryStringsOrder: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: RulesetRulesActionParametersCacheKey;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKey">RulesetRulesActionParametersCacheKey</a>

---


### RulesetRulesActionParametersEdgeTtlOutputReference <a name="RulesetRulesActionParametersEdgeTtlOutputReference" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.Initializer"></a>

```typescript
import { ruleset } from '@cdktf/provider-cloudflare'

new ruleset.RulesetRulesActionParametersEdgeTtlOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.putStatusCodeTtl">putStatusCodeTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.resetDefault">resetDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.resetStatusCodeTtl">resetStatusCodeTtl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putStatusCodeTtl` <a name="putStatusCodeTtl" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.putStatusCodeTtl"></a>

```typescript
public putStatusCodeTtl(value: IResolvable | RulesetRulesActionParametersEdgeTtlStatusCodeTtl[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.putStatusCodeTtl.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtl">RulesetRulesActionParametersEdgeTtlStatusCodeTtl</a>[]

---

##### `resetDefault` <a name="resetDefault" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.resetDefault"></a>

```typescript
public resetDefault(): void
```

##### `resetStatusCodeTtl` <a name="resetStatusCodeTtl" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.resetStatusCodeTtl"></a>

```typescript
public resetStatusCodeTtl(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.property.statusCodeTtl">statusCodeTtl</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlList">RulesetRulesActionParametersEdgeTtlStatusCodeTtlList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.property.defaultInput">defaultInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.property.modeInput">modeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.property.statusCodeTtlInput">statusCodeTtlInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtl">RulesetRulesActionParametersEdgeTtlStatusCodeTtl</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.property.default">default</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtl">RulesetRulesActionParametersEdgeTtl</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `statusCodeTtl`<sup>Required</sup> <a name="statusCodeTtl" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.property.statusCodeTtl"></a>

```typescript
public readonly statusCodeTtl: RulesetRulesActionParametersEdgeTtlStatusCodeTtlList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlList">RulesetRulesActionParametersEdgeTtlStatusCodeTtlList</a>

---

##### `defaultInput`<sup>Optional</sup> <a name="defaultInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.property.defaultInput"></a>

```typescript
public readonly defaultInput: number;
```

- *Type:* number

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.property.modeInput"></a>

```typescript
public readonly modeInput: string;
```

- *Type:* string

---

##### `statusCodeTtlInput`<sup>Optional</sup> <a name="statusCodeTtlInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.property.statusCodeTtlInput"></a>

```typescript
public readonly statusCodeTtlInput: IResolvable | RulesetRulesActionParametersEdgeTtlStatusCodeTtl[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtl">RulesetRulesActionParametersEdgeTtlStatusCodeTtl</a>[]

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.property.default"></a>

```typescript
public readonly default: number;
```

- *Type:* number

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: RulesetRulesActionParametersEdgeTtl;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtl">RulesetRulesActionParametersEdgeTtl</a>

---


### RulesetRulesActionParametersEdgeTtlStatusCodeTtlList <a name="RulesetRulesActionParametersEdgeTtlStatusCodeTtlList" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlList.Initializer"></a>

```typescript
import { ruleset } from '@cdktf/provider-cloudflare'

new ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlList.get"></a>

```typescript
public get(index: number): RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtl">RulesetRulesActionParametersEdgeTtlStatusCodeTtl</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RulesetRulesActionParametersEdgeTtlStatusCodeTtl[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtl">RulesetRulesActionParametersEdgeTtlStatusCodeTtl</a>[]

---


### RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference <a name="RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.Initializer"></a>

```typescript
import { ruleset } from '@cdktf/provider-cloudflare'

new ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.putStatusCodeRange">putStatusCodeRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.resetStatusCode">resetStatusCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.resetStatusCodeRange">resetStatusCodeRange</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putStatusCodeRange` <a name="putStatusCodeRange" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.putStatusCodeRange"></a>

```typescript
public putStatusCodeRange(value: IResolvable | RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.putStatusCodeRange.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange">RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange</a>[]

---

##### `resetStatusCode` <a name="resetStatusCode" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.resetStatusCode"></a>

```typescript
public resetStatusCode(): void
```

##### `resetStatusCodeRange` <a name="resetStatusCodeRange" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.resetStatusCodeRange"></a>

```typescript
public resetStatusCodeRange(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.property.statusCodeRange">statusCodeRange</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList">RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.property.statusCodeInput">statusCodeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.property.statusCodeRangeInput">statusCodeRangeInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange">RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.property.valueInput">valueInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.property.statusCode">statusCode</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.property.value">value</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtl">RulesetRulesActionParametersEdgeTtlStatusCodeTtl</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `statusCodeRange`<sup>Required</sup> <a name="statusCodeRange" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.property.statusCodeRange"></a>

```typescript
public readonly statusCodeRange: RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList">RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList</a>

---

##### `statusCodeInput`<sup>Optional</sup> <a name="statusCodeInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.property.statusCodeInput"></a>

```typescript
public readonly statusCodeInput: number;
```

- *Type:* number

---

##### `statusCodeRangeInput`<sup>Optional</sup> <a name="statusCodeRangeInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.property.statusCodeRangeInput"></a>

```typescript
public readonly statusCodeRangeInput: IResolvable | RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange">RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange</a>[]

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: number;
```

- *Type:* number

---

##### `statusCode`<sup>Required</sup> <a name="statusCode" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.property.statusCode"></a>

```typescript
public readonly statusCode: number;
```

- *Type:* number

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: RulesetRulesActionParametersEdgeTtlStatusCodeTtl | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtl">RulesetRulesActionParametersEdgeTtlStatusCodeTtl</a> | cdktf.IResolvable

---


### RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList <a name="RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList.Initializer"></a>

```typescript
import { ruleset } from '@cdktf/provider-cloudflare'

new ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList.get"></a>

```typescript
public get(index: number): RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange">RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange">RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange</a>[]

---


### RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference <a name="RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.Initializer"></a>

```typescript
import { ruleset } from '@cdktf/provider-cloudflare'

new ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.resetFrom">resetFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.resetTo">resetTo</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFrom` <a name="resetFrom" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.resetFrom"></a>

```typescript
public resetFrom(): void
```

##### `resetTo` <a name="resetTo" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.resetTo"></a>

```typescript
public resetTo(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.property.fromInput">fromInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.property.toInput">toInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.property.from">from</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.property.to">to</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange">RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fromInput`<sup>Optional</sup> <a name="fromInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.property.fromInput"></a>

```typescript
public readonly fromInput: number;
```

- *Type:* number

---

##### `toInput`<sup>Optional</sup> <a name="toInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.property.toInput"></a>

```typescript
public readonly toInput: number;
```

- *Type:* number

---

##### `from`<sup>Required</sup> <a name="from" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.property.from"></a>

```typescript
public readonly from: number;
```

- *Type:* number

---

##### `to`<sup>Required</sup> <a name="to" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.property.to"></a>

```typescript
public readonly to: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange">RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange</a> | cdktf.IResolvable

---


### RulesetRulesActionParametersFromListOutputReference <a name="RulesetRulesActionParametersFromListOutputReference" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.Initializer"></a>

```typescript
import { ruleset } from '@cdktf/provider-cloudflare'

new ruleset.RulesetRulesActionParametersFromListOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromList">RulesetRulesActionParametersFromList</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: RulesetRulesActionParametersFromList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromList">RulesetRulesActionParametersFromList</a>

---


### RulesetRulesActionParametersFromValueOutputReference <a name="RulesetRulesActionParametersFromValueOutputReference" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.Initializer"></a>

```typescript
import { ruleset } from '@cdktf/provider-cloudflare'

new ruleset.RulesetRulesActionParametersFromValueOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.putTargetUrl">putTargetUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.resetPreserveQueryString">resetPreserveQueryString</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.resetStatusCode">resetStatusCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.resetTargetUrl">resetTargetUrl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTargetUrl` <a name="putTargetUrl" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.putTargetUrl"></a>

```typescript
public putTargetUrl(value: RulesetRulesActionParametersFromValueTargetUrl): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.putTargetUrl.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrl">RulesetRulesActionParametersFromValueTargetUrl</a>

---

##### `resetPreserveQueryString` <a name="resetPreserveQueryString" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.resetPreserveQueryString"></a>

```typescript
public resetPreserveQueryString(): void
```

##### `resetStatusCode` <a name="resetStatusCode" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.resetStatusCode"></a>

```typescript
public resetStatusCode(): void
```

##### `resetTargetUrl` <a name="resetTargetUrl" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.resetTargetUrl"></a>

```typescript
public resetTargetUrl(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.property.targetUrl">targetUrl</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference">RulesetRulesActionParametersFromValueTargetUrlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.property.preserveQueryStringInput">preserveQueryStringInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.property.statusCodeInput">statusCodeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.property.targetUrlInput">targetUrlInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrl">RulesetRulesActionParametersFromValueTargetUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.property.preserveQueryString">preserveQueryString</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.property.statusCode">statusCode</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValue">RulesetRulesActionParametersFromValue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `targetUrl`<sup>Required</sup> <a name="targetUrl" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.property.targetUrl"></a>

```typescript
public readonly targetUrl: RulesetRulesActionParametersFromValueTargetUrlOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference">RulesetRulesActionParametersFromValueTargetUrlOutputReference</a>

---

##### `preserveQueryStringInput`<sup>Optional</sup> <a name="preserveQueryStringInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.property.preserveQueryStringInput"></a>

```typescript
public readonly preserveQueryStringInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `statusCodeInput`<sup>Optional</sup> <a name="statusCodeInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.property.statusCodeInput"></a>

```typescript
public readonly statusCodeInput: number;
```

- *Type:* number

---

##### `targetUrlInput`<sup>Optional</sup> <a name="targetUrlInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.property.targetUrlInput"></a>

```typescript
public readonly targetUrlInput: RulesetRulesActionParametersFromValueTargetUrl;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrl">RulesetRulesActionParametersFromValueTargetUrl</a>

---

##### `preserveQueryString`<sup>Required</sup> <a name="preserveQueryString" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.property.preserveQueryString"></a>

```typescript
public readonly preserveQueryString: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `statusCode`<sup>Required</sup> <a name="statusCode" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.property.statusCode"></a>

```typescript
public readonly statusCode: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: RulesetRulesActionParametersFromValue;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValue">RulesetRulesActionParametersFromValue</a>

---


### RulesetRulesActionParametersFromValueTargetUrlOutputReference <a name="RulesetRulesActionParametersFromValueTargetUrlOutputReference" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.Initializer"></a>

```typescript
import { ruleset } from '@cdktf/provider-cloudflare'

new ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.resetExpression">resetExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExpression` <a name="resetExpression" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.resetExpression"></a>

```typescript
public resetExpression(): void
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.property.expressionInput">expressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrl">RulesetRulesActionParametersFromValueTargetUrl</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.property.expressionInput"></a>

```typescript
public readonly expressionInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: RulesetRulesActionParametersFromValueTargetUrl;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrl">RulesetRulesActionParametersFromValueTargetUrl</a>

---


### RulesetRulesActionParametersHeadersList <a name="RulesetRulesActionParametersHeadersList" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersList.Initializer"></a>

```typescript
import { ruleset } from '@cdktf/provider-cloudflare'

new ruleset.RulesetRulesActionParametersHeadersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersList.get"></a>

```typescript
public get(index: number): RulesetRulesActionParametersHeadersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeaders">RulesetRulesActionParametersHeaders</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RulesetRulesActionParametersHeaders[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeaders">RulesetRulesActionParametersHeaders</a>[]

---


### RulesetRulesActionParametersHeadersOutputReference <a name="RulesetRulesActionParametersHeadersOutputReference" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.Initializer"></a>

```typescript
import { ruleset } from '@cdktf/provider-cloudflare'

new ruleset.RulesetRulesActionParametersHeadersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.resetExpression">resetExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.resetOperation">resetOperation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExpression` <a name="resetExpression" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.resetExpression"></a>

```typescript
public resetExpression(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetOperation` <a name="resetOperation" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.resetOperation"></a>

```typescript
public resetOperation(): void
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.property.expressionInput">expressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.property.operationInput">operationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.property.operation">operation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeaders">RulesetRulesActionParametersHeaders</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.property.expressionInput"></a>

```typescript
public readonly expressionInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `operationInput`<sup>Optional</sup> <a name="operationInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.property.operationInput"></a>

```typescript
public readonly operationInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `operation`<sup>Required</sup> <a name="operation" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.property.operation"></a>

```typescript
public readonly operation: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: RulesetRulesActionParametersHeaders | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeaders">RulesetRulesActionParametersHeaders</a> | cdktf.IResolvable

---


### RulesetRulesActionParametersMatchedDataOutputReference <a name="RulesetRulesActionParametersMatchedDataOutputReference" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.Initializer"></a>

```typescript
import { ruleset } from '@cdktf/provider-cloudflare'

new ruleset.RulesetRulesActionParametersMatchedDataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.resetPublicKey">resetPublicKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPublicKey` <a name="resetPublicKey" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.resetPublicKey"></a>

```typescript
public resetPublicKey(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.property.publicKeyInput">publicKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.property.publicKey">publicKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedData">RulesetRulesActionParametersMatchedData</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `publicKeyInput`<sup>Optional</sup> <a name="publicKeyInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.property.publicKeyInput"></a>

```typescript
public readonly publicKeyInput: string;
```

- *Type:* string

---

##### `publicKey`<sup>Required</sup> <a name="publicKey" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.property.publicKey"></a>

```typescript
public readonly publicKey: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: RulesetRulesActionParametersMatchedData;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedData">RulesetRulesActionParametersMatchedData</a>

---


### RulesetRulesActionParametersOriginOutputReference <a name="RulesetRulesActionParametersOriginOutputReference" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.Initializer"></a>

```typescript
import { ruleset } from '@cdktf/provider-cloudflare'

new ruleset.RulesetRulesActionParametersOriginOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.resetHost">resetHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.resetPort">resetPort</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHost` <a name="resetHost" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.resetHost"></a>

```typescript
public resetHost(): void
```

##### `resetPort` <a name="resetPort" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.resetPort"></a>

```typescript
public resetPort(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.property.hostInput">hostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.property.host">host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOrigin">RulesetRulesActionParametersOrigin</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.property.hostInput"></a>

```typescript
public readonly hostInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: RulesetRulesActionParametersOrigin;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOrigin">RulesetRulesActionParametersOrigin</a>

---


### RulesetRulesActionParametersOutputReference <a name="RulesetRulesActionParametersOutputReference" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.Initializer"></a>

```typescript
import { ruleset } from '@cdktf/provider-cloudflare'

new ruleset.RulesetRulesActionParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putAutominify">putAutominify</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putBrowserTtl">putBrowserTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putCacheKey">putCacheKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putEdgeTtl">putEdgeTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putFromList">putFromList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putFromValue">putFromValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putHeaders">putHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putMatchedData">putMatchedData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putOrigin">putOrigin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putOverrides">putOverrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putResponse">putResponse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putServeStale">putServeStale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putSni">putSni</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putUri">putUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetAutomaticHttpsRewrites">resetAutomaticHttpsRewrites</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetAutominify">resetAutominify</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetBic">resetBic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetBrowserTtl">resetBrowserTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetCache">resetCache</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetCacheKey">resetCacheKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetContent">resetContent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetContentType">resetContentType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetCookieFields">resetCookieFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetDisableApps">resetDisableApps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetDisableRailgun">resetDisableRailgun</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetDisableZaraz">resetDisableZaraz</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetEdgeTtl">resetEdgeTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetEmailObfuscation">resetEmailObfuscation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetFromList">resetFromList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetFromValue">resetFromValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetHeaders">resetHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetHostHeader">resetHostHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetHotlinkProtection">resetHotlinkProtection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetIncrement">resetIncrement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetMatchedData">resetMatchedData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetMirage">resetMirage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetOpportunisticEncryption">resetOpportunisticEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetOrigin">resetOrigin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetOriginErrorPagePassthru">resetOriginErrorPagePassthru</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetOverrides">resetOverrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetPhases">resetPhases</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetPolish">resetPolish</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetProducts">resetProducts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetRequestFields">resetRequestFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetRespectStrongEtags">resetRespectStrongEtags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetResponse">resetResponse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetResponseFields">resetResponseFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetRocketLoader">resetRocketLoader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetRules">resetRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetRuleset">resetRuleset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetRulesets">resetRulesets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetSecurityLevel">resetSecurityLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetServerSideExcludes">resetServerSideExcludes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetServeStale">resetServeStale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetSni">resetSni</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetSsl">resetSsl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetStatusCode">resetStatusCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetSxg">resetSxg</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetUri">resetUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAutominify` <a name="putAutominify" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putAutominify"></a>

```typescript
public putAutominify(value: IResolvable | RulesetRulesActionParametersAutominify[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putAutominify.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominify">RulesetRulesActionParametersAutominify</a>[]

---

##### `putBrowserTtl` <a name="putBrowserTtl" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putBrowserTtl"></a>

```typescript
public putBrowserTtl(value: RulesetRulesActionParametersBrowserTtl): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putBrowserTtl.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtl">RulesetRulesActionParametersBrowserTtl</a>

---

##### `putCacheKey` <a name="putCacheKey" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putCacheKey"></a>

```typescript
public putCacheKey(value: RulesetRulesActionParametersCacheKey): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putCacheKey.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKey">RulesetRulesActionParametersCacheKey</a>

---

##### `putEdgeTtl` <a name="putEdgeTtl" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putEdgeTtl"></a>

```typescript
public putEdgeTtl(value: RulesetRulesActionParametersEdgeTtl): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putEdgeTtl.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtl">RulesetRulesActionParametersEdgeTtl</a>

---

##### `putFromList` <a name="putFromList" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putFromList"></a>

```typescript
public putFromList(value: RulesetRulesActionParametersFromList): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putFromList.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromList">RulesetRulesActionParametersFromList</a>

---

##### `putFromValue` <a name="putFromValue" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putFromValue"></a>

```typescript
public putFromValue(value: RulesetRulesActionParametersFromValue): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putFromValue.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValue">RulesetRulesActionParametersFromValue</a>

---

##### `putHeaders` <a name="putHeaders" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putHeaders"></a>

```typescript
public putHeaders(value: IResolvable | RulesetRulesActionParametersHeaders[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putHeaders.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeaders">RulesetRulesActionParametersHeaders</a>[]

---

##### `putMatchedData` <a name="putMatchedData" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putMatchedData"></a>

```typescript
public putMatchedData(value: RulesetRulesActionParametersMatchedData): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putMatchedData.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedData">RulesetRulesActionParametersMatchedData</a>

---

##### `putOrigin` <a name="putOrigin" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putOrigin"></a>

```typescript
public putOrigin(value: RulesetRulesActionParametersOrigin): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putOrigin.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOrigin">RulesetRulesActionParametersOrigin</a>

---

##### `putOverrides` <a name="putOverrides" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putOverrides"></a>

```typescript
public putOverrides(value: RulesetRulesActionParametersOverrides): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putOverrides.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverrides">RulesetRulesActionParametersOverrides</a>

---

##### `putResponse` <a name="putResponse" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putResponse"></a>

```typescript
public putResponse(value: IResolvable | RulesetRulesActionParametersResponse[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putResponse.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponse">RulesetRulesActionParametersResponse</a>[]

---

##### `putServeStale` <a name="putServeStale" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putServeStale"></a>

```typescript
public putServeStale(value: RulesetRulesActionParametersServeStale): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putServeStale.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStale">RulesetRulesActionParametersServeStale</a>

---

##### `putSni` <a name="putSni" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putSni"></a>

```typescript
public putSni(value: RulesetRulesActionParametersSni): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putSni.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSni">RulesetRulesActionParametersSni</a>

---

##### `putUri` <a name="putUri" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putUri"></a>

```typescript
public putUri(value: RulesetRulesActionParametersUri): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putUri.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUri">RulesetRulesActionParametersUri</a>

---

##### `resetAutomaticHttpsRewrites` <a name="resetAutomaticHttpsRewrites" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetAutomaticHttpsRewrites"></a>

```typescript
public resetAutomaticHttpsRewrites(): void
```

##### `resetAutominify` <a name="resetAutominify" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetAutominify"></a>

```typescript
public resetAutominify(): void
```

##### `resetBic` <a name="resetBic" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetBic"></a>

```typescript
public resetBic(): void
```

##### `resetBrowserTtl` <a name="resetBrowserTtl" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetBrowserTtl"></a>

```typescript
public resetBrowserTtl(): void
```

##### `resetCache` <a name="resetCache" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetCache"></a>

```typescript
public resetCache(): void
```

##### `resetCacheKey` <a name="resetCacheKey" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetCacheKey"></a>

```typescript
public resetCacheKey(): void
```

##### `resetContent` <a name="resetContent" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetContent"></a>

```typescript
public resetContent(): void
```

##### `resetContentType` <a name="resetContentType" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetContentType"></a>

```typescript
public resetContentType(): void
```

##### `resetCookieFields` <a name="resetCookieFields" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetCookieFields"></a>

```typescript
public resetCookieFields(): void
```

##### `resetDisableApps` <a name="resetDisableApps" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetDisableApps"></a>

```typescript
public resetDisableApps(): void
```

##### `resetDisableRailgun` <a name="resetDisableRailgun" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetDisableRailgun"></a>

```typescript
public resetDisableRailgun(): void
```

##### `resetDisableZaraz` <a name="resetDisableZaraz" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetDisableZaraz"></a>

```typescript
public resetDisableZaraz(): void
```

##### `resetEdgeTtl` <a name="resetEdgeTtl" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetEdgeTtl"></a>

```typescript
public resetEdgeTtl(): void
```

##### `resetEmailObfuscation` <a name="resetEmailObfuscation" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetEmailObfuscation"></a>

```typescript
public resetEmailObfuscation(): void
```

##### `resetFromList` <a name="resetFromList" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetFromList"></a>

```typescript
public resetFromList(): void
```

##### `resetFromValue` <a name="resetFromValue" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetFromValue"></a>

```typescript
public resetFromValue(): void
```

##### `resetHeaders` <a name="resetHeaders" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetHeaders"></a>

```typescript
public resetHeaders(): void
```

##### `resetHostHeader` <a name="resetHostHeader" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetHostHeader"></a>

```typescript
public resetHostHeader(): void
```

##### `resetHotlinkProtection` <a name="resetHotlinkProtection" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetHotlinkProtection"></a>

```typescript
public resetHotlinkProtection(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIncrement` <a name="resetIncrement" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetIncrement"></a>

```typescript
public resetIncrement(): void
```

##### `resetMatchedData` <a name="resetMatchedData" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetMatchedData"></a>

```typescript
public resetMatchedData(): void
```

##### `resetMirage` <a name="resetMirage" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetMirage"></a>

```typescript
public resetMirage(): void
```

##### `resetOpportunisticEncryption` <a name="resetOpportunisticEncryption" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetOpportunisticEncryption"></a>

```typescript
public resetOpportunisticEncryption(): void
```

##### `resetOrigin` <a name="resetOrigin" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetOrigin"></a>

```typescript
public resetOrigin(): void
```

##### `resetOriginErrorPagePassthru` <a name="resetOriginErrorPagePassthru" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetOriginErrorPagePassthru"></a>

```typescript
public resetOriginErrorPagePassthru(): void
```

##### `resetOverrides` <a name="resetOverrides" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetOverrides"></a>

```typescript
public resetOverrides(): void
```

##### `resetPhases` <a name="resetPhases" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetPhases"></a>

```typescript
public resetPhases(): void
```

##### `resetPolish` <a name="resetPolish" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetPolish"></a>

```typescript
public resetPolish(): void
```

##### `resetProducts` <a name="resetProducts" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetProducts"></a>

```typescript
public resetProducts(): void
```

##### `resetRequestFields` <a name="resetRequestFields" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetRequestFields"></a>

```typescript
public resetRequestFields(): void
```

##### `resetRespectStrongEtags` <a name="resetRespectStrongEtags" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetRespectStrongEtags"></a>

```typescript
public resetRespectStrongEtags(): void
```

##### `resetResponse` <a name="resetResponse" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetResponse"></a>

```typescript
public resetResponse(): void
```

##### `resetResponseFields` <a name="resetResponseFields" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetResponseFields"></a>

```typescript
public resetResponseFields(): void
```

##### `resetRocketLoader` <a name="resetRocketLoader" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetRocketLoader"></a>

```typescript
public resetRocketLoader(): void
```

##### `resetRules` <a name="resetRules" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetRules"></a>

```typescript
public resetRules(): void
```

##### `resetRuleset` <a name="resetRuleset" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetRuleset"></a>

```typescript
public resetRuleset(): void
```

##### `resetRulesets` <a name="resetRulesets" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetRulesets"></a>

```typescript
public resetRulesets(): void
```

##### `resetSecurityLevel` <a name="resetSecurityLevel" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetSecurityLevel"></a>

```typescript
public resetSecurityLevel(): void
```

##### `resetServerSideExcludes` <a name="resetServerSideExcludes" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetServerSideExcludes"></a>

```typescript
public resetServerSideExcludes(): void
```

##### `resetServeStale` <a name="resetServeStale" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetServeStale"></a>

```typescript
public resetServeStale(): void
```

##### `resetSni` <a name="resetSni" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetSni"></a>

```typescript
public resetSni(): void
```

##### `resetSsl` <a name="resetSsl" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetSsl"></a>

```typescript
public resetSsl(): void
```

##### `resetStatusCode` <a name="resetStatusCode" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetStatusCode"></a>

```typescript
public resetStatusCode(): void
```

##### `resetSxg` <a name="resetSxg" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetSxg"></a>

```typescript
public resetSxg(): void
```

##### `resetUri` <a name="resetUri" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetUri"></a>

```typescript
public resetUri(): void
```

##### `resetVersion` <a name="resetVersion" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetVersion"></a>

```typescript
public resetVersion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.autominify">autominify</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyList">RulesetRulesActionParametersAutominifyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.browserTtl">browserTtl</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference">RulesetRulesActionParametersBrowserTtlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.cacheKey">cacheKey</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference">RulesetRulesActionParametersCacheKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.edgeTtl">edgeTtl</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference">RulesetRulesActionParametersEdgeTtlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.fromList">fromList</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference">RulesetRulesActionParametersFromListOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.fromValue">fromValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference">RulesetRulesActionParametersFromValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.headers">headers</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersList">RulesetRulesActionParametersHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.matchedData">matchedData</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference">RulesetRulesActionParametersMatchedDataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.origin">origin</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference">RulesetRulesActionParametersOriginOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.overrides">overrides</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference">RulesetRulesActionParametersOverridesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.response">response</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseList">RulesetRulesActionParametersResponseList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.serveStale">serveStale</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference">RulesetRulesActionParametersServeStaleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.sni">sni</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference">RulesetRulesActionParametersSniOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.uri">uri</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference">RulesetRulesActionParametersUriOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.automaticHttpsRewritesInput">automaticHttpsRewritesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.autominifyInput">autominifyInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominify">RulesetRulesActionParametersAutominify</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.bicInput">bicInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.browserTtlInput">browserTtlInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtl">RulesetRulesActionParametersBrowserTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.cacheInput">cacheInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.cacheKeyInput">cacheKeyInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKey">RulesetRulesActionParametersCacheKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.contentInput">contentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.contentTypeInput">contentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.cookieFieldsInput">cookieFieldsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.disableAppsInput">disableAppsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.disableRailgunInput">disableRailgunInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.disableZarazInput">disableZarazInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.edgeTtlInput">edgeTtlInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtl">RulesetRulesActionParametersEdgeTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.emailObfuscationInput">emailObfuscationInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.fromListInput">fromListInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromList">RulesetRulesActionParametersFromList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.fromValueInput">fromValueInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValue">RulesetRulesActionParametersFromValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.headersInput">headersInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeaders">RulesetRulesActionParametersHeaders</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.hostHeaderInput">hostHeaderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.hotlinkProtectionInput">hotlinkProtectionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.incrementInput">incrementInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.matchedDataInput">matchedDataInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedData">RulesetRulesActionParametersMatchedData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.mirageInput">mirageInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.opportunisticEncryptionInput">opportunisticEncryptionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.originErrorPagePassthruInput">originErrorPagePassthruInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.originInput">originInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOrigin">RulesetRulesActionParametersOrigin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.overridesInput">overridesInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverrides">RulesetRulesActionParametersOverrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.phasesInput">phasesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.polishInput">polishInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.productsInput">productsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.requestFieldsInput">requestFieldsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.respectStrongEtagsInput">respectStrongEtagsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.responseFieldsInput">responseFieldsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.responseInput">responseInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponse">RulesetRulesActionParametersResponse</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.rocketLoaderInput">rocketLoaderInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.rulesetInput">rulesetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.rulesetsInput">rulesetsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.rulesInput">rulesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.securityLevelInput">securityLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.serverSideExcludesInput">serverSideExcludesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.serveStaleInput">serveStaleInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStale">RulesetRulesActionParametersServeStale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.sniInput">sniInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSni">RulesetRulesActionParametersSni</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.sslInput">sslInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.statusCodeInput">statusCodeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.sxgInput">sxgInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.uriInput">uriInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUri">RulesetRulesActionParametersUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.automaticHttpsRewrites">automaticHttpsRewrites</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.bic">bic</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.cache">cache</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.content">content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.contentType">contentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.cookieFields">cookieFields</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.disableApps">disableApps</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.disableRailgun">disableRailgun</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.disableZaraz">disableZaraz</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.emailObfuscation">emailObfuscation</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.hostHeader">hostHeader</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.hotlinkProtection">hotlinkProtection</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.increment">increment</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.mirage">mirage</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.opportunisticEncryption">opportunisticEncryption</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.originErrorPagePassthru">originErrorPagePassthru</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.phases">phases</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.polish">polish</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.products">products</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.requestFields">requestFields</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.respectStrongEtags">respectStrongEtags</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.responseFields">responseFields</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.rocketLoader">rocketLoader</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.rules">rules</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.ruleset">ruleset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.rulesets">rulesets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.securityLevel">securityLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.serverSideExcludes">serverSideExcludes</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.ssl">ssl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.statusCode">statusCode</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.sxg">sxg</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters">RulesetRulesActionParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `autominify`<sup>Required</sup> <a name="autominify" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.autominify"></a>

```typescript
public readonly autominify: RulesetRulesActionParametersAutominifyList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyList">RulesetRulesActionParametersAutominifyList</a>

---

##### `browserTtl`<sup>Required</sup> <a name="browserTtl" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.browserTtl"></a>

```typescript
public readonly browserTtl: RulesetRulesActionParametersBrowserTtlOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference">RulesetRulesActionParametersBrowserTtlOutputReference</a>

---

##### `cacheKey`<sup>Required</sup> <a name="cacheKey" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.cacheKey"></a>

```typescript
public readonly cacheKey: RulesetRulesActionParametersCacheKeyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference">RulesetRulesActionParametersCacheKeyOutputReference</a>

---

##### `edgeTtl`<sup>Required</sup> <a name="edgeTtl" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.edgeTtl"></a>

```typescript
public readonly edgeTtl: RulesetRulesActionParametersEdgeTtlOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference">RulesetRulesActionParametersEdgeTtlOutputReference</a>

---

##### `fromList`<sup>Required</sup> <a name="fromList" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.fromList"></a>

```typescript
public readonly fromList: RulesetRulesActionParametersFromListOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference">RulesetRulesActionParametersFromListOutputReference</a>

---

##### `fromValue`<sup>Required</sup> <a name="fromValue" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.fromValue"></a>

```typescript
public readonly fromValue: RulesetRulesActionParametersFromValueOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference">RulesetRulesActionParametersFromValueOutputReference</a>

---

##### `headers`<sup>Required</sup> <a name="headers" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.headers"></a>

```typescript
public readonly headers: RulesetRulesActionParametersHeadersList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersList">RulesetRulesActionParametersHeadersList</a>

---

##### `matchedData`<sup>Required</sup> <a name="matchedData" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.matchedData"></a>

```typescript
public readonly matchedData: RulesetRulesActionParametersMatchedDataOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference">RulesetRulesActionParametersMatchedDataOutputReference</a>

---

##### `origin`<sup>Required</sup> <a name="origin" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.origin"></a>

```typescript
public readonly origin: RulesetRulesActionParametersOriginOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference">RulesetRulesActionParametersOriginOutputReference</a>

---

##### `overrides`<sup>Required</sup> <a name="overrides" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.overrides"></a>

```typescript
public readonly overrides: RulesetRulesActionParametersOverridesOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference">RulesetRulesActionParametersOverridesOutputReference</a>

---

##### `response`<sup>Required</sup> <a name="response" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.response"></a>

```typescript
public readonly response: RulesetRulesActionParametersResponseList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseList">RulesetRulesActionParametersResponseList</a>

---

##### `serveStale`<sup>Required</sup> <a name="serveStale" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.serveStale"></a>

```typescript
public readonly serveStale: RulesetRulesActionParametersServeStaleOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference">RulesetRulesActionParametersServeStaleOutputReference</a>

---

##### `sni`<sup>Required</sup> <a name="sni" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.sni"></a>

```typescript
public readonly sni: RulesetRulesActionParametersSniOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference">RulesetRulesActionParametersSniOutputReference</a>

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.uri"></a>

```typescript
public readonly uri: RulesetRulesActionParametersUriOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference">RulesetRulesActionParametersUriOutputReference</a>

---

##### `automaticHttpsRewritesInput`<sup>Optional</sup> <a name="automaticHttpsRewritesInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.automaticHttpsRewritesInput"></a>

```typescript
public readonly automaticHttpsRewritesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `autominifyInput`<sup>Optional</sup> <a name="autominifyInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.autominifyInput"></a>

```typescript
public readonly autominifyInput: IResolvable | RulesetRulesActionParametersAutominify[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominify">RulesetRulesActionParametersAutominify</a>[]

---

##### `bicInput`<sup>Optional</sup> <a name="bicInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.bicInput"></a>

```typescript
public readonly bicInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `browserTtlInput`<sup>Optional</sup> <a name="browserTtlInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.browserTtlInput"></a>

```typescript
public readonly browserTtlInput: RulesetRulesActionParametersBrowserTtl;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtl">RulesetRulesActionParametersBrowserTtl</a>

---

##### `cacheInput`<sup>Optional</sup> <a name="cacheInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.cacheInput"></a>

```typescript
public readonly cacheInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `cacheKeyInput`<sup>Optional</sup> <a name="cacheKeyInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.cacheKeyInput"></a>

```typescript
public readonly cacheKeyInput: RulesetRulesActionParametersCacheKey;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKey">RulesetRulesActionParametersCacheKey</a>

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.contentInput"></a>

```typescript
public readonly contentInput: string;
```

- *Type:* string

---

##### `contentTypeInput`<sup>Optional</sup> <a name="contentTypeInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.contentTypeInput"></a>

```typescript
public readonly contentTypeInput: string;
```

- *Type:* string

---

##### `cookieFieldsInput`<sup>Optional</sup> <a name="cookieFieldsInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.cookieFieldsInput"></a>

```typescript
public readonly cookieFieldsInput: string[];
```

- *Type:* string[]

---

##### `disableAppsInput`<sup>Optional</sup> <a name="disableAppsInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.disableAppsInput"></a>

```typescript
public readonly disableAppsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `disableRailgunInput`<sup>Optional</sup> <a name="disableRailgunInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.disableRailgunInput"></a>

```typescript
public readonly disableRailgunInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `disableZarazInput`<sup>Optional</sup> <a name="disableZarazInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.disableZarazInput"></a>

```typescript
public readonly disableZarazInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `edgeTtlInput`<sup>Optional</sup> <a name="edgeTtlInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.edgeTtlInput"></a>

```typescript
public readonly edgeTtlInput: RulesetRulesActionParametersEdgeTtl;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtl">RulesetRulesActionParametersEdgeTtl</a>

---

##### `emailObfuscationInput`<sup>Optional</sup> <a name="emailObfuscationInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.emailObfuscationInput"></a>

```typescript
public readonly emailObfuscationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `fromListInput`<sup>Optional</sup> <a name="fromListInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.fromListInput"></a>

```typescript
public readonly fromListInput: RulesetRulesActionParametersFromList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromList">RulesetRulesActionParametersFromList</a>

---

##### `fromValueInput`<sup>Optional</sup> <a name="fromValueInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.fromValueInput"></a>

```typescript
public readonly fromValueInput: RulesetRulesActionParametersFromValue;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValue">RulesetRulesActionParametersFromValue</a>

---

##### `headersInput`<sup>Optional</sup> <a name="headersInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.headersInput"></a>

```typescript
public readonly headersInput: IResolvable | RulesetRulesActionParametersHeaders[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeaders">RulesetRulesActionParametersHeaders</a>[]

---

##### `hostHeaderInput`<sup>Optional</sup> <a name="hostHeaderInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.hostHeaderInput"></a>

```typescript
public readonly hostHeaderInput: string;
```

- *Type:* string

---

##### `hotlinkProtectionInput`<sup>Optional</sup> <a name="hotlinkProtectionInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.hotlinkProtectionInput"></a>

```typescript
public readonly hotlinkProtectionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `incrementInput`<sup>Optional</sup> <a name="incrementInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.incrementInput"></a>

```typescript
public readonly incrementInput: number;
```

- *Type:* number

---

##### `matchedDataInput`<sup>Optional</sup> <a name="matchedDataInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.matchedDataInput"></a>

```typescript
public readonly matchedDataInput: RulesetRulesActionParametersMatchedData;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedData">RulesetRulesActionParametersMatchedData</a>

---

##### `mirageInput`<sup>Optional</sup> <a name="mirageInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.mirageInput"></a>

```typescript
public readonly mirageInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `opportunisticEncryptionInput`<sup>Optional</sup> <a name="opportunisticEncryptionInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.opportunisticEncryptionInput"></a>

```typescript
public readonly opportunisticEncryptionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `originErrorPagePassthruInput`<sup>Optional</sup> <a name="originErrorPagePassthruInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.originErrorPagePassthruInput"></a>

```typescript
public readonly originErrorPagePassthruInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `originInput`<sup>Optional</sup> <a name="originInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.originInput"></a>

```typescript
public readonly originInput: RulesetRulesActionParametersOrigin;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOrigin">RulesetRulesActionParametersOrigin</a>

---

##### `overridesInput`<sup>Optional</sup> <a name="overridesInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.overridesInput"></a>

```typescript
public readonly overridesInput: RulesetRulesActionParametersOverrides;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverrides">RulesetRulesActionParametersOverrides</a>

---

##### `phasesInput`<sup>Optional</sup> <a name="phasesInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.phasesInput"></a>

```typescript
public readonly phasesInput: string[];
```

- *Type:* string[]

---

##### `polishInput`<sup>Optional</sup> <a name="polishInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.polishInput"></a>

```typescript
public readonly polishInput: string;
```

- *Type:* string

---

##### `productsInput`<sup>Optional</sup> <a name="productsInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.productsInput"></a>

```typescript
public readonly productsInput: string[];
```

- *Type:* string[]

---

##### `requestFieldsInput`<sup>Optional</sup> <a name="requestFieldsInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.requestFieldsInput"></a>

```typescript
public readonly requestFieldsInput: string[];
```

- *Type:* string[]

---

##### `respectStrongEtagsInput`<sup>Optional</sup> <a name="respectStrongEtagsInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.respectStrongEtagsInput"></a>

```typescript
public readonly respectStrongEtagsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `responseFieldsInput`<sup>Optional</sup> <a name="responseFieldsInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.responseFieldsInput"></a>

```typescript
public readonly responseFieldsInput: string[];
```

- *Type:* string[]

---

##### `responseInput`<sup>Optional</sup> <a name="responseInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.responseInput"></a>

```typescript
public readonly responseInput: IResolvable | RulesetRulesActionParametersResponse[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponse">RulesetRulesActionParametersResponse</a>[]

---

##### `rocketLoaderInput`<sup>Optional</sup> <a name="rocketLoaderInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.rocketLoaderInput"></a>

```typescript
public readonly rocketLoaderInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `rulesetInput`<sup>Optional</sup> <a name="rulesetInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.rulesetInput"></a>

```typescript
public readonly rulesetInput: string;
```

- *Type:* string

---

##### `rulesetsInput`<sup>Optional</sup> <a name="rulesetsInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.rulesetsInput"></a>

```typescript
public readonly rulesetsInput: string[];
```

- *Type:* string[]

---

##### `rulesInput`<sup>Optional</sup> <a name="rulesInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.rulesInput"></a>

```typescript
public readonly rulesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `securityLevelInput`<sup>Optional</sup> <a name="securityLevelInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.securityLevelInput"></a>

```typescript
public readonly securityLevelInput: string;
```

- *Type:* string

---

##### `serverSideExcludesInput`<sup>Optional</sup> <a name="serverSideExcludesInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.serverSideExcludesInput"></a>

```typescript
public readonly serverSideExcludesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `serveStaleInput`<sup>Optional</sup> <a name="serveStaleInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.serveStaleInput"></a>

```typescript
public readonly serveStaleInput: RulesetRulesActionParametersServeStale;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStale">RulesetRulesActionParametersServeStale</a>

---

##### `sniInput`<sup>Optional</sup> <a name="sniInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.sniInput"></a>

```typescript
public readonly sniInput: RulesetRulesActionParametersSni;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSni">RulesetRulesActionParametersSni</a>

---

##### `sslInput`<sup>Optional</sup> <a name="sslInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.sslInput"></a>

```typescript
public readonly sslInput: string;
```

- *Type:* string

---

##### `statusCodeInput`<sup>Optional</sup> <a name="statusCodeInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.statusCodeInput"></a>

```typescript
public readonly statusCodeInput: number;
```

- *Type:* number

---

##### `sxgInput`<sup>Optional</sup> <a name="sxgInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.sxgInput"></a>

```typescript
public readonly sxgInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `uriInput`<sup>Optional</sup> <a name="uriInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.uriInput"></a>

```typescript
public readonly uriInput: RulesetRulesActionParametersUri;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUri">RulesetRulesActionParametersUri</a>

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `automaticHttpsRewrites`<sup>Required</sup> <a name="automaticHttpsRewrites" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.automaticHttpsRewrites"></a>

```typescript
public readonly automaticHttpsRewrites: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `bic`<sup>Required</sup> <a name="bic" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.bic"></a>

```typescript
public readonly bic: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `cache`<sup>Required</sup> <a name="cache" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.cache"></a>

```typescript
public readonly cache: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.contentType"></a>

```typescript
public readonly contentType: string;
```

- *Type:* string

---

##### `cookieFields`<sup>Required</sup> <a name="cookieFields" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.cookieFields"></a>

```typescript
public readonly cookieFields: string[];
```

- *Type:* string[]

---

##### `disableApps`<sup>Required</sup> <a name="disableApps" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.disableApps"></a>

```typescript
public readonly disableApps: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `disableRailgun`<sup>Required</sup> <a name="disableRailgun" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.disableRailgun"></a>

```typescript
public readonly disableRailgun: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `disableZaraz`<sup>Required</sup> <a name="disableZaraz" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.disableZaraz"></a>

```typescript
public readonly disableZaraz: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `emailObfuscation`<sup>Required</sup> <a name="emailObfuscation" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.emailObfuscation"></a>

```typescript
public readonly emailObfuscation: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `hostHeader`<sup>Required</sup> <a name="hostHeader" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.hostHeader"></a>

```typescript
public readonly hostHeader: string;
```

- *Type:* string

---

##### `hotlinkProtection`<sup>Required</sup> <a name="hotlinkProtection" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.hotlinkProtection"></a>

```typescript
public readonly hotlinkProtection: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `increment`<sup>Required</sup> <a name="increment" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.increment"></a>

```typescript
public readonly increment: number;
```

- *Type:* number

---

##### `mirage`<sup>Required</sup> <a name="mirage" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.mirage"></a>

```typescript
public readonly mirage: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `opportunisticEncryption`<sup>Required</sup> <a name="opportunisticEncryption" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.opportunisticEncryption"></a>

```typescript
public readonly opportunisticEncryption: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `originErrorPagePassthru`<sup>Required</sup> <a name="originErrorPagePassthru" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.originErrorPagePassthru"></a>

```typescript
public readonly originErrorPagePassthru: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `phases`<sup>Required</sup> <a name="phases" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.phases"></a>

```typescript
public readonly phases: string[];
```

- *Type:* string[]

---

##### `polish`<sup>Required</sup> <a name="polish" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.polish"></a>

```typescript
public readonly polish: string;
```

- *Type:* string

---

##### `products`<sup>Required</sup> <a name="products" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.products"></a>

```typescript
public readonly products: string[];
```

- *Type:* string[]

---

##### `requestFields`<sup>Required</sup> <a name="requestFields" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.requestFields"></a>

```typescript
public readonly requestFields: string[];
```

- *Type:* string[]

---

##### `respectStrongEtags`<sup>Required</sup> <a name="respectStrongEtags" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.respectStrongEtags"></a>

```typescript
public readonly respectStrongEtags: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `responseFields`<sup>Required</sup> <a name="responseFields" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.responseFields"></a>

```typescript
public readonly responseFields: string[];
```

- *Type:* string[]

---

##### `rocketLoader`<sup>Required</sup> <a name="rocketLoader" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.rocketLoader"></a>

```typescript
public readonly rocketLoader: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.rules"></a>

```typescript
public readonly rules: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `ruleset`<sup>Required</sup> <a name="ruleset" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.ruleset"></a>

```typescript
public readonly ruleset: string;
```

- *Type:* string

---

##### `rulesets`<sup>Required</sup> <a name="rulesets" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.rulesets"></a>

```typescript
public readonly rulesets: string[];
```

- *Type:* string[]

---

##### `securityLevel`<sup>Required</sup> <a name="securityLevel" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.securityLevel"></a>

```typescript
public readonly securityLevel: string;
```

- *Type:* string

---

##### `serverSideExcludes`<sup>Required</sup> <a name="serverSideExcludes" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.serverSideExcludes"></a>

```typescript
public readonly serverSideExcludes: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ssl`<sup>Required</sup> <a name="ssl" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.ssl"></a>

```typescript
public readonly ssl: string;
```

- *Type:* string

---

##### `statusCode`<sup>Required</sup> <a name="statusCode" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.statusCode"></a>

```typescript
public readonly statusCode: number;
```

- *Type:* number

---

##### `sxg`<sup>Required</sup> <a name="sxg" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.sxg"></a>

```typescript
public readonly sxg: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: RulesetRulesActionParameters;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters">RulesetRulesActionParameters</a>

---


### RulesetRulesActionParametersOverridesCategoriesList <a name="RulesetRulesActionParametersOverridesCategoriesList" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesList.Initializer"></a>

```typescript
import { ruleset } from '@cdktf/provider-cloudflare'

new ruleset.RulesetRulesActionParametersOverridesCategoriesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesList.get"></a>

```typescript
public get(index: number): RulesetRulesActionParametersOverridesCategoriesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategories">RulesetRulesActionParametersOverridesCategories</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RulesetRulesActionParametersOverridesCategories[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategories">RulesetRulesActionParametersOverridesCategories</a>[]

---


### RulesetRulesActionParametersOverridesCategoriesOutputReference <a name="RulesetRulesActionParametersOverridesCategoriesOutputReference" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.Initializer"></a>

```typescript
import { ruleset } from '@cdktf/provider-cloudflare'

new ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.resetAction">resetAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.resetCategory">resetCategory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.resetStatus">resetStatus</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAction` <a name="resetAction" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.resetAction"></a>

```typescript
public resetAction(): void
```

##### `resetCategory` <a name="resetCategory" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.resetCategory"></a>

```typescript
public resetCategory(): void
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetStatus` <a name="resetStatus" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.resetStatus"></a>

```typescript
public resetStatus(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.property.actionInput">actionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.property.categoryInput">categoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.property.category">category</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategories">RulesetRulesActionParametersOverridesCategories</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.property.actionInput"></a>

```typescript
public readonly actionInput: string;
```

- *Type:* string

---

##### `categoryInput`<sup>Optional</sup> <a name="categoryInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.property.categoryInput"></a>

```typescript
public readonly categoryInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.property.category"></a>

```typescript
public readonly category: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: RulesetRulesActionParametersOverridesCategories | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategories">RulesetRulesActionParametersOverridesCategories</a> | cdktf.IResolvable

---


### RulesetRulesActionParametersOverridesOutputReference <a name="RulesetRulesActionParametersOverridesOutputReference" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.Initializer"></a>

```typescript
import { ruleset } from '@cdktf/provider-cloudflare'

new ruleset.RulesetRulesActionParametersOverridesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.putCategories">putCategories</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.putRules">putRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.resetAction">resetAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.resetCategories">resetCategories</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.resetRules">resetRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.resetSensitivityLevel">resetSensitivityLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.resetStatus">resetStatus</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCategories` <a name="putCategories" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.putCategories"></a>

```typescript
public putCategories(value: IResolvable | RulesetRulesActionParametersOverridesCategories[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.putCategories.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategories">RulesetRulesActionParametersOverridesCategories</a>[]

---

##### `putRules` <a name="putRules" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.putRules"></a>

```typescript
public putRules(value: IResolvable | RulesetRulesActionParametersOverridesRules[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.putRules.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRules">RulesetRulesActionParametersOverridesRules</a>[]

---

##### `resetAction` <a name="resetAction" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.resetAction"></a>

```typescript
public resetAction(): void
```

##### `resetCategories` <a name="resetCategories" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.resetCategories"></a>

```typescript
public resetCategories(): void
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetRules` <a name="resetRules" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.resetRules"></a>

```typescript
public resetRules(): void
```

##### `resetSensitivityLevel` <a name="resetSensitivityLevel" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.resetSensitivityLevel"></a>

```typescript
public resetSensitivityLevel(): void
```

##### `resetStatus` <a name="resetStatus" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.resetStatus"></a>

```typescript
public resetStatus(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.property.categories">categories</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesList">RulesetRulesActionParametersOverridesCategoriesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.property.rules">rules</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesList">RulesetRulesActionParametersOverridesRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.property.actionInput">actionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.property.categoriesInput">categoriesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategories">RulesetRulesActionParametersOverridesCategories</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.property.rulesInput">rulesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRules">RulesetRulesActionParametersOverridesRules</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.property.sensitivityLevelInput">sensitivityLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.property.sensitivityLevel">sensitivityLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverrides">RulesetRulesActionParametersOverrides</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `categories`<sup>Required</sup> <a name="categories" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.property.categories"></a>

```typescript
public readonly categories: RulesetRulesActionParametersOverridesCategoriesList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesList">RulesetRulesActionParametersOverridesCategoriesList</a>

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.property.rules"></a>

```typescript
public readonly rules: RulesetRulesActionParametersOverridesRulesList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesList">RulesetRulesActionParametersOverridesRulesList</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.property.actionInput"></a>

```typescript
public readonly actionInput: string;
```

- *Type:* string

---

##### `categoriesInput`<sup>Optional</sup> <a name="categoriesInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.property.categoriesInput"></a>

```typescript
public readonly categoriesInput: IResolvable | RulesetRulesActionParametersOverridesCategories[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategories">RulesetRulesActionParametersOverridesCategories</a>[]

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `rulesInput`<sup>Optional</sup> <a name="rulesInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.property.rulesInput"></a>

```typescript
public readonly rulesInput: IResolvable | RulesetRulesActionParametersOverridesRules[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRules">RulesetRulesActionParametersOverridesRules</a>[]

---

##### `sensitivityLevelInput`<sup>Optional</sup> <a name="sensitivityLevelInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.property.sensitivityLevelInput"></a>

```typescript
public readonly sensitivityLevelInput: string;
```

- *Type:* string

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sensitivityLevel`<sup>Required</sup> <a name="sensitivityLevel" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.property.sensitivityLevel"></a>

```typescript
public readonly sensitivityLevel: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: RulesetRulesActionParametersOverrides;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverrides">RulesetRulesActionParametersOverrides</a>

---


### RulesetRulesActionParametersOverridesRulesList <a name="RulesetRulesActionParametersOverridesRulesList" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesList.Initializer"></a>

```typescript
import { ruleset } from '@cdktf/provider-cloudflare'

new ruleset.RulesetRulesActionParametersOverridesRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesList.get"></a>

```typescript
public get(index: number): RulesetRulesActionParametersOverridesRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRules">RulesetRulesActionParametersOverridesRules</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RulesetRulesActionParametersOverridesRules[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRules">RulesetRulesActionParametersOverridesRules</a>[]

---


### RulesetRulesActionParametersOverridesRulesOutputReference <a name="RulesetRulesActionParametersOverridesRulesOutputReference" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.Initializer"></a>

```typescript
import { ruleset } from '@cdktf/provider-cloudflare'

new ruleset.RulesetRulesActionParametersOverridesRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.resetAction">resetAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.resetScoreThreshold">resetScoreThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.resetSensitivityLevel">resetSensitivityLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.resetStatus">resetStatus</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAction` <a name="resetAction" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.resetAction"></a>

```typescript
public resetAction(): void
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.resetId"></a>

```typescript
public resetId(): void
```

##### `resetScoreThreshold` <a name="resetScoreThreshold" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.resetScoreThreshold"></a>

```typescript
public resetScoreThreshold(): void
```

##### `resetSensitivityLevel` <a name="resetSensitivityLevel" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.resetSensitivityLevel"></a>

```typescript
public resetSensitivityLevel(): void
```

##### `resetStatus` <a name="resetStatus" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.resetStatus"></a>

```typescript
public resetStatus(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.property.actionInput">actionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.property.scoreThresholdInput">scoreThresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.property.sensitivityLevelInput">sensitivityLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.property.scoreThreshold">scoreThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.property.sensitivityLevel">sensitivityLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRules">RulesetRulesActionParametersOverridesRules</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.property.actionInput"></a>

```typescript
public readonly actionInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `scoreThresholdInput`<sup>Optional</sup> <a name="scoreThresholdInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.property.scoreThresholdInput"></a>

```typescript
public readonly scoreThresholdInput: number;
```

- *Type:* number

---

##### `sensitivityLevelInput`<sup>Optional</sup> <a name="sensitivityLevelInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.property.sensitivityLevelInput"></a>

```typescript
public readonly sensitivityLevelInput: string;
```

- *Type:* string

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `scoreThreshold`<sup>Required</sup> <a name="scoreThreshold" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.property.scoreThreshold"></a>

```typescript
public readonly scoreThreshold: number;
```

- *Type:* number

---

##### `sensitivityLevel`<sup>Required</sup> <a name="sensitivityLevel" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.property.sensitivityLevel"></a>

```typescript
public readonly sensitivityLevel: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: RulesetRulesActionParametersOverridesRules | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRules">RulesetRulesActionParametersOverridesRules</a> | cdktf.IResolvable

---


### RulesetRulesActionParametersResponseList <a name="RulesetRulesActionParametersResponseList" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseList.Initializer"></a>

```typescript
import { ruleset } from '@cdktf/provider-cloudflare'

new ruleset.RulesetRulesActionParametersResponseList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseList.get"></a>

```typescript
public get(index: number): RulesetRulesActionParametersResponseOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponse">RulesetRulesActionParametersResponse</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RulesetRulesActionParametersResponse[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponse">RulesetRulesActionParametersResponse</a>[]

---


### RulesetRulesActionParametersResponseOutputReference <a name="RulesetRulesActionParametersResponseOutputReference" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.Initializer"></a>

```typescript
import { ruleset } from '@cdktf/provider-cloudflare'

new ruleset.RulesetRulesActionParametersResponseOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.resetContent">resetContent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.resetContentType">resetContentType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.resetStatusCode">resetStatusCode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContent` <a name="resetContent" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.resetContent"></a>

```typescript
public resetContent(): void
```

##### `resetContentType` <a name="resetContentType" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.resetContentType"></a>

```typescript
public resetContentType(): void
```

##### `resetStatusCode` <a name="resetStatusCode" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.resetStatusCode"></a>

```typescript
public resetStatusCode(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.property.contentInput">contentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.property.contentTypeInput">contentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.property.statusCodeInput">statusCodeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.property.content">content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.property.contentType">contentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.property.statusCode">statusCode</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponse">RulesetRulesActionParametersResponse</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.property.contentInput"></a>

```typescript
public readonly contentInput: string;
```

- *Type:* string

---

##### `contentTypeInput`<sup>Optional</sup> <a name="contentTypeInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.property.contentTypeInput"></a>

```typescript
public readonly contentTypeInput: string;
```

- *Type:* string

---

##### `statusCodeInput`<sup>Optional</sup> <a name="statusCodeInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.property.statusCodeInput"></a>

```typescript
public readonly statusCodeInput: number;
```

- *Type:* number

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.property.contentType"></a>

```typescript
public readonly contentType: string;
```

- *Type:* string

---

##### `statusCode`<sup>Required</sup> <a name="statusCode" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.property.statusCode"></a>

```typescript
public readonly statusCode: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: RulesetRulesActionParametersResponse | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponse">RulesetRulesActionParametersResponse</a> | cdktf.IResolvable

---


### RulesetRulesActionParametersServeStaleOutputReference <a name="RulesetRulesActionParametersServeStaleOutputReference" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.Initializer"></a>

```typescript
import { ruleset } from '@cdktf/provider-cloudflare'

new ruleset.RulesetRulesActionParametersServeStaleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.resetDisableStaleWhileUpdating">resetDisableStaleWhileUpdating</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisableStaleWhileUpdating` <a name="resetDisableStaleWhileUpdating" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.resetDisableStaleWhileUpdating"></a>

```typescript
public resetDisableStaleWhileUpdating(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.property.disableStaleWhileUpdatingInput">disableStaleWhileUpdatingInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.property.disableStaleWhileUpdating">disableStaleWhileUpdating</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStale">RulesetRulesActionParametersServeStale</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `disableStaleWhileUpdatingInput`<sup>Optional</sup> <a name="disableStaleWhileUpdatingInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.property.disableStaleWhileUpdatingInput"></a>

```typescript
public readonly disableStaleWhileUpdatingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `disableStaleWhileUpdating`<sup>Required</sup> <a name="disableStaleWhileUpdating" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.property.disableStaleWhileUpdating"></a>

```typescript
public readonly disableStaleWhileUpdating: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: RulesetRulesActionParametersServeStale;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStale">RulesetRulesActionParametersServeStale</a>

---


### RulesetRulesActionParametersSniOutputReference <a name="RulesetRulesActionParametersSniOutputReference" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.Initializer"></a>

```typescript
import { ruleset } from '@cdktf/provider-cloudflare'

new ruleset.RulesetRulesActionParametersSniOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValue` <a name="resetValue" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSni">RulesetRulesActionParametersSni</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: RulesetRulesActionParametersSni;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSni">RulesetRulesActionParametersSni</a>

---


### RulesetRulesActionParametersUriOutputReference <a name="RulesetRulesActionParametersUriOutputReference" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.Initializer"></a>

```typescript
import { ruleset } from '@cdktf/provider-cloudflare'

new ruleset.RulesetRulesActionParametersUriOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.putPath">putPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.putQuery">putQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.resetOrigin">resetOrigin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.resetQuery">resetQuery</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPath` <a name="putPath" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.putPath"></a>

```typescript
public putPath(value: RulesetRulesActionParametersUriPath): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.putPath.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPath">RulesetRulesActionParametersUriPath</a>

---

##### `putQuery` <a name="putQuery" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.putQuery"></a>

```typescript
public putQuery(value: RulesetRulesActionParametersUriQuery): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.putQuery.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQuery">RulesetRulesActionParametersUriQuery</a>

---

##### `resetOrigin` <a name="resetOrigin" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.resetOrigin"></a>

```typescript
public resetOrigin(): void
```

##### `resetPath` <a name="resetPath" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.resetPath"></a>

```typescript
public resetPath(): void
```

##### `resetQuery` <a name="resetQuery" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.resetQuery"></a>

```typescript
public resetQuery(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.property.path">path</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference">RulesetRulesActionParametersUriPathOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.property.query">query</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference">RulesetRulesActionParametersUriQueryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.property.originInput">originInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.property.pathInput">pathInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPath">RulesetRulesActionParametersUriPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.property.queryInput">queryInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQuery">RulesetRulesActionParametersUriQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.property.origin">origin</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUri">RulesetRulesActionParametersUri</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.property.path"></a>

```typescript
public readonly path: RulesetRulesActionParametersUriPathOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference">RulesetRulesActionParametersUriPathOutputReference</a>

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.property.query"></a>

```typescript
public readonly query: RulesetRulesActionParametersUriQueryOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference">RulesetRulesActionParametersUriQueryOutputReference</a>

---

##### `originInput`<sup>Optional</sup> <a name="originInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.property.originInput"></a>

```typescript
public readonly originInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: RulesetRulesActionParametersUriPath;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPath">RulesetRulesActionParametersUriPath</a>

---

##### `queryInput`<sup>Optional</sup> <a name="queryInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.property.queryInput"></a>

```typescript
public readonly queryInput: RulesetRulesActionParametersUriQuery;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQuery">RulesetRulesActionParametersUriQuery</a>

---

##### `origin`<sup>Required</sup> <a name="origin" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.property.origin"></a>

```typescript
public readonly origin: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: RulesetRulesActionParametersUri;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUri">RulesetRulesActionParametersUri</a>

---


### RulesetRulesActionParametersUriPathOutputReference <a name="RulesetRulesActionParametersUriPathOutputReference" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.Initializer"></a>

```typescript
import { ruleset } from '@cdktf/provider-cloudflare'

new ruleset.RulesetRulesActionParametersUriPathOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.resetExpression">resetExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExpression` <a name="resetExpression" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.resetExpression"></a>

```typescript
public resetExpression(): void
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.property.expressionInput">expressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPath">RulesetRulesActionParametersUriPath</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.property.expressionInput"></a>

```typescript
public readonly expressionInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: RulesetRulesActionParametersUriPath;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPath">RulesetRulesActionParametersUriPath</a>

---


### RulesetRulesActionParametersUriQueryOutputReference <a name="RulesetRulesActionParametersUriQueryOutputReference" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.Initializer"></a>

```typescript
import { ruleset } from '@cdktf/provider-cloudflare'

new ruleset.RulesetRulesActionParametersUriQueryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.resetExpression">resetExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExpression` <a name="resetExpression" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.resetExpression"></a>

```typescript
public resetExpression(): void
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.property.expressionInput">expressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQuery">RulesetRulesActionParametersUriQuery</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.property.expressionInput"></a>

```typescript
public readonly expressionInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: RulesetRulesActionParametersUriQuery;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQuery">RulesetRulesActionParametersUriQuery</a>

---


### RulesetRulesExposedCredentialCheckOutputReference <a name="RulesetRulesExposedCredentialCheckOutputReference" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.Initializer"></a>

```typescript
import { ruleset } from '@cdktf/provider-cloudflare'

new ruleset.RulesetRulesExposedCredentialCheckOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.resetPasswordExpression">resetPasswordExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.resetUsernameExpression">resetUsernameExpression</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPasswordExpression` <a name="resetPasswordExpression" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.resetPasswordExpression"></a>

```typescript
public resetPasswordExpression(): void
```

##### `resetUsernameExpression` <a name="resetUsernameExpression" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.resetUsernameExpression"></a>

```typescript
public resetUsernameExpression(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.property.passwordExpressionInput">passwordExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.property.usernameExpressionInput">usernameExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.property.passwordExpression">passwordExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.property.usernameExpression">usernameExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheck">RulesetRulesExposedCredentialCheck</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `passwordExpressionInput`<sup>Optional</sup> <a name="passwordExpressionInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.property.passwordExpressionInput"></a>

```typescript
public readonly passwordExpressionInput: string;
```

- *Type:* string

---

##### `usernameExpressionInput`<sup>Optional</sup> <a name="usernameExpressionInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.property.usernameExpressionInput"></a>

```typescript
public readonly usernameExpressionInput: string;
```

- *Type:* string

---

##### `passwordExpression`<sup>Required</sup> <a name="passwordExpression" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.property.passwordExpression"></a>

```typescript
public readonly passwordExpression: string;
```

- *Type:* string

---

##### `usernameExpression`<sup>Required</sup> <a name="usernameExpression" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.property.usernameExpression"></a>

```typescript
public readonly usernameExpression: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: RulesetRulesExposedCredentialCheck;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheck">RulesetRulesExposedCredentialCheck</a>

---


### RulesetRulesList <a name="RulesetRulesList" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesList.Initializer"></a>

```typescript
import { ruleset } from '@cdktf/provider-cloudflare'

new ruleset.RulesetRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesList.get"></a>

```typescript
public get(index: number): RulesetRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRules">RulesetRules</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RulesetRules[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRules">RulesetRules</a>[]

---


### RulesetRulesLoggingOutputReference <a name="RulesetRulesLoggingOutputReference" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.Initializer"></a>

```typescript
import { ruleset } from '@cdktf/provider-cloudflare'

new ruleset.RulesetRulesLoggingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.resetStatus">resetStatus</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetStatus` <a name="resetStatus" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.resetStatus"></a>

```typescript
public resetStatus(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesLogging">RulesetRulesLogging</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: RulesetRulesLogging;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesLogging">RulesetRulesLogging</a>

---


### RulesetRulesOutputReference <a name="RulesetRulesOutputReference" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.Initializer"></a>

```typescript
import { ruleset } from '@cdktf/provider-cloudflare'

new ruleset.RulesetRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.putActionParameters">putActionParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.putExposedCredentialCheck">putExposedCredentialCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.putLogging">putLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.putRatelimit">putRatelimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.resetAction">resetAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.resetActionParameters">resetActionParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.resetExposedCredentialCheck">resetExposedCredentialCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.resetLastUpdated">resetLastUpdated</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.resetLogging">resetLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.resetRatelimit">resetRatelimit</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putActionParameters` <a name="putActionParameters" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.putActionParameters"></a>

```typescript
public putActionParameters(value: RulesetRulesActionParameters): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.putActionParameters.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters">RulesetRulesActionParameters</a>

---

##### `putExposedCredentialCheck` <a name="putExposedCredentialCheck" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.putExposedCredentialCheck"></a>

```typescript
public putExposedCredentialCheck(value: RulesetRulesExposedCredentialCheck): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.putExposedCredentialCheck.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheck">RulesetRulesExposedCredentialCheck</a>

---

##### `putLogging` <a name="putLogging" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.putLogging"></a>

```typescript
public putLogging(value: RulesetRulesLogging): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.putLogging.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesLogging">RulesetRulesLogging</a>

---

##### `putRatelimit` <a name="putRatelimit" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.putRatelimit"></a>

```typescript
public putRatelimit(value: RulesetRulesRatelimit): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.putRatelimit.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimit">RulesetRulesRatelimit</a>

---

##### `resetAction` <a name="resetAction" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.resetAction"></a>

```typescript
public resetAction(): void
```

##### `resetActionParameters` <a name="resetActionParameters" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.resetActionParameters"></a>

```typescript
public resetActionParameters(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetExposedCredentialCheck` <a name="resetExposedCredentialCheck" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.resetExposedCredentialCheck"></a>

```typescript
public resetExposedCredentialCheck(): void
```

##### `resetLastUpdated` <a name="resetLastUpdated" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.resetLastUpdated"></a>

```typescript
public resetLastUpdated(): void
```

##### `resetLogging` <a name="resetLogging" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.resetLogging"></a>

```typescript
public resetLogging(): void
```

##### `resetRatelimit` <a name="resetRatelimit" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.resetRatelimit"></a>

```typescript
public resetRatelimit(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.actionParameters">actionParameters</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference">RulesetRulesActionParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.exposedCredentialCheck">exposedCredentialCheck</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference">RulesetRulesExposedCredentialCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.logging">logging</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference">RulesetRulesLoggingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.ratelimit">ratelimit</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference">RulesetRulesRatelimitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.ref">ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.actionInput">actionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.actionParametersInput">actionParametersInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters">RulesetRulesActionParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.exposedCredentialCheckInput">exposedCredentialCheckInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheck">RulesetRulesExposedCredentialCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.expressionInput">expressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.lastUpdatedInput">lastUpdatedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.loggingInput">loggingInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesLogging">RulesetRulesLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.ratelimitInput">ratelimitInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimit">RulesetRulesRatelimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.lastUpdated">lastUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRules">RulesetRules</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actionParameters`<sup>Required</sup> <a name="actionParameters" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.actionParameters"></a>

```typescript
public readonly actionParameters: RulesetRulesActionParametersOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference">RulesetRulesActionParametersOutputReference</a>

---

##### `exposedCredentialCheck`<sup>Required</sup> <a name="exposedCredentialCheck" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.exposedCredentialCheck"></a>

```typescript
public readonly exposedCredentialCheck: RulesetRulesExposedCredentialCheckOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference">RulesetRulesExposedCredentialCheckOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `logging`<sup>Required</sup> <a name="logging" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.logging"></a>

```typescript
public readonly logging: RulesetRulesLoggingOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference">RulesetRulesLoggingOutputReference</a>

---

##### `ratelimit`<sup>Required</sup> <a name="ratelimit" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.ratelimit"></a>

```typescript
public readonly ratelimit: RulesetRulesRatelimitOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference">RulesetRulesRatelimitOutputReference</a>

---

##### `ref`<sup>Required</sup> <a name="ref" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.actionInput"></a>

```typescript
public readonly actionInput: string;
```

- *Type:* string

---

##### `actionParametersInput`<sup>Optional</sup> <a name="actionParametersInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.actionParametersInput"></a>

```typescript
public readonly actionParametersInput: RulesetRulesActionParameters;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters">RulesetRulesActionParameters</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `exposedCredentialCheckInput`<sup>Optional</sup> <a name="exposedCredentialCheckInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.exposedCredentialCheckInput"></a>

```typescript
public readonly exposedCredentialCheckInput: RulesetRulesExposedCredentialCheck;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheck">RulesetRulesExposedCredentialCheck</a>

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.expressionInput"></a>

```typescript
public readonly expressionInput: string;
```

- *Type:* string

---

##### `lastUpdatedInput`<sup>Optional</sup> <a name="lastUpdatedInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.lastUpdatedInput"></a>

```typescript
public readonly lastUpdatedInput: string;
```

- *Type:* string

---

##### `loggingInput`<sup>Optional</sup> <a name="loggingInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.loggingInput"></a>

```typescript
public readonly loggingInput: RulesetRulesLogging;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesLogging">RulesetRulesLogging</a>

---

##### `ratelimitInput`<sup>Optional</sup> <a name="ratelimitInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.ratelimitInput"></a>

```typescript
public readonly ratelimitInput: RulesetRulesRatelimit;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimit">RulesetRulesRatelimit</a>

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `lastUpdated`<sup>Required</sup> <a name="lastUpdated" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.lastUpdated"></a>

```typescript
public readonly lastUpdated: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: RulesetRules | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRules">RulesetRules</a> | cdktf.IResolvable

---


### RulesetRulesRatelimitOutputReference <a name="RulesetRulesRatelimitOutputReference" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.Initializer"></a>

```typescript
import { ruleset } from '@cdktf/provider-cloudflare'

new ruleset.RulesetRulesRatelimitOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.resetCharacteristics">resetCharacteristics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.resetCountingExpression">resetCountingExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.resetMitigationTimeout">resetMitigationTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.resetPeriod">resetPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.resetRequestsPerPeriod">resetRequestsPerPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.resetRequestsToOrigin">resetRequestsToOrigin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.resetScorePerPeriod">resetScorePerPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.resetScoreResponseHeaderName">resetScoreResponseHeaderName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCharacteristics` <a name="resetCharacteristics" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.resetCharacteristics"></a>

```typescript
public resetCharacteristics(): void
```

##### `resetCountingExpression` <a name="resetCountingExpression" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.resetCountingExpression"></a>

```typescript
public resetCountingExpression(): void
```

##### `resetMitigationTimeout` <a name="resetMitigationTimeout" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.resetMitigationTimeout"></a>

```typescript
public resetMitigationTimeout(): void
```

##### `resetPeriod` <a name="resetPeriod" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.resetPeriod"></a>

```typescript
public resetPeriod(): void
```

##### `resetRequestsPerPeriod` <a name="resetRequestsPerPeriod" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.resetRequestsPerPeriod"></a>

```typescript
public resetRequestsPerPeriod(): void
```

##### `resetRequestsToOrigin` <a name="resetRequestsToOrigin" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.resetRequestsToOrigin"></a>

```typescript
public resetRequestsToOrigin(): void
```

##### `resetScorePerPeriod` <a name="resetScorePerPeriod" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.resetScorePerPeriod"></a>

```typescript
public resetScorePerPeriod(): void
```

##### `resetScoreResponseHeaderName` <a name="resetScoreResponseHeaderName" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.resetScoreResponseHeaderName"></a>

```typescript
public resetScoreResponseHeaderName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.property.characteristicsInput">characteristicsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.property.countingExpressionInput">countingExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.property.mitigationTimeoutInput">mitigationTimeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.property.periodInput">periodInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.property.requestsPerPeriodInput">requestsPerPeriodInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.property.requestsToOriginInput">requestsToOriginInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.property.scorePerPeriodInput">scorePerPeriodInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.property.scoreResponseHeaderNameInput">scoreResponseHeaderNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.property.characteristics">characteristics</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.property.countingExpression">countingExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.property.mitigationTimeout">mitigationTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.property.period">period</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.property.requestsPerPeriod">requestsPerPeriod</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.property.requestsToOrigin">requestsToOrigin</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.property.scorePerPeriod">scorePerPeriod</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.property.scoreResponseHeaderName">scoreResponseHeaderName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimit">RulesetRulesRatelimit</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `characteristicsInput`<sup>Optional</sup> <a name="characteristicsInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.property.characteristicsInput"></a>

```typescript
public readonly characteristicsInput: string[];
```

- *Type:* string[]

---

##### `countingExpressionInput`<sup>Optional</sup> <a name="countingExpressionInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.property.countingExpressionInput"></a>

```typescript
public readonly countingExpressionInput: string;
```

- *Type:* string

---

##### `mitigationTimeoutInput`<sup>Optional</sup> <a name="mitigationTimeoutInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.property.mitigationTimeoutInput"></a>

```typescript
public readonly mitigationTimeoutInput: number;
```

- *Type:* number

---

##### `periodInput`<sup>Optional</sup> <a name="periodInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.property.periodInput"></a>

```typescript
public readonly periodInput: number;
```

- *Type:* number

---

##### `requestsPerPeriodInput`<sup>Optional</sup> <a name="requestsPerPeriodInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.property.requestsPerPeriodInput"></a>

```typescript
public readonly requestsPerPeriodInput: number;
```

- *Type:* number

---

##### `requestsToOriginInput`<sup>Optional</sup> <a name="requestsToOriginInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.property.requestsToOriginInput"></a>

```typescript
public readonly requestsToOriginInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `scorePerPeriodInput`<sup>Optional</sup> <a name="scorePerPeriodInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.property.scorePerPeriodInput"></a>

```typescript
public readonly scorePerPeriodInput: number;
```

- *Type:* number

---

##### `scoreResponseHeaderNameInput`<sup>Optional</sup> <a name="scoreResponseHeaderNameInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.property.scoreResponseHeaderNameInput"></a>

```typescript
public readonly scoreResponseHeaderNameInput: string;
```

- *Type:* string

---

##### `characteristics`<sup>Required</sup> <a name="characteristics" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.property.characteristics"></a>

```typescript
public readonly characteristics: string[];
```

- *Type:* string[]

---

##### `countingExpression`<sup>Required</sup> <a name="countingExpression" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.property.countingExpression"></a>

```typescript
public readonly countingExpression: string;
```

- *Type:* string

---

##### `mitigationTimeout`<sup>Required</sup> <a name="mitigationTimeout" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.property.mitigationTimeout"></a>

```typescript
public readonly mitigationTimeout: number;
```

- *Type:* number

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.property.period"></a>

```typescript
public readonly period: number;
```

- *Type:* number

---

##### `requestsPerPeriod`<sup>Required</sup> <a name="requestsPerPeriod" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.property.requestsPerPeriod"></a>

```typescript
public readonly requestsPerPeriod: number;
```

- *Type:* number

---

##### `requestsToOrigin`<sup>Required</sup> <a name="requestsToOrigin" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.property.requestsToOrigin"></a>

```typescript
public readonly requestsToOrigin: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `scorePerPeriod`<sup>Required</sup> <a name="scorePerPeriod" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.property.scorePerPeriod"></a>

```typescript
public readonly scorePerPeriod: number;
```

- *Type:* number

---

##### `scoreResponseHeaderName`<sup>Required</sup> <a name="scoreResponseHeaderName" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.property.scoreResponseHeaderName"></a>

```typescript
public readonly scoreResponseHeaderName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: RulesetRulesRatelimit;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimit">RulesetRulesRatelimit</a>

---


